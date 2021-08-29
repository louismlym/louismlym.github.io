import React from 'react';
import NavigationBar from '../components/NavigationBar';
import ContentsContainer from '../components/ContentsContainer';
import DivToShowHide from '../components/DivToShowHide';
import Footer from '../components/Footer';
import './Home.scss'
import { parallax } from '../utils/utils';
import { Helmet } from 'react-helmet';
import Cursor from '../Cursor';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.querySelector("#intro-para").classList.remove("before-scroll");
    document.querySelector("#intro-para").classList.add("after-scroll");
    document.querySelector("#intro-para").style.display = "block";
    //setTimeout(() => parallax(document.querySelector("#intro-para"), 0.6), 500);
    //parallax(document.querySelector(".full-name"), -0.3);

    var lastPos, delta;

    var checkScrollSpeed = (function(settings){
      settings = settings || {};
  
      var newPos, timer,
          delay = settings.delay || 50; // in "ms" (higher means lower fidelity )
  
      function clear() {
        lastPos = null;
        delta = 0;
      }
  
      clear();
  
      return function(){
        newPos = window.scrollY;
        if ( lastPos != null ){ // && newPos < maxScroll 
          delta = newPos -  lastPos;
        }
        lastPos = newPos;
        clearTimeout(timer);
        timer = setTimeout(clear, delay);
        return delta;
      };
  })();
  
    // window.addEventListener("scroll", (e) => {
    //   checkScrollSpeed();
    //   document.documentElement.scrollTop = document.body.scrollTop = lastPos + 0.05 * (delta * 0.01);
    // })
    parallax(document.querySelector(".lm-hero"), -1, true);
  }

  render() {
    let introPara = (<p>👋 Hi, welcome to my portfolio! I'm a Master's student at the <a target="_blank" href="https://www.washington.edu/">University of Washington</a>,
      studying computer science.
      I love coding, dancing, and staying active. <br/><br/>
      Scroll down to know more about me.
    </p>);

    let initialStyles = "top: 72%;";

    return (
      <div id="home">
        <Helmet>
          <title>Louis Portfolio</title>
        </Helmet>
        <Cursor />
        <NavigationBar />
        <div className="lm-hero">
          <h1 className="full-name noselect"><span className="louis-text">Louis</span> <span className="maliyam-text">Maliyam</span></h1>
          <DivToShowHide
            initialStyles={initialStyles}
            id="intro-para"
            element={introPara}
            animationTime=".5s" />
        </div>
        <section className="lm-content">
          <ContentsContainer />
        </section>
        <section className="lm-footer">
          <Footer />
        </section>
      </div>
    );
  }
}

export default Home;