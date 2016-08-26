var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=8ff3d10734cb7351012a91ce493e5aec&units=imperial';

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res){
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return Math.round(res.data.main.temp) + '℉ with '+ res.data.weather[0].description +' in '+ res.data.name;
            }
        }, function(res) {
            throw new Error(res.data.message);
        });
    }
}
