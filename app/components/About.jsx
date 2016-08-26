var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center titile">About</h1>
            <p>
                This application will return the weather of any City entered by the user.
                The user can also add his/her favorite locations.
            </p>
            <p>
                Some of the tools I used are:
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> React is a JavaScript library for creating user interfaces. Many people choose to think of React as the V in Model View Controller (MVC).
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> Simple, clear, and free weather API.
                </li>
                <li>
                    <a href="https://webpack.github.io/">Webpack</a> A Module bundler that puts all of the assets (JavaScript, CSS, Images, etc) in a dependency graph.
                </li>
                <li>
                    <a href="https://dashboard.heroku.com/apps">Heroku</a> Heroku is a cloud application platform – a new way of building and deploying web apps.
                </li>
            </ul>
        </div>
    );
};
module.exports = About;
