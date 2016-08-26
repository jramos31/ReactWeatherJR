var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
    getDefaultProps: function() {
        return {
            title: 'Error'
        };
    },
    propTypes : {
            titile: React.PropTypes.string,
            message: React.PropTypes.string.isRequired
    },
    componentDidMount : function() {
        var {title, message} =this.props;
        var modalMarkup = (
            <div id= "error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>Try Again</h4>
                <p>This City Does Not Exist</p>
                <p>
                    <button className="button hollow" data-close ="">OK</button>
                </p>
            </div>
            );

        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function(){


        return (
            <div>

            </div>
        );
    }
});

module.exports = ErrorModal;
