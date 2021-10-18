import React  from 'react';

import { PageContext } from './utils/withContext';
import Table from './components/Table';
import useContainer from './useContainer';
import styles from './App.module.scss';

function App(props) {
  const context = useContainer(props);

  return (
    <PageContext.Provider value={context}>
      <div className={styles.container}>
        <h1 className={styles.title}>{context.productsSize} producten vergelijken</h1>
        <Table />
      </div>
    </PageContext.Provider>
  )
}

export default App;
