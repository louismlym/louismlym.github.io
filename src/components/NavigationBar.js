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

  handleMenuClick(forceShowMenu) {
    this.setState(state => {
      let newShowMenu = forceShowMenu ? forceShowMenu : !state.showMenu;
      if (newShowMenu) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
      return {showMenu: newShowMenu};
    });
  }

  render() {
    let navBarStyle = {};
    if (this.props.backgroundColor) {
      navBarStyle = {
        backgroundColor: this.props.backgroundColor
      };
    }

    return (
      <nav className="navbar" style={navBarStyle}>
        <Logo width="50px" height="50px" stroke="black" />
        <HamburgerMenu width="40px" height="40px" stroke="white" showMenu={this.state.showMenu} onClick={() => this.handleMenuClick()} />
        <Menu delayTime={500} isMounted={this.state.showMenu} onClick={() => this.handleMenuClick()}/>
      </nav>
    );
  }
}

export default NavigationBar;