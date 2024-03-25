import { useState, useEffect, createContext, useContext } from 'react';
import { getProductByUrl } from '../libs/api';
import { findJsonDecode } from '../libs/helpers';

const ProductBuilderContext = createContext(null);
const ProductBuilderProvider = ({ children, productRootLink }) => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState();

  const _getProductObject = async (url) => {
    setLoading(true);
    const res = await getProductByUrl(url);
    const obj = findJsonDecode(res);
    setProduct(obj);
    setLoading(false);
  }

  useEffect(() => {
    _getProductObject(productRootLink);
  }, [])

  const value = {
    version: '1.0.0',
    loading, setLoading,
    product
  }

  return <ProductBuilderContext.Provider value={ value }>
    { children }
  </ProductBuilderContext.Provider>
}

const useProductBuilderContext = () => {
  return useContext(ProductBuilderContext);
}

export { ProductBuilderProvider, useProductBuilderContext }