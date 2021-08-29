import React from 'react';
import ContentItem from './ContentItem';
import './ProjectsContainer.scss';
import DivToShowHide from './DivToShowHide';
import { parallax } from '../utils/utils';
import colors from '../constants.scss';

class ProjectsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener("load", () => {
      document.querySelectorAll("#dog-breed-content-item .div-to-show-hide").forEach(el => {
        el.classList.remove("before-scroll");
        el.classList.add("after-scroll");
        el.style.display = "block";
      });
    });
    document.querySelectorAll("#dog-breed h2").forEach(el => {
      el.addEventListener("mouseover", () => {
        document.querySelector("#cursor").style.width = `${7*6}px`;
        document.querySelector("#cursor").style.height = `${7*6}px`;
      });
      el.addEventListener("mouseout", () => {
        document.querySelector("#cursor").style.width = "7px";
        document.querySelector("#cursor").style.height = "7px";
        document.querySelector("#cursor").style.transform = "translate(-50%, -50%)";
      });
    });
    parallax(document.querySelector("#dog-breed"), 0.2, false, true);
    parallax(document.querySelector("#food-access"), -0.2, false, true);
    // parallax(document.querySelector("#lm-code"), -0.2, false, true);
    // parallax(document.querySelector("#lm-dance"), 0.2, false, true);
  }

  render() {
    const dogBreed = (
      <div id="dog-breed" className="lm-content-left">
        <DivToShowHide
          initialStyles="left: -25px;"
          element={<a target="_blank" className="ignore-a" href="https://dog-breed-classifier-maliyp.herokuapp.com">
            <h2>Dog Breed Classification</h2>
            </a>}
          animationTime="1.5s" />
        <DivToShowHide
          initialStyles="top: 50%;"
          element={<p>Classify dog breed from an image, using a trained <a target="_blank" href="https://towardsdatascience.com/understanding-cnn-convolutional-neural-network-69fd626ee7d4">CNN model</a> from
            pretrained <a target="_blank" href="https://pytorch.org/hub/pytorch_vision_resnext/">resnext50_32x4d</a>.
            The model yields 93.34% accuracy on the training dataset and 79.47% accuracy on the validation dataset.
            <br/>
            <br/>
            Try uploading an image of some cute dog and see how well the model can predict its breed!
            <br/>
            <br/>
            Visit <a target="_blank" href="https://github.com/louismlym/Dog-Breed-Classification">GitHub</a> for more information.
            </p>}
          animationTime="1.5s" />
      </div>
    );

    const foodAccess = (
      <div id="food-access" className="lm-content-left">
        <DivToShowHide
          initialStyles="left: -25px;"
          element={<a target="_blank" className="ignore-a" href="https://cse442-20f.github.io/FP-Food-Access-in-the-United-States/">
            <h2>Food Access in the United States</h2>
            </a>}
          animationTime="1.5s" />
        <DivToShowHide
          initialStyles="top: 50%;"
          element={<p>
            Create visualizations to highlight the correlations between national food insecurity and various factors, such as
            geography, race and ethnicity. The visualizations and website were created using <a target="_blank" href="https://d3js.org/">D3.js</a>, <a target="_blank" href="https://jquery.com/">jQuery</a>,
            and <a target="_blank" href="https://alvarotrigo.com/fullPage/">fullPage.js</a>.
            <br/>
            <br/>
            The dataset was retrieved from <a target="_blank" href="https://www.ers.usda.gov/data-products/food-access-research-atlas/download-the-data/">Food Access Research Atlas</a>
            </p>}
          animationTime="1.5s" />
      </div>
    );

    return (
      <div className={"lm-projects-container"}>
        <ContentItem
          id={"dog-breed-content-item"}
          imageSrc={"images/dog_breed_classification.png"}
          imageParallaxSpeed={-0.3}
          imageStyles={{width: "60%", boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.6)"}}
          imageTarget={"_blank"}
          imageLink={"https://dog-breed-classifier-maliyp.herokuapp.com"}
          backgroundColor={colors.alicaBlue}
          content={dogBreed}/>
        <ContentItem
          id={"food-access-content-item"}
          imageSrc={"images/food_access_in_the_us.png"}
          imageParallaxSpeed={-0.2}
          imageStyles={{width: "60%", boxShadow: "0px 0px 40px rgba(16, 36, 94, 0.3)"}}
          imageTarget={"_blank"}
          imageLink={"https://cse442-20f.github.io/FP-Food-Access-in-the-United-States/"}
          backgroundColor={colors.alicaBlue}
          content={foodAccess}/>
      </div>
    );
  }
}

export default ProjectsContainer;