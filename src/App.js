import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import './App.css';
import Cursor from './Cursor';
import { ScrollView } from 'react-native';
import AboutMe from './pages/AboutMe';
import Performances from './pages/Performances';

function App() {
//   if (window.addEventListener) document.addEventListener('DOMMouseScroll', wheel, { passive: false });
//   // window.addEventListener('mousewheel', wheel, { passive: false });
//   // document.addEventListener('mousewheel', wheel, { passive: false });
//  // window.onmousewheel = document.onmousewheel = wheel;

//   let getWindowScrollTop = () => {
//     const supportPageOffset = window.pageXOffset !== undefined;
//     const isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
//     return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
//   };

//   let setWindowScrollTop = (newTop) => {
//     const supportPageOffset = window.pageXOffset !== undefined;
//     const isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
//     if (supportPageOffset) {
//       window.pageYOffset = newTop;
//     } else if (isCSS1Compat) {
//       document.documentElement.scrollTop = newTop;
//     } else {
//       document.body.scrollTop = newTop;
//     }
//   };

//   function wheel(event) {
//     var delta = 0;
//     if (event.wheelDelta) delta = event.wheelDelta / 120;
//     else if (event.detail) delta = -event.detail / 3;

//     handle(delta);
//     if (event.preventDefault) event.preventDefault();
//     event.returnValue = false;
//     return false;
//   }

//   function handle(delta) {
//     var time = 0;
//     var distance = 0.3;
//     // console.log(getWindowScrollTop());
//     // console.log(getWindowScrollTop() - (distance * delta));
//     setWindowScrollTop(0);
//     //setWindowScrollTop(getWindowScrollTop() - (distance * delta));
//     //console.log(getWindowScrollTop());
//   }
  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div id="lm-portfolio">
      <Cursor/>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about-me">
            <AboutMe />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/performances">
            <Performances />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
