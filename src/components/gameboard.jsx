var React = require('react');

var GameBoard = React.createClass({
    propTypes: {
        height: React.PropTypes.number.isRequired,
        width: React.PropTypes.number.isRequired
    },
    render: function() {
        var styles = {
            width: this.props.width,
            height: this.props.height
        }
        return (
            <div style={styles} className='game-board'>Gameboard</div>
        );
    }
});

module.exports = GameBoard;