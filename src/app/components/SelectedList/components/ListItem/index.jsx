import React from 'react';
import PropTypes from 'prop-types';

import styles from './ListItem.module.scss';

function ListItem({ product, isSelected, onToggleSelect }) {
  const { name, sku } = product;

  function handleChange() {
    onToggleSelect(sku);
  }

  return (
    <li className={styles.container}>
      <label>
        <input
          type="checkbox"
          checked={isSelected(sku)}
          onChange={handleChange}
        />
        {name}
      </label>
    </li>
  )
}

ListItem.defaultProps = {
  product: {},
}

ListItem.propTypes = {
  product: PropTypes.object.isRequired,
  onToggleSelect: PropTypes.func.isRequired,
  isSelected: PropTypes.func.isRequired,
}

export default ListItem;

