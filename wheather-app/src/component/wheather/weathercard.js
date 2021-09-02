import React, { useEffect, useState } from 'react';

const Weathercard = ({tempInfo}) =>{
    const[weatherState , setWheatherState] = useState("")
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
         } =tempInfo;
        
         let sec = sunset;
         let date = new Date(sec*1000);
         let timestr= `${date.getHours()}:${date.getMinutes()}`;

         useEffect(()=>{
             if (weathermood){
                 switch (weathermood) {
                     case "Clouds":
                        setWheatherState("wi-day-cloudy");
                         break;
                     case "Haze":
                        setWheatherState("wi-fog");
                         break;
                     case "Clear":
                        setWheatherState("wi-day-sunny");
                         break;
                     
                         default:
                        setWheatherState("wi-day-sunny");
                        break;
                 }
             }
         })
    return (
        <>
        <article className="widget">
            <div className="weatherIcon">
                <i className={`wi ${weatherState}`}></i>
            </div>

            <div className="weatherInfo">
                <div className="temperature">
                <span>{temp}&deg;</span>
                </div>

                <div className="description">
                    <div className="weatherCondition">{weathermood}</div>
                    <div className="place">{name} ,{country}</div>
                </div>
            </div>

            <div className="date"> {new Date().toLocaleString()} </div>

            <div className="extra-temp">
                <div className="temp-info-minmax">
                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-sunset"}></i>
                        </p>
                        <p className="extra-info-leftside">
                            {timestr} <br />
                            sunset
                        </p>
                    </div>
                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-rain"}></i>
                        </p>
                        <p className="extra-info-leftside">
                            {pressure} <br />
                            pressure
                        </p>
                    </div>
                </div>
            
            
            
                <div className="weather-extra-info">
                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-strong-wind"}></i>
                        </p>
                        <p className="extra-info-leftside">
                          {speed} <br />
                          speed
                        </p>
                    </div>
                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-humidity"}></i>
                        </p>
                        <p className="extra-info-leftside">
                            {humidity}  <br />
                            humidity
                        </p>
                    </div>
                </div>
        </div>
        </article>
        </>
    )
}
export default Weathercard ;
