import React from 'react';
import Logo from './Logo';
import Menu from '../components/Menu'
import HamburgerMenu from './HamburgerMenu';
import './NavigationBar.scss';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  handleMenuClick() {
    this.setState(state => ({
      showMenu: !state.showMenu
    }));
  }

  render() {
    return (
      <header className="navbar">
        <Logo width="50px" height="50px" stroke="black" />
        <HamburgerMenu width="40px" height="40px" stroke="black" onClick={() => this.handleMenuClick()} />
        <Menu delayTime={500} isMounted={this.state.showMenu}/>
      </header>
    );
  }
}

export default NavigationBar;