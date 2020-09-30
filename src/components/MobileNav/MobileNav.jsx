import React from 'react';
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import facebook from '../../assets/img/social/facebook.png';
import insta from '../../assets/img/social/instagram.png';
import Translate from '../Translate/Translate';

const MobileNav = ({ t, closeMenu }) => {
  return (
    <>
      <Translate />
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <button type="button" onClick={closeMenu}>
            <NavLink className={styles.link} to="/search">
              {t('Navigation.4')}
            </NavLink>
          </button>
        </li>
        <li className={styles.listItem}>
          <button type="button" onClick={closeMenu}>
            <NavLink className={styles.link} to="/partner">
              {t('Navigation.5')}
            </NavLink>
          </button>
        </li>
        <li className={styles.listItem}>
          <button type="button" onClick={closeMenu}>
            <NavLink className={styles.link} to="/science">
              {t('Navigation.1')}
            </NavLink>
          </button>
        </li>
        <li className={styles.listItem}>
          <button type="button" onClick={closeMenu}>
            <NavLink className={styles.link} to="/products">
              {t('Navigation.2')}
            </NavLink>
          </button>
        </li>
        <li className={styles.listItem}>
          <button type="button" onClick={closeMenu}>
            <NavLink className={styles.link} to="/contact-us">
              {t('Navigation.3')}
            </NavLink>
          </button>
        </li>
      </ul>
      <div className={styles.social}>
        <a
          href="https://www.facebook.com/Leuloukraine-100773991516551/?modal=admin_todo_tour"
          target="blank"
        >
          <img className={styles.socialImg} src={facebook} alt="facebook" />
        </a>
        <a
          href="https://instagram.com/leulo.ukr?igshid=iaacez2umqs0"
          target="blank"
        >
          <img className={styles.socialImg} src={insta} alt="instagram" />
        </a>
      </div>
    </>
  );
};

export default withTranslation()(MobileNav);

MobileNav.propTypes = {
  t: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
};
