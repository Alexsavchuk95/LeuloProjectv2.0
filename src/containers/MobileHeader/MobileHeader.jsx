import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import logoI from '../../assets/img/Imagotipo.png';
import Menu from '../../components/Hamburger/Menu';

const im = {
  width: '82px',
};
const MobileHeader = () => (
  <>
    <header className={styles.headerDes}>
      <NavLink className={styles.logo} to="/">
        <img style={im} src={logoI} alt="logo" />
      </NavLink>
      <Menu />
    </header>
  </>
);

export default MobileHeader;
