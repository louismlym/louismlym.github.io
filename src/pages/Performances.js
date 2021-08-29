import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import DivToShowHide from '../components/DivToShowHide';
import './Performances.scss'
import PerformanceItem from '../components/PerformanceItem';
import { Helmet } from 'react-helmet';
import Cursor from '../Cursor';

class Performances extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.querySelectorAll("#performances-hero .div-to-show-hide").forEach(el => {
      el.classList.remove("before-scroll");
      el.classList.add("after-scroll");
      el.style.display = "block";
    });
    document.querySelectorAll("#performances iframe").forEach(el => {
      el.addEventListener("mouseover", () => {
        document.querySelector("#cursor").style.transform = "translate(-50%, -50%) scale(0)";
      });
      el.addEventListener("mouseout", () => {
        document.querySelector("#cursor").style.transform = "translate(-50%, -50%)";
      });
    });
  }

  getDanceMajorsContent() {
    let header = (<div>
      <h2>Do We Have Home?</h2>
      <h3>Dance Majors Concert 2020</h3>
      <p>
        Choreographer: Sojung Ester Lim <br/>
        Lighting Designer: Peter Bracilano <br/>
        Videographer: Warren Woo
      </p>
      </div>);

    let video = (<div>
      <iframe src="https://www.youtube.com/embed/VJ4jvQ6AOZg"></iframe>
      </div>);

    return (<div className="performance-desc" id="dance-majors-concert">
      <DivToShowHide
        initialStyles="transform: translate(-35px, 0);"
        element={header}
        animationTime="1s" />
      <DivToShowHide
        initialStyles="transform: translate(0, 45px);"
        element={video}
        animationTime="1s" />
    </div>);
  }

  getUWDancePresentsContent() {
    let header = (<div>
      <h2>Pink Matter Vol2: What Is Love?</h2>
      <h3>UW Dance Presents 2020</h3>
      <p>
        Choreographer: Dani Tirrell in collaboration with "Majinn" Mike O'Neal Jr.<br/>
        Costume Designer: Jordan Emery Fell<br/>
        Lighting Designer: Peter Bracilano <br/>
        Videographer: Warren Woo
      </p>
      </div>);

    let video = (<div>
      <iframe src="https://www.youtube.com/embed/H7tCvRrUC5M"></iframe>
      </div>);

    return (<div className="performance-desc" id="uw-dance-presents">
      <DivToShowHide
        initialStyles="transform: translate(-35px, 0);"
        element={header}
        animationTime="1s" />
      <DivToShowHide
        initialStyles="transform: translate(0, 45px);"
        element={video}
        animationTime="1s" />
    </div>);
  }

  render() {
    let performances = (<DivToShowHide
      initialStyles=""
      element={<h1 className="full-name">Performances</h1>}
      animationTime=".6s" />);

    return (
      <div id="performances">
        <Helmet>
          <title>Louis Portfolio | Performances</title>
        </Helmet>
        <Cursor />
        <NavigationBar backgroundColor={"black"} />
        <div id="performances-hero">
          {performances}
        </div>
        <div id="performances-container">
          <PerformanceItem content={this.getDanceMajorsContent()} />
          <PerformanceItem content={this.getUWDancePresentsContent()} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Performances;