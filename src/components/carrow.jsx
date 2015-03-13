var React = require('react'),
    Car = require('./car.jsx'),

    CarRow = React.createClass({
        _height: 32,
        _width: '100%',
        _move: function(x, y, dir) {
           
        },
        propTypes: {
            boardHeight: React.PropTypes.number.isRequired,
            row: React.PropTypes.number.isRequired,
            dir: React.PropTypes.number.isRequired,
            speed: React.PropTypes.number.isRequired
        },
        getInitialState: function() {
            return {
                x: 0,
                y: this.props.boardHeight - (this.props.row * this._height)
            }
        },
        componentWillReceiveProps: function(nextProps) {
        },
        render: function() {
            var styles = {
                position: 'absolute',
                top: this.state.y + 'px',
                left: this.state.x + 'px',
                width: this._width,
                height: this._height + 'px'
            };

            return (
                <div style={styles} className='CarRow'>
                    <Car type='racer'/>
                </div>
            );
        }
    }); 

module.exports = CarRow;
