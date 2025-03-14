import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  const record = localStorage.getItem('record') || 0;

  return (
    <header className={styles.header}>
      <svg width="40" height="40" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><defs></defs><g fill="none"><path fill="#000" d="M24 .5a11 11 0 0110.9 10H44a4 4 0 014 4V44a4 4 0 01-4 4H4a4 4 0 01-4-4V14.5a4 4 0 014-4h9.1A11 11 0 0124 .5zm5 10a5 5 0 00-10 0h10z"></path><path fill="#FFF" d="M44.9 41.6c.6.4 1 1 1 1.7a1.8 1.8 0 01-2 1.8 1.8 1.8 0 01-1.8-1.8 1.9 1.9 0 012.8-1.7zM18.3 26.2c3.5 0 4.8 1.7 4.8 5.5 0 2.4-.4 4-2.1 5l2.8 8.3h-3.1l-2.5-7.7h-1.7V45h-3V26.2h4.8zm17.4 0c3.4 0 4.8 1.8 4.8 5.7 0 3.8-1.3 5.8-4.8 5.8h-1.8V45h-3V26.2h4.8zm-23.8 0v2.7H8.8V45h-3V29H2.7v-2.7h9.2zm16.6 0V45h-3V26.2h3zm16.9 0v13.5h-2.8V26.2h2.8zM35.7 29H34V35h1.8c1.6 0 1.8-1.4 1.8-3 0-1.7-.2-3.1-1.8-3.1zm-17.3 0h-1.9v5.7h1.9c1.5 0 1.8-1.3 1.8-2.8 0-1.6-.3-3-1.8-3zM7 14c.7.8.7 2.2.7 4v.3c0 1.9 0 3.3-.7 4.2a2.4 2.4 0 01-2 .8 2.4 2.4 0 01-1.9-.8c-.6-.8-.7-2-.7-3.6v-1.3c0-1.6 0-2.8.7-3.6a2.4 2.4 0 012-.8A2.4 2.4 0 017 14zm36-.8c.7 0 1.4.3 1.9.8.7.8.7 2.2.7 4v.3c0 1.9 0 3.3-.7 4.2a2.6 2.6 0 01-3.9 0c-.7-.8-.7-2.2-.7-4v-.2c0-2 0-3.4.7-4.3a2.6 2.6 0 012-.8zm-32.4.1l2.3 5.9v-5.9h1.6v9.9H13l-2.3-5.9v5.9H9.2v-9.9h1.4zm9.7 0v1.4h-2.6v2.8h2.2V19h-2.2v2.9h2.6v1.4H16v-9.9h4.2zm8.5 0v1.4h-1.6v8.5h-1.6v-8.5H24v-1.4h4.8zm2.6 0l1 7.5 1.4-7.5h1.7l1.4 7.5 1-7.5h1.6l-1.8 9.9H36l-1.4-7.5-1.4 7.5h-1.6l-1.9-9.9h1.7zM4.4 15c-.4.4-.4 1.3-.4 3v.3c0 1.8 0 2.7.3 3.2a.8.8 0 00.8.4c.3 0 .5-.1.7-.4.3-.5.3-1.4.3-3.3 0-1.8 0-2.7-.3-3.2a.8.8 0 00-.7-.4.8.8 0 00-.8.4zm38.6-.4a.8.8 0 00-.8.4c-.3.5-.3 1.4-.3 3.3 0 1.8 0 2.7.3 3.2.2.3.5.4.8.4.3 0 .5-.1.7-.4.3-.5.3-1.4.3-3.3 0-1.8 0-2.7-.3-3.2a.8.8 0 00-.7-.4zM32.2 8.4l1-.2-1 3.2L30 9l1-.2A7.3 7.3 0 0016.8 10a.7.7 0 01-1.3-.2 8.7 8.7 0 0116.7-1.4z"></path></g></svg>

      <div className={styles.title}><a href="https://github.com/Povyshka/georgianGame" target='_blank' rel="noreferrer">Грузинская вечеринка!</a></div>
      <div className={styles.record}>Ваш рекорд: {record}</div>
    </header>
  );
};

export default Header;