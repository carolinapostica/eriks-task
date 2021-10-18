import React, { createContext } from 'react';

export const PageContext = createContext();

function withContext(Component) {
  return function PageComponent(props) {
    return (
      <PageContext.Consumer>
        {contexts => <Component {...props} {...contexts} />}
      </PageContext.Consumer>
    );
  };
}

export default withContext;
