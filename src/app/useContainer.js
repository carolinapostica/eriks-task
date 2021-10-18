import { useEffect, useState } from 'react';
import { omit, map, filter, head, keys } from 'lodash';

import api from './utils/api';
import { EXCLUDED_FEATURES, sortObjectKeys } from './utils';

function useContainer() {
  const [products, setProducts] = useState([]);
  const [selectedProductIds, setSelectedProductIds] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const getIds = (items) => map(items,'sku');
  const isSelected = (productId) => selectedProductIds.includes(productId);
  const transformedProducts = map(selectedProducts, transformProductFeatures);
  const product = head(transformedProducts) || {};
  const productFeatures = keys(product.features);

  useEffect(() => {
    api.getAllProductsApi()
      .then(({ products }) => {
        setProducts(products);
        setSelectedProductIds(getIds(products));
      })
  }, []);

  function transformProductFeatures(product = {}) {
    const { sku, name, listPrice, productImage, badges, stepQuantity } = product;
    const transformedFeatures = sortObjectKeys(omit(
      { ...product, StepQuantity: stepQuantity },
      EXCLUDED_FEATURES,
    ));

    return {
      id: sku,
      title: name,
      price: listPrice,
      imageUrl: productImage,
      badges: badges.split('|'),
      features: transformedFeatures,
    };
  }

  useEffect(() => {
    setSelectedProducts(filter(products, ({ sku: productId }) => isSelected(productId)));
  }, [selectedProductIds]);

  function toggleSelect(selectedItemId) {
    isSelected(selectedItemId)
      ? setSelectedProductIds(filter(selectedProductIds, (itemId) => itemId !== selectedItemId))
      : setSelectedProductIds([...selectedProductIds, selectedItemId]);
  }

  return {
    products,
    selectedProducts: transformedProducts,
    productFeatures,
    selectedProductIds,
    onToggleSelect: toggleSelect,
    isSelected,
    productsSize: products.length,
  }
}

export default useContainer;
