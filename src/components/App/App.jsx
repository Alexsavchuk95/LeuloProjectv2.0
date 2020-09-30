import React, { Component } from 'react';
import Desctop from '../../containers/Desctop/Desctop';
import Mobile from '../../containers/Mobile/Mobile';

export default class App extends Component {
  state = {
    width: window.innerWidth,
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 1030;

    if (isMobile) {
      return <Mobile />;
    }
    return <Desctop />;
  }
}
