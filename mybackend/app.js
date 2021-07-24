const express = require('express')
const fetch = require('node-fetch');
const app = express()
const port = 5000

app.get('/getlondon', (req, res) => {
 fetch("http://api.openweathermap.org/data/2.5/weather?q=london&appid=7287ea107589231fb0a9d68025bf443f")
    .then(res => res.json())
    .then((data) => {
        const { temp } = data.main;
        const { description, icon } = data.weather[0];
        const name = data.name;
        res.send(name, icon, temp, description)
     })

})

app.listen(port, () => {
  console.log(` app listening at http://localhost:${port}`)
})