import React from 'react';
import { useTranslation } from 'react-i18next';
import Form from '../../components/Form/Form';
import Advantages from './Advantages/Advantages';
import About from './About/About';
import GetPrice from './GetPrice/GetPrice';
import styles from './styles.module.css';
import Bounce from '../../assets/img/Bouncebackblend.png';
import Dew from '../../assets/img/dewelixir.png';
import ball from '../../assets/img/ball.png';

function Partner() {
  const { t } = useTranslation();
  return (
    <section className={styles.wrapperSect}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>{t('Partner.1')}</h3>
        <div className={styles.container}>
          <div className={styles.containerBrend}>
            <div className={styles.containerList}>
              <h4 className={styles.listTitle}>{t('Partner.2')}</h4>
              <div className={styles.contListImg}>
                <div className={styles.listContainer}>
                  <ul className={styles.list}>
                    <li className={styles.listItem}>{t('Partner.3')}</li>
                    <li className={styles.listItem}>{t('Partner.4')}</li>
                    <li className={styles.listItem}>{t('Partner.5')}</li>
                    <li className={styles.listItem}>{t('Partner.6')}</li>
                  </ul>
                </div>
                <div className={styles.contImg}>
                  <img className={styles.listImg} src={Bounce} alt="Bounce" />
                  <img className={styles.listImgDew} src={Dew} alt="Dew" />
                </div>
                <img className={styles.ball} src={ball} alt="ball" />
                <img className={styles.ball2} src={ball} alt="ball" />
                <img className={styles.ball3} src={ball} alt="ball" />
              </div>
            </div>
            <div className={styles.containerInfo}>
              <ul className={styles.listInfo}>
                <li className={styles.listItemInfo}>
                  <h5 className={styles.titleINfo}>{t('Partner.7')}</h5>
                  <p>{t('Partner.8')}</p>
                </li>
                <li className={styles.listItemInfo}>
                  <h5 className={styles.titleINfo}>{t('Partner.9')}</h5>
                  <p>{t('Partner.10')}</p>
                </li>
                <li className={styles.listItemInfo}>
                  <h5 className={styles.titleINfo}>{t('Partner.11')}</h5>
                  <p>{t('Partner.12')}</p>
                </li>
                <li className={styles.listItemInfo}>
                  <h5 className={styles.titleINfo}>
                    {t('Partner.13')} <br /> {t('Partner.14')}
                  </h5>
                  <p>{t('Partner.16')}</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.form}>
            <Form />
          </div>
        </div>
      </div>
      <Advantages />
      <About />
      <GetPrice />
    </section>
  );
}

export default Partner;
