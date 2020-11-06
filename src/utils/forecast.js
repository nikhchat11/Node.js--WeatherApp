const request = require('request')
const {WEATHER_URL} = require('./assets/Url')
//const { KEY } = require('./assets/credentials')


const weatherApi = function (location,callback) {
    console.log("Weather api called");
    const LOCATION = location;
    const URL = WEATHER_URL(location)
     request({ url: URL, json: true }, (error, response) => {
        const responseData = response.body.current
       callback(responseData);
    })
   }

   
module.exports = {
    weatherApi: weatherApi
}
