import React from 'react';
import './Footer.scss';
import { parallax } from '../utils/utils';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    parallax(document.querySelector("#keep-in-touch"), -0.2, false, false, window.innerHeight * 1.5);
    parallax(document.querySelector("#footer-content"), -0.2, false, false, window.innerHeight * 1.5);
    document.querySelectorAll("#email-container img").forEach(el => {
      el.addEventListener("mouseover", () => {
        document.querySelector("#cursor").style.transform = "translate(-50%, -50%) scale(0)";
      });
      el.addEventListener("mouseout", () => {
        document.querySelector("#cursor").style.transform = "translate(-50%, -50%)";
      });
    });
  }

  render() {
    return (
      <div id="footer">
        <div id="footer-container">
          <h2 id="keep-in-touch">Get in touch</h2>
          <div id="footer-content">
            <div id="email-container">
              <a href="mailto:maliyp@cs.washington.edu" className="ignore-a"><img src="/images/mail_icon.png" /></a>
              <a href="mailto:maliyp@cs.washington.edu" className="footer-text" id="email-text">maliyp@cs.washington.edu</a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/louis-maliyam/" target="_blank" className="footer-text">LinkedIn</a>
              <a href="https://github.com/louismlym" target="_blank" className="footer-text" id="github-text">GitHub</a>
              <a href="https://www.facebook.com/louis.mlym" target="_blank" className="footer-text" id="facebook-text">Facebook</a>
            </div>
          </div>
          <p id="created-by-text">Created by me, using <a href="https://reactjs.org/" target="_blank">ReactJs</a></p>
        </div>
      </div>
    );
  }
}

export default Footer;