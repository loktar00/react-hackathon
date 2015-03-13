var React = require('react'),

    Frog = React.createClass({
        _width: 32,
        _height: 32,
        _move: function(x, y, dir) {
            if(this.state.x + x >= 0 && this.state.x + x < this.props.boardWidth
                && this.state.y + y >= 0 && this.state.y + y < this.props.boardHeight) {

                this.setState({
                    y: this.state.y + y,
                    x: this.state.x + x,
                    direction: dir,
                    toggleFrame: !this.state.toggleFrame
                });
            }
        },
        propTypes: {
            boardWidth: React.PropTypes.number.isRequired,
            boardHeight: React.PropTypes.number.isRequired
        },
        getInitialState: function() {
            return {
                direction: 0,
                x: (this.props.boardWidth/2),
                y: this.props.boardHeight-this._height,
                toggleFrame: false
            }
        },
        componentWillReceiveProps: function(nextProps) {
            // starting to understand why I should be using immutablejs.
            if(nextProps.keys.up !== this.props.keys.up && nextProps.keys.up){
                this._move(0, -32, 0);
            }
            if(nextProps.keys.down !== this.props.keys.down && nextProps.keys.down){
                this._move(0, 32, 180);
            }
            if(nextProps.keys.left !== this.props.keys.left && nextProps.keys.left){
                this._move(-32, 0, 270);
            }
            if(nextProps.keys.right !== this.props.keys.right && nextProps.keys.right){
                this._move(32, 0, 90);
            }
        },
        render: function() {
            var styles = {
                position: 'absolute',
                top: this.state.y + 'px',
                left: this.state.x + 'px',
                width: this._width + 'px',
                height: this._height + 'px',
                backgroundPosition: this.state.toggleFrame ? 0 : '-32px',
                webkitTransform: 'rotate(' + this.state.direction + 'deg)',
                mozTransform: 'rotate(' + this.state.direction + 'deg)',
                msTransform: 'rotate(' + this.state.direction + 'deg)',
                transform: 'rotate(' + this.state.direction + 'deg)'
            };

            return (
                <div style={styles} className="frog"></div>
            );
        }
    }); 

module.exports = Frog;
