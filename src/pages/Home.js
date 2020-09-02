import React from 'react';
import NavigationBar from '../components/NavigationBar';
import './Home.scss'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  render() {
    return (
      <div id="home">
        <NavigationBar />
        <h1 class="intro-text">Louis Maliyam</h1>
      </div>
    );
  }
}

export default Home;