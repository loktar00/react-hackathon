// GLOBAL STYLE ALL THE THINGS
require('./styles.less');

var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,

    FreeWayFrogger = React.createClass({
        displayName: 'Application',
        render: function() {
            return (
                <div className='application'>
                    <h1>Freeway Frog</h1>
                    <RouteHandler />
                </div>
            );
        }
});

module.exports = FreeWayFrogger;
