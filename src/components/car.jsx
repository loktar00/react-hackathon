var React = require('react'),

    Car = React.createClass({
        _width: 32,
        _height: 32,
        _move: function(x, y, dir) {
           
        },
        getInitialState: function() {
            return {
                x: 0,
                y: 0
            }
        },
        componentWillReceiveProps: function(nextProps) {
        },
        render: function() {
            let classes = 'car ' + this.props.type,
                styles = {
                    position: 'absolute',
                    top: this.state.y + 'px',
                    left: this.state.x + 'px',
                    height: this._height,
                    width: this._width,
                };

            return (
                <div style={styles} className={classes}></div>
            );
        }
    }); 

module.exports = Car;
