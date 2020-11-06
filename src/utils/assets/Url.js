const KEY = require('./credentials')

const WEATHER_URL = (location) => {
    return 'http://api.weatherstack.com/current?access_key='+KEY+'&query='+location;
}

module.exports={
    WEATHER_URL,
}   