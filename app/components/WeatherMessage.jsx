var React = require('react');

var WeatherMessage = ({temp}) => {
    return (
        <h3 className="weatherMessage">{temp}</h3>
    )
};

module.exports = WeatherMessage;
