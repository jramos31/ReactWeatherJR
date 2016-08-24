var React = require('react');
var {Link} = require('react-router');

var Favorites = (props) => {
    return (
        <div>
            <h1 className="text-center">Favorites</h1>
            <p>Your Saved Locations</p>
            <ol>
                <li>
                    <Link to='/?location=NewYork'>New York, NY</Link>
                </li>
                <li>
                    <Link to='/?location=Miami'>Miami, FL</Link>
                </li>
                <li>
                    <Link to='/?location=LosAngeles'>Los Angeles, CA</Link>
                </li>
            </ol>
        </div>
    )
};

module.exports = Favorites;
