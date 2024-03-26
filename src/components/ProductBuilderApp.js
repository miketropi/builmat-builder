import { useState, useEffect, Fragment } from "react";
import { useProductBuilderContext } from "../context/ProductBuilderContext";
import NavTabs from './NavTabs';
import ProductVariantOptions from './ProductVariantOptions';

export default function ProductBuilderApp() {
  const { 
    product, 
    productVariantMetaData,
    loading, 
    navTab, 
    navTabSelected, 
    setNavTabSelected,
    productVariantSelected,
    onSelectVariant_fn } = useProductBuilderContext();

  const onChangeTabSelected = (name) => {
    setNavTabSelected(name)
  }

  const tabComponents = {
    variant: () => {
      return <>
        {
            product?.variants && 
            <ProductVariantOptions 
              productVariantData={ product.variants } 
              value={ productVariantSelected }
              onSelected={ variantID => {
                onSelectVariant_fn(variantID)
              } }
            />
          }
      </>
    },
    colours: () => {
      return <>
        { JSON.stringify(productVariantMetaData) }
      </>
    }
  }

  return <div className={ ['product-builder-app', (loading ? '__is-loading' : '')].join(' ') }>
    {
      product != null && <>
        <NavTabs 
          product={ product } 
          nav={ navTab } 
          selected={ navTabSelected } 
          onChangeTab={ name => onChangeTabSelected(name) } />
        
        <div className="page-width">
          { tabComponents[navTabSelected] 
            ? tabComponents[navTabSelected]() 
            : `Tab: ${ navTabSelected } does not register yet!!` }
        </div>
      </>
    }
  </div>
}