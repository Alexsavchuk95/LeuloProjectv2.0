import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';

const tr = {
  display: 'flex',
  width: '100px',
  justifyContent: 'space-between',
};

const cl = {
  color: '#000',
};

function Translate() {
  const { i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <ul className={styles.navigation}>
      <div style={tr} className={styles.listItem}>
        <div>
          <button
            className={styles.transBut}
            onClick={() => handleClick('ru')}
            type="button"
          >
            <p style={cl}>Рус</p>
          </button>
        </div>
        <span style={cl} className={styles.sp}>
          |
        </span>
        <div>
          <button
            className={styles.transBut}
            onClick={() => handleClick('ua')}
            type="button"
          >
            <p style={cl}>Укр</p>
          </button>
        </div>
      </div>
    </ul>
  );
}

export default Translate;
