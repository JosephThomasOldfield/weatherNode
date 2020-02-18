// -- // USING STANDARD METHOD (NO PLUGINS) // -- //

// const request = require("request");
// const {promisify} = require('util') 

// const getWeather = () => {
//     request({
//         uri: `https://api.openweathermap.org/data/2.5/find?q=London,uk&APPID=${process.env.APPID}`,
//         json: true
//     }, (err, res) => {
//         if(err) throw err;
//         console.log(res.body)
//     });
// }

// getWeather()


// --- // USING PROMISIFY // --- // 

const request = require("request");
const {promisify} = require('util'); 
const fs = require('fs');

require('dotenv').config()

const promisifiedRequest = promisify(request);

const getWeather = async () => {
    let data = await promisifiedRequest({
        uri: `https://api.openweathermap.org/data/2.5/find?q=London,uk&APPID=${process.env.APPID}`,
        json: false
        
    });
    fs.writeFileSync("weatherData.json", data.body)
};

getWeather();

// Await - waits for the requests to complete before moving to the next line of code
// This is astnchronos. This copuld also be done manually by replacing await with a function that returns the data,
// however this is over complex for little gain.

