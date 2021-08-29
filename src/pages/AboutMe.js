import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import DivToShowHide from '../components/DivToShowHide';
import './AboutMe.scss'
import { parallax } from '../utils/utils';
import { Helmet } from 'react-helmet';
import Cursor from '../Cursor';

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.querySelectorAll("#about-me-hero .div-to-show-hide").forEach(el => {
      el.classList.remove("before-scroll");
      el.classList.add("after-scroll");
      el.style.display = "block";
    });
    parallax(document.querySelector("#about-me-hero img"), -0.2, false, false);
  }

  render() {
    let louisMaliyam = (<DivToShowHide
      initialStyles="transform: translate(-25px, 0);"
      element={<h1>Louis Maliyam</h1>}
      animationTime="1s" />);
    
    let paragraph = (<p>Thanks for visiting my website! My name is Louis, and I'm currently
      a Master's student at the <a href="https://www.uw.edu/" target="_blank">University of Washington</a>.
      <br/><br/>
      I developed passion in problem solving
      during my childhood, when I helped my family run an internet café. Then, I got exposed to
      competitive programming in grade 10, where I attended Thailand Computing Olympiad training
      camp. Feeling amazed by the great impact of technologies and grateful of my opportunities
      to pursue computer science degree, I'd like to be a driving force in CS education, which
      was reflected through my teaching experiences both in Thailand and as a teaching assistant
      at the <a href="https://www.cs.washington.edu/" target="_blank">Paul G. Allen school</a> for
      7 quarters. Motivated
      by <a href="https://www.microsoft.com/en-us/teals" target="_blank">Microsoft TEALS program</a>,
      I wish to be involved in education, even when working full-time, to expand opportunities in
      CS education, that I was once received, to diverse groups of students.
      <br/><br/>
      Coding is not the only thing that easily brought me
      into <a href="https://en.wikipedia.org/wiki/Flow_(psychology)" target="_blank">flow</a>. Dancing
      also brings me joys and reminds me that I can always achieve a better version of myself. I've learned
      to be vulnerable yet strong, experimental, and mindful from the dance community.
    </p>);

    let paragraphDiv = (<DivToShowHide
      initialStyles="transform: translate(-25px, 0);"
      element={paragraph}
      animationTime="1s" />);

    return (
      <div id="about-me">
        <Helmet>
          <title>Louis Portfolio | About Me</title>
        </Helmet>
        <Cursor />
        <NavigationBar />
        <div id="about-me-hero">
          {louisMaliyam}
          {paragraphDiv}
          <img src="images/Louis_about.jpg" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default AboutMe;