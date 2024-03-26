import { useState, useEffect, createContext, useContext } from 'react';
import { getProductByUrl, getProductVariantByUrl } from '../libs/api';
import { findJsonDecode } from '../libs/helpers';
import { buildStep, navData } from '../data/buildStep'; 

const ProductBuilderContext = createContext(null);

const ProductBuilderProvider = ({ children, productRootLink }) => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState();
  const [navTab, setNavTab] = useState(navData);
  const [navTabSelected, setNavTabSelected] = useState('variant');
  const [productVariantSelected, setProductVariantSelected] = useState(null);
  const [productVariantMetaData, setProductVariantMetaData] = useState(null);
  const [stepData, setStepData] = useState(buildStep);

  const _getProductObject = async (url) => {
    setLoading(true);
    const res = await getProductByUrl(url);
    const obj = findJsonDecode(res);
    setProduct(obj);
    setLoading(false);
  }

  const unlockTabs_fn = () => {
    setNavTab([...navTab].map(t => {
      t.disable = false;
      return t
    }))
  }

  const onUpdateStepDataBuilder = async () => {
    if(!productVariantSelected) return;
    setLoading(true);
    const requestUrl = `${ productRootLink }&variant=${ productVariantSelected }`;
    const res = await getProductVariantByUrl(requestUrl);

    const id_decode = [
      'PROPDUCT_JSON_CODE', 
      'METADATA_BASE', 
      'METADATA_CABINETCOLOUR', 
      'METADATA_BENCHTOPSELECTION', 
      'METADATA_TAPHOLESELECTION', 
      'METADATA_ADDON'];

    const obj = findJsonDecode(res);
    unlockTabs_fn();
    setProductVariantMetaData(obj);
    setNavTabSelected('colours');
    setLoading(false);
  }

  const onSelectVariant_fn = (vID) => {
    setProductVariantSelected(vID)
  }

  useEffect(() => {
    _getProductObject(productRootLink);
  }, [])

  useEffect(() => {
    onUpdateStepDataBuilder();
  }, [productVariantSelected])

  const value = {
    version: '1.0.0',
    loading, setLoading,
    navTab, setNavTab, 
    navTabSelected, setNavTabSelected,
    product,
    stepData,
    productVariantSelected,
    productVariantMetaData,
    onSelectVariant_fn,
  }

  return <ProductBuilderContext.Provider value={ value }>
    { children }
  </ProductBuilderContext.Provider>
}

const useProductBuilderContext = () => {
  return useContext(ProductBuilderContext);
}

export { ProductBuilderProvider, useProductBuilderContext }