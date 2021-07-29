import React from "react";
import AutoData from "./AutoData";
import FetchData from "./FetchData";
import b1 from "../images/b1.jpg";
import "./Home.css";
const Home = () => {
  return (
    <div className="main-my-img">
      <div className="container">
        <div className="row justify-content-center">
          <div className="card text-white col-md-4 col-xm-12 my-col my-card own-margin">
            <img
              className="card-img my-img"
              src="https://c0.wallpaperflare.com/preview/231/406/405/dominican-republic-bonao-cloud-forest.jpg"
              alt="Card"
              width="100%"
              height="100%"
            />
            <div className="card-img-overlay">
              <AutoData />
            </div>
          </div>
          <div className="card  text-white col-md-3 col-xm-12 my-col my-card border-0 m-4">
            <img
              className="card-img my-img"
              src={b1}
              alt="Card"
              width="100%"
              height="100%"
            />
            <div className="card-img-overlay">
              <FetchData />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="footer-info">
                <div className="align-items-center justify-content-center">
                  <h6 className="d-flex align-items-center justify-content-center">
                    <a href="https://github.com/nevilsaspara/react-weather-app/">
                      Download Source Code
                    </a>
                  </h6>
                  <h6 className="d-flex align-items-center justify-content-center">
                    Developed by Nevil Saspara with ❤️
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
