import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo] = useState({
        city:"Vapi",
        temp: 24,
        temp_min:22,
        temp_max:55,
        humidity:22,
        feels_like:22,
        weather:"haze"
    })
    let updateInfo = (result)=>{
        setWeatherInfo(result);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox infoArray = {weatherInfo}/>
        </div>
    )
}