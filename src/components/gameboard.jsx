var React = require('react/addons'),
    Frog = require('./frog.jsx'),

    GameBoard = React.createClass({
        propTypes: {
            height: React.PropTypes.number.isRequired,
            width: React.PropTypes.number.isRequired
        },
        getInitialState: function(){
            return {
                keys: {
                    up: false,
                    down: false,
                    left: false,
                    right: false
                }
            };
        },
        _handleKeyState: function(key, flag) {
            let newState = {};

            if(key === 38) {
                // up arrow
                newState = React.addons.update(this.state, {
                    keys: {up: {$set: flag}}
                });
            }

            if(key === 40) {
                // down arrow
                newState = React.addons.update(this.state, {
                    keys: {down: {$set: flag}}
                });
            }

            if (key === 37) {
                // left arrow
                newState = React.addons.update(this.state, {
                    keys: {left: {$set: flag}}
                });
            }

            if (key === 39) {
                // right arrow
                newState = React.addons.update(this.state, {
                    keys: {right: {$set: flag}}
                });
            }

            this.setState(newState);
        },
        handleKeyDown: function(e) {
            this._handleKeyState(e.which, true);
        },
        handleKeyUp: function(e) {
            this._handleKeyState(e.which, false);
        },
        render: function() {
            var styles = {
                width: this.props.width,
                height: this.props.height
            }

            return (
                <div tabIndex='1' style={styles} className='game-board' onKeyUp={this.handleKeyUp} onKeyDown={this.handleKeyDown}>
                    <Frog boardWidth={this.props.width} boardHeight={this.props.height} keys={this.state.keys}/>
                </div>
            );
        }
    });

module.exports = GameBoard;