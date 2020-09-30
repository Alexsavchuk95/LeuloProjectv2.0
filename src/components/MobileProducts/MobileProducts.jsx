import React from 'react';
import { useTranslation } from 'react-i18next';
import Bounce from '../../assets/img/Bouncebackblend.png';
import Dew from '../../assets/img/dewelixir.png';
import kiwi from '../../assets/img/products/kiwi.png';
import orange from '../../assets/img/products/vitaminc.png';
import broc from '../../assets/img/products/brocoli.png';
import red from '../../assets/img/products/B12.png';
import styles from './styles.module.css';

function MobileProducts() {
  const { t } = useTranslation();
  return (
    <section className={styles.wrapperPr}>
      <div className={styles.containerPr}>
        <div className={styles.bounceCont}>
          <img id={styles.green} className={styles.anImg} src={broc} alt="" />
          <img
            id={styles.orange}
            className={styles.anImg}
            src={orange}
            alt=""
          />
          <img id={styles.bottle} src={Bounce} alt="" />
        </div>
        <div className={styles.about}>
          <h3 className={styles.title}>Bounce Back Blend</h3>
          <span className={styles.undTitle}>{t('Products.1')}</span>
          <p className={styles.text}>{t('Products.2')}</p>
        </div>
      </div>
      <div className={styles.containerPr}>
        <div className={styles.about}>
          <h3 className={styles.title}>Dew Elixir</h3>
          <span className={styles.undTitle}>{t('Products.3')}</span>
          <p className={styles.text}>{t('Products.4')}</p>
        </div>
        <div className={styles.bounceCont}>
          <img id={styles.kivi} className={styles.anImg} src={kiwi} alt="" />
          <img id={styles.red} className={styles.anImg} src={red} alt="" />
          <img id={styles.dewBtl} src={Dew} alt="" />
        </div>
      </div>
      <div className={styles.infPr}>
        <span className={styles.infText}>{t('Products.5')}</span>
        <span className={styles.infText}>{t('Products.6')}</span>
        <span className={styles.infText}>{t('Products.7')}</span>
      </div>
    </section>
  );
}

export default MobileProducts;
