import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';

import withContext from '../../utils/withContext';
import SelectedList from '../SelectedList';
import Row from './components/Row';
import styles from './Table.module.scss';

function Table({ productFeatures, selectedProducts, onToggleSelect }) {
  function handleRemove(id) {
    return () => onToggleSelect(id)
  }

  function renderBadges() {
    return (
      <tr className={styles.badges}>
        <th>Keurmerk</th>
        {map(selectedProducts, ({ badges }, index) => (
          <td>
            {map(badges, badgeUrl => (
              <img key={index} src={badgeUrl} alt={`Badge logo ${index}`} className={styles.image} />
            ))}
          </td>
        ))}
      </tr>
    );
  }

  function renderProduct() {
    return (
      <tr>
        <th><SelectedList /></th>

        {map(selectedProducts, ({ id, title, imageUrl, price }, index) => (
          <td key={index} className={styles.product}>
            <img className={styles.productImage} src={imageUrl} alt=""/>
            <h3 className={styles.title}>{title}</h3>
            <span className={styles.price}>{price}</span>
            <span className={styles.priceUnit}>per stuck / excl.btw</span>
            <hr className={styles.separator}/>
            <button className={styles.remove} onClick={handleRemove(id)}>+</button>
          </td>
        ))}
      </tr>
    );
  }

  function renderFeatures() {
    return map(productFeatures, (productFeature, index) => <Row keyName={productFeature} key={index} />);
  }

  return (
      <table className={styles.container}>
        <tbody>
          {renderProduct()}
          {renderBadges()}
          {renderFeatures()}
        </tbody>
      </table>
  )
}

Table.propTypes = {
  productFeatures: PropTypes.arrayOf(PropTypes.string),
  selectedProducts: PropTypes.arrayOf(PropTypes.object),
  onToggleSelect: PropTypes.func,
}

export default withContext(Table);
