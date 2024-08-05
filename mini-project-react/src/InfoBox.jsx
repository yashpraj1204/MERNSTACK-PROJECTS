import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";
export default function InfoBox({infoArray}) {
    let city = infoArray.city
    let Rain_url = "https://media.istockphoto.com/id/1127266763/photo/road-to-sinhgad-fort-in-rainy-weather-maharashtra-pune.jpg?s=2048x2048&w=is&k=20&c=UOC5zt9E1-9FrPDbWFW_-k_dHtuFToTKP_tPGe8QRAA="
    let Hot_url = "https://media.istockphoto.com/id/611335120/photo/autumn-sun-shining-through-tree-canopy.jpg?s=1024x1024&w=is&k=20&c=2xhg0b8Q41knzKzHoFXGOZfliXo6IfUrM2KgJBf-zwg="
    let cold_url = "https://media.istockphoto.com/id/533292615/photo/alley-in-snowy-morning.jpg?s=2048x2048&w=is&k=20&c=Bk3suOKOiKC1gyNbFjlHqYrGB-OyHUwyJu_7Ncujcd8="
    let heavy_rain = "https://media.istockphoto.com/id/921838694/photo/rough-sea-and-rain-drops.jpg?s=2048x2048&w=is&k=20&c=Q5iCqC_9XR39htojB0DJoak6t0PYU_pyEuPiuwg9P6g="
    return (
        <div className='InfoCard'>
            <div className="card-container">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="170"
                        image = {infoArray.humidity>80 && infoArray.humidity< 90? Rain_url:infoArray.humidity>= 90?heavy_rain: infoArray.temp>25?Hot_url:cold_url }
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.primary" component="div">
                            <h2>{city.toString().toUpperCase()}&nbsp;&nbsp; {infoArray.humidity>80?<ThunderstormIcon/>: infoArray.temp>25?<WbSunnyIcon/>:<AcUnitIcon/> }</h2>
                            <p> Temperature: {infoArray.temp}</p>
                            <p> Minimum Temperature: {infoArray.temp_min}&deg;C </p> 
                            <p>Maximum Temperature: {infoArray.temp_max}&deg;C </p>
                            <p>Humidity: {infoArray.humidity}</p> 
                            <p> <b>The weather can be described as {infoArray.weather} and it feels like around {infoArray.feels_like}&deg;C</b> </p>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </div>
        </div>

    )
}