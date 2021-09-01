import React, { useEffect, useState } from 'react';
import Weathercard from './weathercard'
    
import "./style.css";

const Temp = () =>{

    const[search ,setSearch] = useState("pune");
    const[tempInfo , setTempInfo] = useState("");

    const getweatherinfo = async()=>{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=2bf2e2ce3082a8b9a14ea214e5a8d771`
            let res = await fetch(url);
            let data =await res.json();
            const {temp , humidity,pressure} = data.main;
            const {main:weathermood} = data.weather[0];
            const{name} = data;
            const{speed} =data.wind;
            const{country,sunset} = data.sys;
            
            const newWeatherInfo ={
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset
            };

            setTempInfo(newWeatherInfo)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getweatherinfo();
    },[]);

    
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

                <button className="searchButton" type="button" onClick={getweatherinfo}>
                search
                </button>
            </div>
        </div>

        <Weathercard tempInfo={tempInfo} />

        
        </>
    )
}

export default Temp;