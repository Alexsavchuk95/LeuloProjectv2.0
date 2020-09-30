import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from '../Slider/Slider';
import imgHow from '../../assets/img/how.png';
import imgWhat from '../../assets/img/whatis.png';
import imgWorks from '../../assets/img/WORKS.png';
import Bounce from '../../assets/img/Bouncebackblend.png';
import Dew from '../../assets/img/dewelixir.png';
import styles from './styles.module.css';

const supTitle = {
  fontSize: '27px',
  position: 'absolute',
  left: '270px',
  top: '160px',
};

function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.slider}>
        <Slider />
      </div>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <div className={styles.imgList}>
            <img className={styles.imgW} src={imgHow} alt="what is" />
          </div>
          <h3 className={styles.titleList}>{t('HomePage.1')}</h3>
          <span className={styles.textList}>{t('HomePage.2')}</span>
        </li>
        <li className={styles.listItem}>
          <div className={styles.imgList}>
            <img className={styles.imgW} src={imgWhat} alt="what's in" />
          </div>
          <h3 className={styles.titleList}>{t('HomePage.3')}</h3>
          <span className={styles.textList}>{t('HomePage.4')}</span>
        </li>
        <li className={styles.listItem}>
          <div className={styles.imgList}>
            <img className={styles.imgW} src={imgWorks} alt="work" />
          </div>
          <h3 className={styles.titleList}>{t('HomePage.5')}</h3>
          <span className={styles.textList}>{t('HomePage.6')}</span>
        </li>
      </ul>
      <div className={styles.container}>
        <div className={styles.supplements} />
        <h3 style={supTitle} className={styles.titleList}>
          {t('HomePage.7')}
        </h3>
        <span className={styles.supText}>{t('HomePage.8')}</span>
        <div className={styles.jars}>
          <img className={styles.imgB} src={Bounce} alt="jar" />
          <img className={styles.imgB} src={Dew} alt="jar" />
        </div>
      </div>
    </>
  );
}

export default HomePage;
