const request = require("request");
const APPID = '6b8bd397e514533bbb173e6a03429c98'

const getWeather = () => {
    request({
        uri: `https://api.openweathermap.org/data/2.5/find?q=London,uk&APPID=${APPID}`,
        json: true
    }, (err, res) => {
        if(err) throw err;
        console.log(res.body)
    });
}

getWeather()