import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Form from '../../../components/Form/Form';
import styles from './styles.module.css';
import { ReactComponent as Arrow } from '../../../assets/img/down-arrow.svg';

class GetPrice extends Component {
  state = {
    display: false,
    displayTwo: false,
    displayThird: false,
    displayFour: false,
  };

  showDropdownMenu = e => {
    e.preventDefault();
    this.setState({ display: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  };

  hideDropdownMenu = e => {
    e.preventDefault();
    this.setState({ display: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  };

  showDropdownMenuTwo = e => {
    e.preventDefault();
    this.setState({ displayTwo: true }, () => {
      document.addEventListener('click', this.hideDropdownMenuTwo);
    });
  };

  hideDropdownMenuTwo = e => {
    e.preventDefault();
    this.setState({ displayTwo: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenuTwo);
    });
  };

  showDropdownMenuThird = e => {
    e.preventDefault();
    this.setState({ displayThird: true }, () => {
      document.addEventListener('click', this.hideDropdownMenuThird);
    });
  };

  hideDropdownMenuThird = e => {
    e.preventDefault();
    this.setState({ displayThird: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenuThird);
    });
  };

  showDropdownMenuFour = e => {
    e.preventDefault();
    this.setState({ displayFour: true }, () => {
      document.addEventListener('click', this.hideDropdownMenuFour);
    });
  };

  hideDropdownMenuFour = e => {
    e.preventDefault();
    this.setState({ displayFour: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenuFour);
    });
  };

  render() {
    const { t } = this.props;
    const { display, displayTwo, displayThird, displayFour } = this.state;
    return (
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.listCont}>
            <h3 className={styles.title}>{t('GetPrice.1')}</h3>
            <p className={styles.textTitle}>{t('GetPrice.2')}</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <button
                  type="button"
                  className={styles.btn}
                  onClick={this.showDropdownMenu}
                >
                  {' '}
                  {t('GetPrice.3')}{' '}
                  <div className={styles.arrow}>
                    <Arrow />
                  </div>
                </button>
                {display ? (
                  <p className={styles.aboutExt}>{t('GetPrice.8')}</p>
                ) : null}
              </li>
              <li className={styles.listItem}>
                <button
                  type="button"
                  className={styles.btn}
                  onClick={this.showDropdownMenuTwo}
                >
                  {' '}
                  {t('GetPrice.4')}{' '}
                  <div className={styles.arrow}>
                    <Arrow />
                  </div>
                </button>
                {displayTwo ? (
                  <p className={styles.aboutExt}>{t('GetPrice.9')}</p>
                ) : null}
              </li>
              <li className={styles.listItem}>
                <button
                  type="button"
                  className={styles.btn}
                  onClick={this.showDropdownMenuThird}
                >
                  {' '}
                  {t('GetPrice.5')}{' '}
                  <div className={styles.arrow}>
                    <Arrow />
                  </div>
                </button>
                {displayThird ? (
                  <p className={styles.aboutExt}>{t('GetPrice.10')}</p>
                ) : null}
              </li>
              <li className={styles.listItem}>
                <button
                  type="button"
                  className={styles.btn}
                  onClick={this.showDropdownMenuFour}
                >
                  {' '}
                  {t('GetPrice.7')}{' '}
                  <div className={styles.arrow}>
                    <Arrow />
                  </div>
                </button>
                {displayFour ? (
                  <p className={styles.aboutExt}>{t('GetPrice.11')}</p>
                ) : null}
              </li>
            </ul>
          </div>
          <div className={styles.form}>
            <Form />
          </div>
        </div>
      </section>
    );
  }
}

export default withTranslation()(GetPrice);

GetPrice.propTypes = {
  t: PropTypes.func.isRequired,
};
