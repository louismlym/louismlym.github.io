import React from 'react';
import './HamburgerMenu.scss';

class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className={"hamburger-menu " + (this.props.showMenu ? "clicked" : "")} onClick={() => this.props.onClick()}>
        <svg 
          width={this.props.width} 
          height={this.props.height} 
          viewBox="0 0 14 14">
          <g stroke={this.props.stroke} strokeWidth={0.5}>
            <path d="M2 4 l10 0" />
            <path d="M2 7 l10 0" />
            <path d="M2 10 l10 0" />
          </g>
        </svg>
      </button>
    );
  }
}

export default HamburgerMenu;