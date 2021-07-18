import React from 'react';
import './TransitionImage.scss';

class TransitionImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageSrc: this.props.imageSources[0],
      nextImageSrc: this.props.imageSources[1],
      currentImageContainer: this.props.imageContainers[0],
      nextImageContainer: this.props.imageContainers[1]
    };
    this.firstImage = React.createRef();
    this.secondImage = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', (e) => this.handleScroll(e));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', (e) => this.handleScroll(e));
  }

  handleScroll(event) {
    let rect = this.props.content.current.getBoundingClientRect();
    if (rect.y < 0) {
      this.firstImage.current.style.position = 'fixed';
      this.firstImage.current.style.top = '0';

      this.secondImage.current.style.position = 'fixed';
      this.secondImage.current.style.top = '0';
    } else {
      this.firstImage.current.style.position = 'absolute';
      this.firstImage.current.style.top = null;

      this.secondImage.current.style.position = 'absolute';
      this.secondImage.current.style.top = null;
    }

    if (this.secondImage.current) {
      let cRect = this.secondImage.current.getBoundingClientRect();
      rect = this.state.nextImageContainer.current.getBoundingClientRect();
      if (rect.y < cRect.y + this.secondImage.current.clientHeight) {
        //console.log(this.secondImage.current.clientHeight);
        let delta = cRect.y + this.secondImage.current.clientHeight - rect.y;
        let percent = 100 - delta * 100 / this.secondImage.current.clientHeight;
        //console.log(percent);
        //this.secondImage.current.style.clipPath = 'inset(' + percent + '% 0 0 0)';
        this.secondImage.current.style.clipPath = 'polygon(0 ' + percent + '%, 100% ' + (percent - 10) + '%, 100% 100%, 0 100%)';
      } else {
        this.secondImage.current.style.clipPath = 'inset(100% 0 0 0)';
      }
    }
  }

  render() {
    return (
      <div className={"transition-images-container"}>
        <div className={"transition-image-container"} ref={this.firstImage}>
          <img
            className={"transition-image-current"}
            alt={""}
            src={this.state.currentImageSrc}
          />
        </div>
        <div className={"transition-image-container"} ref={this.secondImage}>
          <img
            className={"transition-image-next"}
            alt={""}
            src={this.state.nextImageSrc}
          />
        </div>
      </div>
    );
  }
}

export default TransitionImage;