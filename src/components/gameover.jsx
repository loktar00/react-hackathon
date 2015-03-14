var React = require('react'),
    {Link} = require('react-router'),

    GameOver = React.createClass({
        displayName: 'GameOver',
        render: function() {
            return (
                <Link to='play' className='game-over'></Link>
            );
        }
});

module.exports = GameOver;
