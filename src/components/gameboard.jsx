var React = require('react/addons'),
    Frog = require('./frog.jsx'),
    CarRow = require('./carrow.jsx'),

    GameBoard = React.createClass({
        _carRows : [
            { speed: 1.5, row: 12, type: 'racer'},
            { speed: 1, row: 11, type: 'speedster'},
            { speed: 0.5, row: 10, type: 'tractor'},
            { speed: 1, row: 9, type: 'sedan'},
            { speed: 0.5, row: 8, type: 'racer'},
            { speed: 1.5, row: 6, type: 'racer'},
            { speed: 1, row: 5, type: 'speedster'},
            { speed: 0.5, row: 4, type: 'tractor'},
            { speed: 1, row: 3, type: 'sedan'},
            { speed: 0.5, row: 2, type: 'racer'}
        ],
        propTypes: {
            height: React.PropTypes.number.isRequired,
            width: React.PropTypes.number.isRequired,
            unitSize: React.PropTypes.number
        },
        getDefaultProps: function() {
            return {
                unitSize: 32
            }
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
        _handleGameLost: function() {
            // drillin holes :/
            this.props.gameLost();
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
                },
                CarRows = this._carRows.map(function(carRow, idx) {
                    return (<CarRow
                        key={idx}
                        unitSize = {this.props.unitSize}
                        boardWidth={this.props.width}
                        speed={carRow.speed}
                        type={carRow.type}
                        y={this.props.height - (carRow.row * this.props.unitSize)}
                        tick={this.props.tick}
                        direction={(idx%2) ? 0 : 180}
                        />);
                }.bind(this));

            return (
                <div tabIndex='1' style={styles} className='game-board' onKeyUp={this.handleKeyUp} onKeyDown={this.handleKeyDown}>
                    {CarRows}
                    <Frog
                        boardWidth={this.props.width}
                        boardHeight={this.props.height}
                        keys={this.state.keys}
                        tick={this.props.tick}
                        unitSize={32}
                        gameLost={this._handleGameLost}/>
                </div>
            );
        }
    });

module.exports = GameBoard;