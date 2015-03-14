var React = require('react'),
    {Link} = require('react-router'),

    StartScreen = React.createClass({
        displayName: 'Application',
        render: function() {
            return (
                <Link to='play'>
                    <div className='start-screen'></div>
                </Link>
               
            );
        }
});

module.exports = StartScreen;
