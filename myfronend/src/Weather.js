import React, {useState} from 'react'
import axios from 'axios';
const Weather = () => {
    const [weather, setWeather] = useState("")

    const handleButtonClick = () => {
        axios.get("/getlondon")
        .then((res) => {
            console.log(res);
            setWeather(res.data.temp);
          })
          .catch((err) => {
            console.log(err);
          });
    }
    return (
        <div>
            <button onClick={handleButtonClick}>Get weather in London</button>
           <h1> The weather in London is :{weather} </h1> 
        </div>
    )
}

export default Weather
