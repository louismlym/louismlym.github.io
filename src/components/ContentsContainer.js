import React from 'react';
import ContentItem from './ContentItem';
import './ContentsContainer.scss';
import './ContentItem.scss';
import DivToShowHide from './DivToShowHide';
import { parallax } from '../utils/utils';
import colors from '../constants.scss';
import { Link } from 'react-router-dom';

class ContentsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.contentItem = React.createRef();
    this.imageRef2 = React.createRef();
    this.content = React.createRef();
    this.nextContent = React.createRef();
    this.imageContainers = [React.createRef(), React.createRef()];
    this.imageSources = ["images/1_loading_1.PNG", "images/3_homepage_3.PNG"];
    this.lastContent = React.createRef();
  }

  // componentDidMount() {
  //   window.addEventListener('scroll', (e) => this.handleScroll(e));
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', (e) => this.handleScroll(e));
  // }

  // handleScroll(event) {
  //   let boundingClient = this.content.current.getBoundingClientRect();
  //   //console.log(boundingClient);
  //   if (boundingClient.y < 0) {
  //     this.currentImageContainer.current.style.position = 'fixed';
  //     this.currentImageContainer.current.style.top = '0';

  //     this.imageRef2.current.style.position = 'fixed';
  //     this.imageRef2.current.style.top = '0';
  //   } else {
  //     this.currentImageContainer.current.style.position = 'absolute';
  //     this.currentImageContainer.current.style.top = null;

  //     this.imageRef2.current.style.position = 'absolute';
  //     this.imageRef2.current.style.top = null;
  //   }

  //   if (this.imageRef2.current) {
  //     let cRect = this.imageRef2.current.getBoundingClientRect();
  //     let rect = this.nextImageContainer.current.getBoundingClientRect();
  //     console.log(cRect.y + this.imageRef2.current.clientHeight, rect.y);
  //     console.log(rect.y < cRect.y + this.imageRef2.current.clientHeight);
  //     if (rect.y < cRect.y + this.imageRef2.current.clientHeight) {
  //       //console.log(this.imageRef2.current.clientHeight);
  //       let delta = cRect.y + this.imageRef2.current.clientHeight - rect.y;
  //       let percent = 100 - delta * 100 / this.imageRef2.current.clientHeight;
  //       //console.log(percent);
  //       //this.imageRef2.current.style.clipPath = 'inset(' + percent + '% 0 0 0)';
  //       this.imageRef2.current.style.clipPath = 'polygon(0 ' + percent + '%, 100% ' + (percent - 10) + '%, 100% 100%, 0 100%)';
  //     } else {
  //       this.imageRef2.current.style.clipPath = 'inset(100% 0 0 0)';
  //     }
  //   }
  // }

  componentDidMount() {
    parallax(document.querySelector("#lm-live"), 0.2, false, true);
    parallax(document.querySelector("#lm-code"), -0.2, false, true);
    parallax(document.querySelector("#lm-dance"), -0.2, false, true);
    // const getOffset = (element, horizontal = false) => {
    //   if(!element) return 0;
    //   return getOffset(element.offsetParent, horizontal) + (horizontal ? element.offsetLeft : element.offsetTop);
    // }
    // const live = document.querySelector("#lm-live");
    // const originalTop = live.offsetTop;
    // const originalParentffset = live.offsetParent.offsetTop;
    // window.addEventListener("scroll", () => {
    //   if (window.pageYOffset >= originalParentffset) {
    //     live.style.top = `${originalTop + (window.pageYOffset - originalParentffset) * -0.30}px`;
    //   } else {
    //     live.style.top = `${originalTop}px`
    //   }
    // });
  }

  render() {
    const liveContent = (
      <div id="lm-live" className="lm-content-left">
        <DivToShowHide
          initialStyles="left: -25px;"
          element={<h2>Live.</h2>}
          animationTime="1.5s" />
        <DivToShowHide
          initialStyles="top: 54%;"
          element={<p>I'm a coder who is passionate in dance and believes in education. My goal is to know I live every day to the fullest.</p>}
          animationTime="1.5s" />
        <DivToShowHide
          initialStyles="top: 72%;"
          element={<Link to="/about-me" className="link-button ignore-a">
            <button id="about-me-btn" className="no-select">About Me</button>
            </Link>}
          animationTime="1.5s" />
      </div>
    );

    const codeContent = (
      <div id="lm-code" className="lm-content-left">
        <DivToShowHide
          initialStyles="left: -25px;"
          element={<h2>Code.</h2>}
          animationTime="1.5s" />
        <DivToShowHide
          initialStyles="top: 54%;"
          element={<p>My coding journey began since grade 10, and it hasn't stopped challenging me as a problem solver.
            I'm thrilled how coding can create great impact on business and people.
          </p>}
          animationTime="1.5s" />
        <DivToShowHide
          initialStyles="top: 72%;"
          element={<Link to="/projects" className="link-button ignore-a">
            <button id="projects-btn" className="no-select">Projects</button>
            </Link>}
          animationTime="1.5s" />
      </div>
    );

    const danceContent = (
      <div id="lm-dance" className="lm-content-left">
        <DivToShowHide
          initialStyles="left: -25px;"
          element={<h2>Dance.</h2>}
          animationTime="1.5s" />
        <DivToShowHide
          initialStyles="top: 54%;"
          element={<p>Dancing always bring me joys and keep me alive. It trains me to fail and be experimental.
            Recognizing that there's something bigger than me when I'm on the stage is a magical moment.
          </p>}
          animationTime="1.5s" />
        <DivToShowHide
          initialStyles="top: 72%;"
          element={<Link to="/performances" className="link-button ignore-a">
            <button id="performances-btn" className="no-select">Performances</button>
            </Link>}
          animationTime="1.5s" />
      </div>
    );

    return (
      <div className={"lm-content-container"}>
        <ContentItem
          //contentRef={this.content}
          imageSrc={"images/Louis_sunrise.jpg"}
          imageParallaxSpeed={-0.3}
          // hideImage={true}
          // attachTransitionImage={true}
          // imageRef={this.imageContainers[0]}
          // imageContainers={this.imageContainers}
          // imageSources={this.imageSources}
          backgroundColor={"black"}
          content={liveContent}/>
        <ContentItem
          //contentRef={this.nextContent}
          // imageSrc={"images/3_homepage_3.PNG"}
          // hideImage={true}
          // imageRef={this.imageContainers[1]}
          // backgroundColor={"#5091bf"}
          imageSrc={"images/laptop_coding.png"}
          imageStyles={{width: "50%"}}
          imageLink={"/projects"}
          imageParallaxSpeed={-0.2}
          backgroundColor={colors.primaryColor}
          content={codeContent}/>
        <ContentItem
          // imageSrc={"images/3_homepage_3.PNG"}
          // hideImage={true}
          // imageRef={this.imageContainers[1]}
          // backgroundColor={"#5091bf"}
          contentRef={this.lastContent}
          imageSrc={"images/dance_homepage.jpg"}
          //imageStyles={{width: "70%", boxShadow: "0px 0px 25px #FFFFFF"}}
          imageStyles={{width: "65%"}}
          imageParallaxSpeed={-0.2}
          //noImageParallax={true}
          backgroundColor={colors.accentColor}
          content={danceContent}/>
      </div>
    );
  }
}

export default ContentsContainer;