var React = require('react'),
    Navigation = require('react-router').Navigation,
    State = require('react-router').State,

    Frog = React.createClass({
        mixins: [Navigation, State],
        _move: function(x, y, dir) {
            if(this.state.x + x >= 0 && this.state.x + x < this.props.boardWidth
                && this.state.y + y >= 0 && this.state.y + y < this.props.boardHeight) {

                this.setState({
                    y: this.state.y + y,
                    x: this.state.x + x,
                    direction: dir,
                    toggleFrame: !this.state.toggleFrame
                }, function() {
                    if(this.state.y === 0) {
                        this.transitionTo('gamewin');
                    }
                });
            }
        },
        _checkCollisions: function(x, y) {
            let pickedEl = document.elementFromPoint(x,y),
                elList = [];

            while(pickedEl && pickedEl.tagName !== 'BODY' && pickedEl.tagName !== 'HTML'){
                if(pickedEl.classList.contains('car')) {
                    this._handleGameLost();
                }

                elList.push(pickedEl);
                pickedEl.style.display = 'none';
                pickedEl = document.elementFromPoint(x,y);
            }

            elList.forEach(function(el) {
                el.style.display = 'block';
            });
        },
        propTypes: {
            unitSize: React.PropTypes.number.isRequired,
            tick: React.PropTypes.number.isRequired,
            boardWidth: React.PropTypes.number.isRequired,
            boardHeight: React.PropTypes.number.isRequired
        },
        getInitialState: function() {
            return {
                alive: true,
                direction: 0,
                x: (this.props.boardWidth/2),
                y: this.props.boardHeight-this.props.unitSize,
                toggleFrame: false
            }
        },
        _handleGameLost: function() {
            this.props.gameLost();
        },
        componentWillReceiveProps: function(nextProps) {
            if(nextProps.tick !== this.props.tick) {
                // UGGGLLLllly hack couldn't think of a way to handle collisions 

                let bounds = this.getDOMNode().getBoundingClientRect(),
                    x = bounds.left,
                    y = bounds.top + this.props.unitSize;
                // checks left sode
                this._checkCollisions(x,y);

                //checks right side
                x += this.props.unitSize;
                this._checkCollisions(x,y);
            }

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
                width: this.props.unitSize + 'px',
                height: this.props.unitSize + 'px',
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
