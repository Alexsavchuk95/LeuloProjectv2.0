import React from 'react';
import styles from './styles.module.css';
import logo from '../../assets/img/leulo.png';

const c = {
  marginBottom: '50px',
  letterSpacing: '1.4em',
};

const Loading = () => (
  <>
    <section className={styles.cont}>
      <div className={styles.imgC}>
        <div style={c}>
          <span className={styles.Text} id={styles.L}>
            L
          </span>
          <span className={styles.Text} id={styles.E}>
            E
          </span>
          <span className={styles.Text} id={styles.U}>
            U
          </span>
          <span className={styles.Text} id={styles.L2}>
            L
          </span>
          <span className={styles.Text} id={styles.O}>
            O
          </span>
        </div>
        <img className={styles.img} src={logo} alt="logo" />
      </div>
    </section>
  </>
);

export default Loading;
