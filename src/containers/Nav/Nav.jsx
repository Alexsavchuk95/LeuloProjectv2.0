import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.css';
import facebook from '../../assets/img/social/facebook.png';
import insta from '../../assets/img/social/instagram.png';
import Dropdown from '../../components/Dropdown/Dropdown';

const social = {
  padding: '5px 0px',
  width: '20px',
};

const tr = {
  display: 'flex',
  width: '100px',
  justifyContent: 'space-between',
};

function Nav() {
  const { t, i18n } = useTranslation();
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
            Рус
          </button>
        </div>
        <span className={styles.sp}>|</span>
        <div>
          <button
            className={styles.transBut}
            onClick={() => handleClick('ua')}
            type="button"
          >
            Укр
          </button>
        </div>
      </div>
      <Dropdown />
      <li className={styles.listItem}>
        <NavLink to="/science">{t('Navigation.1')}</NavLink>
      </li>
      <li className={styles.listItem}>
        <NavLink to="/products">{t('Navigation.2')}</NavLink>
      </li>
      <li className={styles.listItem}>
        <NavLink to="/contact-us">{t('Navigation.3')}</NavLink>
      </li>
      <div className={styles.social}>
        <a
          href="https://www.facebook.com/Leuloukraine-100773991516551/?modal=admin_todo_tour"
          target="blank"
        >
          <img style={social} src={facebook} alt="facebook" />
        </a>
        <a
          href="https://instagram.com/leulo.ukr?igshid=iaacez2umqs0"
          target="blank"
        >
          <img style={social} src={insta} alt="instagram" />
        </a>
      </div>
    </ul>
  );
}

export default Nav;
