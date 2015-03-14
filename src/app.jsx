// GLOBAL STYLE ALL THE THINGS
require('./styles.less');

var React = require('react'),
    GameBoard = require('./components/gameboard.jsx'),

    Application = React.createClass({
        displayName: 'Application',
        _timer: function() {
            this._update();
            setTimeout(() => {this._timer()}, 10);
        },
        _update: function() {
            this.setState({tick: this.state.tick+1});
        },
        getInitialState: function(){
            return {
                tick: 0
            };
        },
        componentWillMount: function() {
            this._timer();
        },
        render: function() {
            return (
                <div className="application">
                    <GameBoard width={448} height={416} unitSize={32} tick={this.state.tick}/>
                </div>
            );
        }
});

React.render(<Application />, document.getElementById('content'));
