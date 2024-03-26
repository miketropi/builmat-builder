import { useState, useEffect } from "react";

export default function ProductVariantOptions({ productVariantData, onSelected, value }) {
  const [variants, setVariants] = useState([]);
  
  useEffect(() => {
    setVariants(productVariantData);
  }, [productVariantData]);

  return <div className="product-variant-options">
    <div className="product-variant-options__heading">
      <h2 className="heading-text">Build your own</h2>
      <p>Customise your vanity online. Simply use the selections step by step to create your dream vanity!</p>
    </div>
    <div className="__variants">
      { variants.map(({ id, name, featured_image }) => {
        return <div 
          key={ id } 
          className={ ['product-variant-options__item', (value == id ? '__selected' : '')].join(' ') } 
          onClick={ e => onSelected(id) }>
          <div className="__thumbnail">
            <img src={ featured_image?.src } alt={ name } />
          </div>
          <h4 className="product-variant-name">{ name }</h4>
        </div>
      })  }
    </div>
  </div>
}