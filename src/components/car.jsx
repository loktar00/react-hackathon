var React = require('react'),

    Car = React.createClass({
        _width: 32,
        _height: 32,
        _move: function(x, y, dir) {
           
        },
        propTypes: {
            boardWidth: React.PropTypes.number.isRequired,
            boardHeight: React.PropTypes.number.isRequired
        },
        getInitialState: function() {
            return {
                direction: 0,
                x: 0,
                y: 0,
                toggleFrame: false
            }
        },
        componentWillReceiveProps: function(nextProps) {
        },
        render: function() {
            var styles = {
                position: 'absolute',
                top: this.state.y + 'px',
                left: this.state.x + 'px',
                backgroundPosition: this.state.toggleFrame ? 0 : '-32px',
                webkitTransform: 'rotate(' + this.state.direction + 'deg)',
                mozTransform: 'rotate(' + this.state.direction + 'deg)',
                msTransform: 'rotate(' + this.state.direction + 'deg)',
                transform: 'rotate(' + this.state.direction + 'deg)'
            };

            return (
                <div style={styles} className="car"></div>
            );
        }
    }); 

module.exports = Car;
