import React, { useEffect, useState } from "react";
import axios from "axios";
import Clock from "react-live-clock";
import "./Home.css";

const AutoData = () => {
  const [initdata, setInitdata] = useState({});
  const d = new Date();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b4fb58dc4f3ab576a9822d894dc586f2&units=metric`
        )
        .then(function (response) {
          setInitdata(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  }, []);
  return (
    <div>
      {typeof initdata.main !== "undefined" ? (
        <div>
          <h3 className="text-end my-own-text-name">{initdata.name}</h3>
          <h5 className="text-end my-own-text-name">{initdata.sys.country}</h5>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h5 className="my-auto-temp">{Math.ceil(initdata.main.temp)}℃</h5>
          <div className="my-date">
            <Clock className="my-clock" format={"HH:mm:ss"} ticking={true} />
            <h5 className="my-date-2 mr-3">{d.toDateString()}</h5>
          </div>
        </div>
      ) : (
        <p>Turn on LOCATION </p>
      )}
    </div>
  );
};

export default AutoData;
