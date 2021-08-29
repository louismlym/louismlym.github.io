import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import './Projects.scss'
import ProjectsContainer from '../components/ProjectsContainer';
import colors from '../constants.scss';
import { Helmet } from 'react-helmet';

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render() {

    return (
      <div id="projects">
        <Helmet>
          <title>Louis Portfolio | Projects</title>
        </Helmet>
        <NavigationBar backgroundColor={colors.alicaBlue} />
        <div id="projects-hero">
          <h1>Projects</h1>
        </div>
        <ProjectsContainer />
        <Footer />
      </div>
    );
  }
}

export default Projects;