import React from 'react';
import {delayUnmounting} from '../utils/utils';
import './Menu.scss';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  componentDidMount() {
    document.querySelectorAll(".lm-menu-items > a").forEach(el => {
      el.addEventListener("mouseover", () => {
        document.querySelector("#cursor").style.width = `${7*4}px`;
        document.querySelector("#cursor").style.height = `${7*4}px`;
      });
      el.addEventListener("mouseout", () => {
        document.querySelector("#cursor").style.width = "7px";
        document.querySelector("#cursor").style.height = "7px";
        document.querySelector("#cursor").style.transform = "translate(-50%, -50%)";
      });
    });

    document.querySelectorAll(".lm-menu-icons a").forEach(el => {
      el.addEventListener("mouseover", () => {
        document.querySelector("#cursor").style.transform = "translate(-50%, -50%) scale(0)";
      });
      el.addEventListener("mouseout", () => {
        document.querySelector("#cursor").style.transform = "translate(-50%, -50%)";
      });
    });
  }

  render() {
    let additionalClass = '';
    if (!this.props.isMounted) {
      additionalClass = 'unmounting';
    }

    return (
      <div className={"lm-menu-box"} >
        <div className={"lm-menu-backdrop " + additionalClass} onClick={() => this.props.onClick(false)}></div>
        <div className={"lm-menu-content " + additionalClass}>
          <div className={"lm-menu-items"}>
            <Link to="/about-me" replace>About Me</Link>
            <Link to="/resume" replace>Resume</Link>
            <Link to="/projects" replace>Projects</Link>
            <Link to="/performances" replace>Performances</Link>
            {/* <Link to="/" replace>Book Recommendations</Link> */}
            {/* <Link to="/" replace>Contacts</a> */}
            <div className={"lm-menu-icons"}>
              <a href="mailto:maliyp@cs.washington.edu"><img src="/images/mail_icon.png" /></a>
              <a target="_blank" href="https://www.linkedin.com/in/louis-maliyam/"><img src="/images/linkedin_icon.png" /></a>
              <a target="_blank" href="https://github.com/louismlym"><img src="/images/github_icon.png" /></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default delayUnmounting(Menu);