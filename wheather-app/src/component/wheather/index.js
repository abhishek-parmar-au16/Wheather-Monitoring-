import React, { useState } from 'react';
import "./style.css";

const Temp = () =>{

    const[search ,setSearch] = useState("pune");
    return (
        <>
        <div className="wrap">
            <div className="search">
                <input 
                    type="search"
                    placeholder="search...."
                    autoFocus
                    id="search"
                    className="searchTerm"
                    value={search }
                    onChange={(e)=>setSearch(e.target.value)}
                />

                <button className="searchButton" type="button" onClick="getweatherinfo">
                search
                </button>
            </div>
        </div>

        <article className="widget">
            <div className="weatherIcon">
                <i className={"wi wi-day-sunny"}></i>
            </div>

            <div className="weatherInfo">
                <div className="temperature">
                <span>25.5&deg;</span>
                </div>

                <div className="description">
                    <div className="weatherCondition">sunny</div>
                    <div className="place">Pune ,India</div>
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
                            19:19 PM <br />
                            sunset
                        </p>
                    </div>
                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-rain"}></i>
                        </p>
                        <p className="extra-info-leftside">
                            19:19 PM <br />
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
                          19:19 PM <br />
                          speed
                        </p>
                    </div>
                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-humidity"}></i>
                        </p>
                        <p className="extra-info-leftside">
                            19:19 PM <br />
                            humidity
                        </p>
                    </div>
                </div>
        </div>
        </article>
        </>
    )
}

export default Temp;