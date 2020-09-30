import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';
import ContactForm from '../Form/Form';

function Contacs() {
  const { t } = useTranslation();
  return (
    <section className={styles.wrapperPr}>
      <div className={styles.container}>
        <div className={styles.containerCont}>
          <h2 className={styles.titleCon}>{t('ContuctUs.1')}</h2>
          <p className={styles.textCon}>{t('ContuctUs.2')}</p>
          <p className={styles.textCon}>{t('ContuctUs.3')}</p>
          <h3 className={styles.contacs}>{t('ContuctUs.4')}</h3>
          <p className={styles.spCont} href="/">
            leulo.ukraine@gmail.com
          </p>
          <h3 className={styles.contacs}>{t('ContuctUs.5')}</h3>
          <p className={styles.spCont} href="/">
            +3 8(063) 404 51 64
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contacs;
