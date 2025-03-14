import React from 'react';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import Game from './components/Game/Game';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Game />
    </div>
  );
};

export default App;