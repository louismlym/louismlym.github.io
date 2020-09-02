import React from 'react';
import './HamburgerMenu.scss';

class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  handleClick() {
    this.props.onClick();
    this.setState(state => ({
      showMenu: !state.showMenu
    }));
  }

  render() {
    return (
      <svg 
        width={this.props.width} 
        height={this.props.height} 
        viewBox="0 0 14 14" 
        className={"hamburger-menu " + (this.state.showMenu ? "clicked" : "")}
        onClick={() => this.handleClick()}>
        <path stroke={this.props.stroke} d="M2 4 l10 0" />
        <path stroke={this.props.stroke} d="M2 7 l10 0" />
        <path stroke={this.props.stroke} d="M2 10 l10 0" />
      </svg>
    );
  }
}

export default HamburgerMenu;