import React from 'react';
import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';

/* components */
import Menu from '../components/menu';

/* stores */
import categoryStore from '../stores/categories-store';
import moneyStore from '../stores/money-store';

/* styles */
import './global.css';
import styles from './app.css';

/* use mobx strict mode */
useStrict(true);

const stores = { categoryStore, moneyStore };

const App = props => (
  <Provider { ...stores }>
    <div className={styles['app-container']}>
      <Menu />
      <div className={styles['page-container']}>
        {props.children}
      </div>
    </div>
  </Provider>
);

export default App;
