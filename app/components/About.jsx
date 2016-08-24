var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center titile">About</h1>
            <p>
                This application will return the weather of any location entered by the user.
                The user can also add his/her favorite locations.
            </p>
            <p>
                Some of the tools I used are:
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> JavaScript Framework used for this project
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> API providing City's Weather
                </li>
            </ul>
        </div>
    );
};
module.exports = About;
