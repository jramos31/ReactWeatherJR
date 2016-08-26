var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        var location = this.refs.location.value;

        if (location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },
    render : function() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input className= "custom-input" type = "search" ref="location" placeholder="Enter Name of a City and Press Enter"/>
                    <button className="hidden"/>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;
