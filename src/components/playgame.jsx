var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Navigation = require('react-router').Navigation,
    State = require('react-router').State,
    GameBoard = require('./gameboard.jsx'),

    PlayGame = React.createClass({
        displayName: 'Application',
        mixins: [Navigation, State],
        _timer: null,
        _nextTick: function() {
            this._update();

            if(!this.state.gameLost) {
               this._timer = setTimeout(() => {this._nextTick()}, 10);
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
            clearTimeout(this._timer);
            this.transitionTo('gameover');
            this.setState({gameLost : true});
        },
        componentWillMount: function() {
            this._nextTick();
        },
        componentWillUnmount: function() {
            clearTimeout(this._timer);
        },
        render: function() {
            return (
                <GameBoard width={448} height={416} unitSize={32} tick={this.state.tick} gameLost={this._handleGameLost}/>
            );
        }
});

module.exports = PlayGame;
