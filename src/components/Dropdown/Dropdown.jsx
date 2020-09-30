import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import style from './style.module.css';

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
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

  render() {
    const { t } = this.props;
    const { displayMenu } = this.state;
    return (
      <div className={style.dropwdon}>
        <button
          type="button"
          className={style.btn}
          onClick={this.showDropdownMenu}
        >
          {' '}
          {t('Navigation.6')}{' '}
        </button>

        {displayMenu ? (
          <ul className={style.list}>
            <li className={style.listItem}>
              <button type="button" className={style.active}>
                <NavLink to="/search">{t('Navigation.4')}</NavLink>
              </button>
            </li>
            <li className={style.listItem}>
              <button type="button" className={style.active}>
                <NavLink className={style.link} to="/partner">
                  {t('Navigation.5')}
                </NavLink>
              </button>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default withTranslation()(Dropdown);

Dropdown.propTypes = {
  t: PropTypes.func.isRequired,
};
