import { useState, useEffect } from "react";
import { useProductBuilderContext } from "../context/ProductBuilderContext";

export default function ProductBuilderApp() {
  const { product, loading } = useProductBuilderContext();
  console.log(product);
  return <div className={ ['product-builder-app', (loading ? '__is-loading' : '')] }>
    <div className="page-width">
      { JSON.stringify(product) }
    </div>
  </div>
}