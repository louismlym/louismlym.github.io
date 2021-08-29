import React from 'react';
import './PerformanceItem.scss';

class PerformanceItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    let itemStyle = {};
    if (this.props.backgroundColor) {
      itemStyle = {
        backgroundColor: this.props.backgroundColor
      };
    }

    return (
      <div id={this.props.id} className={"performance-item"}>
        <div className={"performance-item-content"}>
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default PerformanceItem;