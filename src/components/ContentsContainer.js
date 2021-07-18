import React from 'react';
import ContentItem from './ContentItem';
import './ContentsContainer.scss';

class ContentsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.contentItem = React.createRef();
    this.imageRef2 = React.createRef();
    this.content = React.createRef();
    this.nextContent = React.createRef();
    this.imageContainers = [React.createRef(), React.createRef()];
    this.imageSources = ["images/1_loading_1.PNG", "images/3_homepage_3.PNG"];
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

  render() {
    return (
      <div className={"lm-content-container"}>
        <ContentItem
          contentRef={this.content}
          imageSrc={"images/1_loading_1.PNG"}
          hideImage={true}
          attachTransitionImage={true}
          imageRef={this.imageContainers[0]}
          imageContainers={this.imageContainers}
          imageSources={this.imageSources}/>
        <ContentItem
          contentRef={this.nextContent}
          imageSrc={"images/3_homepage_3.PNG"}
          hideImage={true}
          imageRef={this.imageContainers[1]}
          backgroundColor={"#5091bf"}/>
      </div>
    );
  }
}

export default ContentsContainer;