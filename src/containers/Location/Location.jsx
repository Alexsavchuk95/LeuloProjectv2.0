import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';
import Map from '../../components/Map/Map';

function Location() {
  const { t } = useTranslation();
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>{t('Location.1')}</h3>
        <Map />
      </div>
      <h3 className={styles.titleList}>{t('Location.2')}</h3>
      <ul className={styles.list}>
        <li>
          <p className={styles.text}>{t('Location.3')}</p>
        </li>
        <li>
          <p className={styles.text}>{t('Location.4')}</p>
        </li>
        <li>
          <p className={styles.text}>{t('Location.5')}</p>
        </li>
        <li>
          <p className={styles.text}>{t('Location.6')}</p>
        </li>
        <li>
          <p className={styles.text}>{t('Location.7')}</p>
        </li>
      </ul>
    </section>
  );
}

export default Location;
