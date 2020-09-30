import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';
import natural from '../../../assets/img/feature-natural-icon.png';
import protection from '../../../assets/img/feature-protection-icon.png';

function Advantages() {
  const { t } = useTranslation();
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h4 className={styles.title}>{t('Advantages.1')}</h4>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <img className={styles.listImg} src={natural} alt="natural" />
            <p>{t('Advantages.2')}</p>
          </li>
          <li className={styles.listItem}>
            <img className={styles.listImg} src={protection} alt="protection" />
            <p>{t('Advantages.3')}</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Advantages;
