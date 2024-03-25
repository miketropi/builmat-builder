import { createRoot } from 'react-dom/client';
import ProductBuilderApp from '../components/ProductBuilderApp';
import { ProductBuilderProvider } from '../context/ProductBuilderContext';

((w) => {
  'use strict';

  w.addEventListener('DOMContentLoaded', () => {
    const Elem = document.getElementById('PRODUCT_BUILDER_APP');
    if(!Elem) return;

    const { productLink } = Elem.dataset;
    const root = createRoot(Elem);
    root.render(
      <ProductBuilderProvider productRootLink={ productLink }>
        <ProductBuilderApp />
      </ProductBuilderProvider>
    );
  })
})(window)