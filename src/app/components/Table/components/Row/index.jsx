import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { map, uniq } from 'lodash';

import withContext from '../../../../utils/withContext';
import styles from './Row.module.scss';

function Row({ keyName, selectedProducts }) {
  const group = new Map();
  let isDifferent;


  map(selectedProducts, ({ features }) => {
    group.set(keyName, [...(group.get(keyName) || []), features[keyName]])
  })

  return (
    <tr className={styles.container}>
      <th className={cn(isDifferent && styles.isDifferent)}>{keyName}</th>

      {map(selectedProducts, ({ features }) => {
        console.log(group.get(keyName))
        console.log(uniq(group.get(keyName)))
        isDifferent = uniq(group.get(keyName)).length > 1;

        return (
          <td className={cn(styles.cell, isDifferent && styles.isDifferent)}>{features[keyName]}</td>
        )
      })}
    </tr>
  )
}

Row.propTypes = {
  keyName: PropTypes.string.isRequired,
  selectedProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default withContext(Row);

