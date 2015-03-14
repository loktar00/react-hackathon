var React = require('react'),
    {Link} = require('react-router'),

    GameWin = React.createClass({
        displayName: 'GameWIn',
        render: function() {
            return (
                <Link to='play' className='game-won'></Link>
            );
        }
});

module.exports = GameWin;
