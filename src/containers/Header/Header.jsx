import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from '../Nav/Nav';
import logo from '../../assets/img/Imagotipo.png';
import styles from './styles.module.css';

const log = {
  width: '106px',
};

const Header = () => (
  <>
    <header className={styles.headerDes}>
      <NavLink to="/">
        <img style={log} src={logo} alt="logo" />
      </NavLink>
      <Nav />
    </header>
  </>
);

export default Header;
