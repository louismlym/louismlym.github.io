import React from 'react';
import './Cursor.css';
import classNames from "classnames";

class Cursor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: {x: 0, y: 0},
      hidden: true,
      scale: 1,
      picture: null
    };
  }

  componentDidMount() {
    document.addEventListener("mousemove", (e) => this.onMouseMove(e));
    document.addEventListener("mouseenter", () => this.onMouseEnter());
    document.addEventListener("mouseleave", () => this.onMouseLeave());
    document.querySelector(".louis-text").addEventListener("mouseover", () => this.onMouseOver(45, "/images/Louis_home_picture.jpg"));
    document.querySelector(".louis-text").addEventListener("mouseout", () => this.onMouseOut());
    document.querySelector(".maliyam-text").addEventListener("mouseover", () => this.onMouseOver(35, "/images/Louis_home_picture_2.jpg"));
    document.querySelector(".maliyam-text").addEventListener("mouseout", () => this.onMouseOut());
    document.querySelector(".lm-logo").addEventListener("mouseover", () => this.onMouseOver(5, null));
    document.querySelector(".lm-logo").addEventListener("mouseout", () => this.onMouseOut());
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", (e) => this.onMouseMove(e));
    document.removeEventListener("mouseenter", () => this.onMouseEnter());
    document.removeEventListener("mouseleave", () => this.onMouseLeave());
  }

  onMouseMove(e) {
    this.setState(state => ({
      position: {x: e.clientX, y: e.clientY},
      hidden: false
    }));
  }

  onMouseEnter() {
    this.setState(state => ({
      hidden: false
    }));
  }

  onMouseLeave() {
    this.setState(state => ({
      hidden: true
    }));
  }

  onMouseOver(scale, picture) {
    this.setState(state => ({
      scale,
      picture
    }));
  }

  onMouseOut() {
    this.setState(state => ({
      scale: 1,
      picture: null
    }));
  }

  render() {
    const cursorClasses = classNames(
      'cursor',
      {
        'cursor--hidden': this.state.hidden,
        'cursor--media': this.state.picture != null
      }
    )

    let style={
      left: `${this.state.position.x}px`,
      top: `${this.state.position.y}px`,
      transform: `translate(-50%, -50%) scale(${this.state.scale})`
    };
    if (this.state.picture != null) {
      style["backgroundImage"] = `url(${this.state.picture})`;
    }

    return (
      <div id="cursor" className={cursorClasses}
        style={style}
      />);
  }
}

export default Cursor;
