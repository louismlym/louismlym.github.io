import React from 'react';
import NavigationBar from '../components/NavigationBar';
import ContentsContainer from '../components/ContentsContainer';
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
        <div className="lm-hero">
          <h1 className="full-name noselect"><span className="louis-text">Louis</span> <span className="maliyam-text">Maliyam</span></h1>
        </div>
        <section className="lm-content">
          <ContentsContainer />
        </section>
      </div>
    );
  }
}

export default Home;