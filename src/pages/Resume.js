import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import './Resume.scss'
import PDFViewer from 'pdf-viewer-reactjs-bulma-wrapped';
import 'pdf-viewer-reactjs-bulma-wrapped/css/main.css';
import { Helmet } from 'react-helmet';

class Resume extends React.Component {
  constructor(props) {
    super(props);
    //pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }

  componentDidMount() {
    document.querySelectorAll("#resume-hero > a").forEach(el => {
      el.addEventListener("mouseover", () => {
        document.querySelector("#cursor").style.width = `${7*4}px`;
        document.querySelector("#cursor").style.height = `${7*4}px`;
      });
      el.addEventListener("mouseout", () => {
        document.querySelector("#cursor").style.width = "7px";
        document.querySelector("#cursor").style.height = "7px";
        document.querySelector("#cursor").style.transform = "translate(-50%, -50%)";
      });
    });
    setTimeout(() => {
      document.querySelectorAll(".material-icons").forEach(el => {
        el.addEventListener("mouseover", () => {
          document.querySelector("#cursor").style.width = `${7*3}px`;
          document.querySelector("#cursor").style.height = `${7*3}px`;
        });
        el.addEventListener("mouseout", () => {
          document.querySelector("#cursor").style.width = "7px";
          document.querySelector("#cursor").style.height = "7px";
          document.querySelector("#cursor").style.transform = "translate(-50%, -50%)";
        });
      });
    }, 1500);
  }

  render() {

    return (
      <div id="resume">
        <Helmet>
          <title>Louis Portfolio | Resume</title>
        </Helmet>
        <NavigationBar />
        <div id="resume-hero">
          <a class="ignore-a" target="_blank" href="/files/Louis_Resume.pdf">
            <h1>Resume</h1>
          </a>
        </div>
        <div id="resume-content">
          <PDFViewer
            document={{
              url: "/files/Louis_Resume.pdf"
            }}
            navbarOnTop={true}
            scale={1.35}
            scaleStep={0.1}
          />
        </div>
        <div id="resume-placeholder">
          <a target="_blank" href="/files/Louis_Resume.pdf">
            Download
          </a>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Resume;