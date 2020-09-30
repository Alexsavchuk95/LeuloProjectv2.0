import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from '../Slider/Slider';
import imgHow from '../../assets/img/how.png';
import imgWhat from '../../assets/img/whatis.png';
import imgWorks from '../../assets/img/WORKS.png';
import Bounce from '../../assets/img/Bouncebackblend.png';
import Dew from '../../assets/img/dewelixir.png';
import styles from './styles.module.css';

const sl = {
  height: '320px',
};

function MobileHome() {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.slider}>
        <Slider style={sl} />
      </div>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <div className={styles.imgList}>
            <img className={styles.imgM} src={imgHow} alt="what is" />
          </div>
          <h3 className={styles.titleList}>{t('HomePage.1')}</h3>
          <span className={styles.textList}>{t('HomePage.2')}</span>
        </li>
        <li className={styles.listItem}>
          <div className={styles.imgList}>
            <img className={styles.imgM} src={imgWhat} alt="what's in" />
          </div>
          <h3 className={styles.titleList}>{t('HomePage.3')}</h3>
          <span className={styles.textList}>{t('HomePage.4')}</span>
        </li>
        <li className={styles.listItem}>
          <div className={styles.imgList}>
            <img className={styles.imgM} src={imgWorks} alt="work" />
          </div>
          <h3 className={styles.titleList}>{t('HomePage.5')}</h3>
          <span className={styles.textList}>{t('HomePage.6')}</span>
        </li>
      </ul>
      <div className={styles.container}>
        <img className={styles.btl} src={Dew} alt="" />
        <img className={styles.btl} src={Bounce} alt="" />
      </div>
      <div className={styles.supp}>
        <h3 className={styles.titleList}>{t('HomePage.7')}</h3>
        <span className={styles.supText}>{t('HomePage.8')}</span>
      </div>
    </>
  );
}

export default MobileHome;
