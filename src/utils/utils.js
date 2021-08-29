import React from 'react';
import _ from 'lodash';

export function delayUnmounting(Component) {
  return class extends React.Component {
    state = {
      shouldRender: this.props.isMounted
    };

    componentDidUpdate(prevProps) {
      if (prevProps.isMounted && !this.props.isMounted) {
        setTimeout(
          () => this.setState({ shouldRender: false }),
          this.props.delayTime
        );
      } else if (!prevProps.isMounted && this.props.isMounted) {
        this.setState({ shouldRender: true });
      }
    }

    render() {
      return this.state.shouldRender ? <Component {...this.props} /> : null;
    }
  };
}

export function parallax(el, speed, useHeight = false, middle = false, startEarly = 0) {
  const getOffset = (element, horizontal = false) => {
    if(!element) return 0;
    return getOffset(element.offsetParent, horizontal) + (horizontal ? element.offsetLeft : element.offsetTop);
  }

  if (!useHeight) {
    //const originalTop = el.offsetTop;
    const originalInnerHeight = window.innerHeight;
    const handleScroll = () => {
      const parentOffset = getOffset(el) - el.offsetTop; // el.offsetParent ? el.offsetParent.offsetTop : 0;
      const heightDiff = window.innerHeight - originalInnerHeight;
      if (window.pageYOffset + startEarly >= parentOffset) {
        //el.style.top = `${originalTop + heightDiff + (window.pageYOffset - parentOffset) * speed}px`;
        el.style.top = `${(window.pageYOffset - parentOffset) * speed}px`;
      } else {
        el.style.top = "0px";
      }
    };
    window.addEventListener("scroll", _.debounce(handleScroll, 10), {
      capture: true,
      passive: true
    });
  } else {
    const originalHeight = el.getBoundingClientRect().height;
    const originalInnerHeight = window.innerHeight;
    const handleScroll = () => {
      const parentOffset = getOffset(el);
      const heightDiff = window.innerHeight - originalInnerHeight;
      let newHeight = originalHeight + heightDiff;
      if (window.pageYOffset >= parentOffset) {
        newHeight = originalHeight + heightDiff + (window.pageYOffset - parentOffset) * speed;
      }
      if (newHeight >= window.innerHeight * 2) {
        newHeight = window.innerHeight * 2;
      } else if (newHeight <= 0) {
        newHeight = 0;
      }
      el.style.height = `${newHeight}px`;
    }
    window.addEventListener("scroll", _.debounce(handleScroll, 5), {
      capture: true,
      passive: true
    });
  }
}