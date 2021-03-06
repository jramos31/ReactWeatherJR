var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    onSearch: function(e) {
        e.preventDefault();

        var location = this.refs.location.value;
        var encodedLocation = encodeURIComponent(location);

        if(location.length > 0) {
            this.refs.location.value ='';
            window.location.hash = '#/?location=' +encodedLocation;
        }
    },
    render:function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">Weather with React</li>
                        <li>
                            <IndexLink to ="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Search Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to="/favorites" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Favorites</Link>
                        </li>
                    </ul>
                </div>

                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" ref="location" placeholder="City?"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Go"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Nav;

<div>
    <h2>Nav Components</h2>



</div>
