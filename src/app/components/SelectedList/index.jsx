import React from 'react';
import PropTypes from 'prop-types';

import withContext from '../../utils/withContext';
import ListItem from './components/ListItem';
import styles from './SelectedList.module.scss';

function SelectedList({ products, ...restProps }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Je selectie</h2>

      <ul>
        {products.map((product, index) => (
          <ListItem product={product} key={index} {...restProps} />
        ))}
      </ul>
    </div>
  )
}

SelectedList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  onToggleSelect: PropTypes.func.isRequired,
  selectedProducts: PropTypes.arrayOf(PropTypes.object),
}

export default withContext(SelectedList);
