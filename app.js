const express = require('express');
let app = express();
app.get('/weather', (req, res) => {
   const weather = {
    description: "Clear sky"
   }
   res.render('weather.hbs', {weather})
});

app.listen(3000, () => {
    console.log(`Server ruuning at http://localhost:3000/weather/Poltava`)
});

const hbs = require("hbs");
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + 'views/partials');
const path = require('path')
