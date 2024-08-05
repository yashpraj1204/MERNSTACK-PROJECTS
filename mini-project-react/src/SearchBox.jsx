import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let API_URL  = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "2c827e221fb8ef13a34893b9867245df";
    let [city,setCity] = useState("");
    let [err,setErr] = useState(false)

    let handleCityChange = (event)=>{
        setCity(event.target.value)
        
    }
    let getWeatherInfo = async (city)=>{
        try{

            let result = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let resjson = await result.json();
            // console.log(resjson);
            let resultobj = {
                city:city,
                temp: resjson.main.temp,
                temp_min:resjson.main.temp_min,
                temp_max:resjson.main.temp_max,
                humidity:resjson.main.humidity,
                feels_like:resjson.main.feels_like,
                weather:resjson.weather[0].description
            }
            console.log(resultobj);
            return resultobj;
        }catch(err){throw err}
    }
    let handleSubmit = async (event)=>{
        try{
            event.preventDefault();
            console.log(city)
            let finalresult= await getWeatherInfo(city);
            updateInfo(finalresult)
            setCity("")
        }
        catch(err){
            setErr(true)
        }

    }
    return (
        <div className='SearchBox'>
            <form action="">
            <TextField id="filled-basic" label="City" variant="outlined" onChange={handleCityChange} value={city}  required />
            <br /><br />
            <Button variant="contained" color="secondary" type='submit' onClick={handleSubmit}>Search</Button>
            </form>
            {err&&<h3 style={{color:"red"}}>Sorry, no details for this place</h3>}
        </div>
    )
}