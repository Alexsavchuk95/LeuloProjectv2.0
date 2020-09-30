import React from 'react';
import { useTranslation } from 'react-i18next';
import facebook from '../../assets/img/social/facebook.png';
import insta from '../../assets/img/social/instagram.png';
import fImg from '../../assets/img/footer.png';
import styles from './styles.module.css';
import location from '../../assets/img/social/location.png';
import phone from '../../assets/img/social/phone.png';
import mail from '../../assets/img/social/mail.png';

const Spw = {
  fontWeight: '400',
};

function MobileFooter() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className={styles.privacy}>
        <img src={fImg} alt="img" className={styles.imgPr} />
      </div>
      <div className={styles.follow}>
        <a
          href="https://www.facebook.com/Leuloukraine-100773991516551/?modal=admin_todo_tour"
          target="blank"
        >
          <img
            className={styles.imgSocial}
            src={facebook}
            alt="facebook"
            width="20px"
          />
        </a>
        <a
          href="https://instagram.com/leulo.ukr?igshid=iaacez2umqs0"
          target="blank"
        >
          <img
            className={styles.imgSocial}
            src={insta}
            alt="instagram"
            width="20px"
          />
        </a>
      </div>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <div className={styles.contSocial}>
            <img className={styles.imgSocial} src={phone} alt="phone" />
            <span style={Spw}>+3 8(063) 404 51 64</span>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.contSocial}>
            <img className={styles.imgSocial} src={mail} alt="mail" />
            <span style={Spw}>leulo.ukraine@gmail.com</span>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.contSocial}>
            <img className={styles.imgSocial} src={location} alt="location" />
            <span style={Spw}>{t('Foot.3')}</span>
          </div>
        </li>
      </ul>
    </footer>
  );
}

export default MobileFooter;
