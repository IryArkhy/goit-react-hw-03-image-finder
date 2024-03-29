import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import styles from './components/App/App.module.css';
import './index.css';

ReactDOM.render(
  <App className={styles.app} />,
  document.getElementById('root'),
);
