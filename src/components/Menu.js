import React from 'react';
import {delayUnmounting} from '../utils/utils';
import './Menu.scss';

class Menu extends React.Component {
  render() {
    let additionalClass = '';
    if (!this.props.isMounted) {
      additionalClass = 'unmounting';
    }

    return (
      <div className={"lm-menu-box"} >
        <div className={"lm-menu-backdrop " + additionalClass}></div>
        <div className={"lm-menu-content " + additionalClass}></div>
      </div>
    );
  }
}

export default delayUnmounting(Menu);