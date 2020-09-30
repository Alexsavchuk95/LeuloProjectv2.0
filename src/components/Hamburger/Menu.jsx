import React, { Component } from 'react';
import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';
import MobileNav from '../MobileNav/MobileNav';

class Hamburger extends Component {
  state = {
    menuOpen: false,
  };

  openMenu = () => {
    this.setState({ menuOpen: true });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const { menuOpen } = this.state;
    return (
      <div>
        <CheeseburgerMenu
          isOpen={menuOpen}
          closeCallback={this.closeMenu}
          backgroundColor="#cdb166"
        >
          <MobileNav closeMenu={this.closeMenu} />
        </CheeseburgerMenu>

        <HamburgerMenu
          isOpen={menuOpen}
          menuClicked={this.openMenu}
          width={32}
          height={24}
          strokeWidth={3}
          rotate={0}
          color="#3a3b3f"
          borderRadius={0}
          animationDuration={0.5}
        />
      </div>
    );
  }
}

export default Hamburger;
