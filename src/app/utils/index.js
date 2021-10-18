import {keys, map, reduce, upperFirst} from 'lodash';

export const EXCLUDED_FEATURES = [
  'salePrice',
  'manufacturerName',
  'grossPrice',
  'BUP_UOM',
  'BUP_Value',
  'uom',
  'productImage',
  'BUP_Conversion',
  'minQuantity',
  'manufacturerImage',
  'name',
  'sku',
  'listPrice',
  'channel',
  'display',
  'atp',
  'badges',
];

export function sortObjectKeys(obj) {
  return reduce(
    map(keys(obj), upperFirst).sort(),
    (acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {})
}
