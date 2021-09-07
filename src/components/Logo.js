import React from 'react';
import './Logo.scss';
import { Link } from 'react-router-dom';

class Logo extends React.Component {
  render() {
    return (
      <Link id="logo-a" to="/" replace>
        <svg className="lm-logo" width={this.props.width} height={this.props.height} viewBox="0 0 16 16">
          <path stroke={this.props.stroke} d="M1.5 12 h4.5 a 2 2 0 10 4 0 a 2 2 0 10 -4 0 M1.5 12 l3 -10 l3 8 m1 0 l3 -8 l3 10" />
        </svg>
      </Link>
    );
  }
}

export default Logo;