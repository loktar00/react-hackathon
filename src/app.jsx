// GLOBAL STYLE ALL THE THINGS
require('./styles.less');

var React = require('react'),
    GameBoard = require('./components/gameboard.jsx'),

    Application = React.createClass({
        displayName: 'Application',
        _nextTick: function() {
            this._update();

            if(!this.state.gameLost) {
               setTimeout(() => {this._nextTick()}, 10);
            }
        },
        _update: function() {
            this.setState({tick: this.state.tick+1});
        },
        getInitialState: function(){
            return {
                gameLost: false,
                tick: 0
            };
        },
        _handleGameLost: function() {
            this.setState({gameLost : true});
        },
        componentWillMount: function() {
            this._nextTick();
        },
        render: function() {
            return (
                <div className='application'>
                    <GameBoard width={448} height={416} unitSize={32} tick={this.state.tick} gameLost={this._handleGameLost}/>
                </div>
            );
        }
});

React.render(<Application />, document.getElementById('content'));
