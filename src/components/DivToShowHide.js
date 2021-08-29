import React from 'react';
import './DivToShowHide.scss';
import styled, { keyframes, css } from "styled-components";
import _ from 'lodash';

class DivToShowHide extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // const getOffset = (element, horizontal = false) => {
    //   if(!element) return 0;
    //   return getOffset(element.offsetParent, horizontal) + (horizontal ? element.offsetLeft : element.offsetTop);
    // }
    const el = this.refs.div;
    const handleScroll = () => {
      const supportPageOffset = window.pageXOffset !== undefined;
      const isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
      const windowTop = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
      
      if (el.classList.contains("before-scroll")) {
        el.style.display = "initial";
        const boundingRect = el.getBoundingClientRect();
        el.style.display = "none";
        if (boundingRect.top < window.innerHeight - 150) {
          el.classList.remove("before-scroll");
          el.classList.add("after-scroll");
          el.style.display = "block";
        }
      }
    };
    window.addEventListener("scroll", _.debounce(handleScroll, 10), {
      capture: true,
      passive: true
    });
  }

  render() {
    const keyframe = keyframes`
      0% { ${this.props.initialStyles} opacity: 0; }
      100% { opacity: 1; }
    `;
    
    const animation = props =>
    css`
      ${keyframe} ${this.props.animationTime} ease-out;
    `

    const Div = styled.div`
      animation: ${animation};
    `;

    return (
      <Div ref="div" id={this.props.id} className={`div-to-show-hide before-scroll ${this.props.className}`}>
        {this.props.element}
      </Div>
    );
  }
}

export default DivToShowHide;