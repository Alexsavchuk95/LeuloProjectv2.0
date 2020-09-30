import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import styles from './styles.module.css';
import logo from '../../../assets/img/leulo.png';
import awards from '../../../assets/img/footer.png';
import { ReactComponent as Arrow } from '../../../assets/img/down-arrow.svg';

class About extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
      displayMenuTwo: false,
      displayMenuThird: false,
      displayMenuFour: false,
      displayMenuFive: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.showDropdownMenuTwo = this.showDropdownMenuTwo.bind(this);
    this.hideDropdownMenuTwo = this.hideDropdownMenuTwo.bind(this);
    this.showDropdownMenuThird = this.showDropdownMenuThird.bind(this);
    this.hideDropdownMenuThird = this.hideDropdownMenuThird.bind(this);
    this.showDropdownMenuFour = this.showDropdownMenuFour.bind(this);
    this.hideDropdownMenuFour = this.hideDropdownMenuFour.bind(this);
    this.showDropdownMenuFive = this.showDropdownMenuFive.bind(this);
    this.hideDropdownMenuFive = this.hideDropdownMenuFive.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  showDropdownMenuTwo(event) {
    event.preventDefault();
    this.setState({ displayMenuTwo: true }, () => {
      document.addEventListener('click', this.hideDropdownMenuTwo);
    });
  }

  hideDropdownMenuTwo() {
    this.setState({ displayMenuTwo: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenuTwo);
    });
  }

  showDropdownMenuThird(event) {
    event.preventDefault();
    this.setState({ displayMenuThird: true }, () => {
      document.addEventListener('click', this.hideDropdownMenuThird);
    });
  }

  hideDropdownMenuThird() {
    this.setState({ displayMenuThird: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenuThird);
    });
  }

  showDropdownMenuFour(event) {
    event.preventDefault();
    this.setState({ displayMenuFour: true }, () => {
      document.addEventListener('click', this.hideDropdownMenuFour);
    });
  }

  hideDropdownMenuFour() {
    this.setState({ displayMenuFour: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenuFour);
    });
  }

  showDropdownMenuFive(event) {
    event.preventDefault();
    this.setState({ displayMenuFive: true }, () => {
      document.addEventListener('click', this.hideDropdownMenuFive);
    });
  }

  hideDropdownMenuFive() {
    this.setState({ displayMenuFive: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenuFive);
    });
  }

  render() {
    const { t } = this.props;
    const {
      displayMenu,
      displayMenuTwo,
      displayMenuThird,
      displayMenuFour,
      displayMenuFive,
    } = this.state;
    return (
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <div>
            <img className={styles.logo} src={logo} alt="logo" />
            <h3 className={styles.title}>LEULO</h3>
          </div>
          <div className={styles.btnCont}>
            <ul>
              <li className={styles.stList}>
                <div className={styles.Cnt}>
                  <button
                    type="button"
                    className={styles.btn}
                    onClick={this.showDropdownMenu}
                  >
                    {' '}
                    {t('About.9')}{' '}
                    <div className={styles.arrow}>
                      <Arrow />
                    </div>
                  </button>
                </div>
                {displayMenu ? (
                  <p className={styles.aboutExt}>{t('About.1')}</p>
                ) : null}
              </li>
              <li className={styles.stList}>
                <div className={styles.Cnt}>
                  <button
                    type="button"
                    className={styles.btn}
                    onClick={this.showDropdownMenuTwo}
                  >
                    {' '}
                    {t('About.2')}{' '}
                    <div className={styles.arrow}>
                      <Arrow />
                    </div>
                  </button>
                </div>
                {displayMenuTwo ? (
                  <p className={styles.aboutExt}>{t('About.3')}</p>
                ) : null}
              </li>
              <li className={styles.stList}>
                <div className={styles.Cnt}>
                  <button
                    type="button"
                    className={styles.btn}
                    onClick={this.showDropdownMenuThird}
                  >
                    {' '}
                    {t('About.4')}{' '}
                    <div className={styles.arrow}>
                      <Arrow />
                    </div>
                  </button>
                </div>
                {displayMenuThird ? (
                  <p className={styles.aboutExt}>{t('About.5')}</p>
                ) : null}
              </li>
              <li className={styles.stList}>
                <div className={styles.Cnt}>
                  <button
                    type="button"
                    className={styles.btn}
                    onClick={this.showDropdownMenuFour}
                  >
                    {' '}
                    {t('About.6')}{' '}
                    <div className={styles.arrow}>
                      <Arrow />
                    </div>
                  </button>
                </div>
                {displayMenuFour ? (
                  <p className={styles.aboutExt}>{t('About.7')}</p>
                ) : null}
              </li>
              <li className={styles.stList}>
                <div className={styles.Cnt}>
                  <button
                    type="button"
                    className={styles.btn}
                    onClick={this.showDropdownMenuFive}
                  >
                    {' '}
                    {t('About.8')}{' '}
                    <div className={styles.arrow}>
                      <Arrow />
                    </div>
                  </button>
                </div>
                {displayMenuFive ? (
                  <img className={styles.aboutImg} src={awards} alt="awards" />
                ) : null}
              </li>
            </ul>
          </div>
        </div>
        <div />
      </section>
    );
  }
}

export default withTranslation()(About);

About.propTypes = {
  t: PropTypes.func.isRequired,
};
