import React from 'react';
import './ContentItem.scss';
import DivToShowHide from './DivToShowHide';
import { parallax } from '../utils/utils';

class ContentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.imageRef = React.createRef();
    this.contentItem = React.createRef();
  }

  componentDidMount() {
    //console.log(this.imageRef);
    if (!this.props.noImageParallax) {
      parallax(this.imageRef.current, this.props.imageParallaxSpeed, false, false);
    }

    this.imageRef.current.querySelector("img").addEventListener("mouseover", () => {
      document.querySelector("#cursor").style.width = `${7*7}px`;
      document.querySelector("#cursor").style.height = `${7*7}px`;
      document.querySelector("#cursor").style.mixBlendMode = "normal";
      document.querySelector("#cursor").style.backgroundColor = "rgba(255,255,255,0.7)";
    });
    this.imageRef.current.querySelector("img").addEventListener("mouseout", () => {
      document.querySelector("#cursor").style.width = "7px";
      document.querySelector("#cursor").style.height = "7px";
      document.querySelector("#cursor").style.mixBlendMode = "difference";
      document.querySelector("#cursor").style.backgroundColor = "#fefefe";
    });
  }

  // componentDidMount() {
  //   window.addEventListener('wheel', (e) => this.handleScroll(e));
  // }

  // componentWillUnmount() {
  //     window.removeEventListener('wheel', (e) => this.handleScroll(e));
  // }

  // handleScroll(event) {
  //   let boundingClient = this.contentItem.current.getBoundingClientRect();
  //   if (boundingClient.y < 0) {
  //     // this.setState(state => ({
  //     //   imageTop: {top: (-boundingClient.y + 'px')}
  //     // }));
  //     console.log(this.imageContainer.current);
  //     this.imageContainer.current.style.position = 'fixed';
  //     this.imageContainer.current.style.top = '0px';
  //   } else {
  //     this.imageContainer.current.style.position = 'absolute';
  //     this.imageContainer.current.style.top = null;
  //   }

  //   if (this.imageContainer2.current) {
  //     boundingClient = this.imageContainer2.current.getBoundingClientRect();
  //     console.log(boundingClient);
  //     if (boundingClient.y < 0) {
  //       console.log(this.imageContainer2.current);
  //       this.imageContainer2.current.style.display = 'block';
  //       this.imageContainer2.current.style.position = 'fixed';
  //       this.imageContainer2.current.style.top = '0px';
  //     }
  //   }
  // }

  render() {
    let itemStyle = {};
    if (this.props.backgroundColor) {
      itemStyle = {
        backgroundColor: this.props.backgroundColor
      };
    }

    let imageStyle = {};
    if (this.props.hideImage) {
      imageStyle = {
        opacity: 0
      };
    }

    const img = (<DivToShowHide
      ref={this.imageRef}
      initialStyles="transform: translate(-40%, -50%);"
      element={<a className="ignore-a" target={this.props.imageTarget} href={this.props.imageLink}><img className={"lm-content-img"} alt={""} src={this.props.imageSrc} style={this.props.imageStyles}/></a>}
      animationTime="1.5s" />);

    return (
      <div id={this.props.id} className={"lm-content-item"} ref={this.props.contentRef} style={itemStyle}>
        <div className={"lm-content-item-grid-left"}>
          {this.props.content}
        </div>
        <div className={"lm-content-item-grid-right"} ref={this.imageRef}>
          {img}
        </div>
        {/* {this.props.attachTransitionImage && <TransitionImage imageContainers={this.props.imageContainers} content={this.props.contentRef} imageSources={this.props.imageSources}/>}
        <div className={"lm-content-item-grid-right"} ref={this.props.imageRef}>
          <img className={"lm-content-img"} alt={""} src={this.props.imageSrc} style={imageStyle}/>
        </div> */}
        {/* {this.props.count === 1 &&
        <div className={"lm-content-item-grid-right-2"} ref={this.props.imageRef2}>
        <img className={"lm-content-img-2"} alt={""} src={"images/3_homepage_2.PNG"}/>
      </div> */}
      </div>
    );
  }
}

export default ContentItem;