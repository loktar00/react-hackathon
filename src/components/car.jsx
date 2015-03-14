var React = require('react'),

    Car = React.createClass({
        propTypes: {
            tick: React.PropTypes.number.isRequired,
            x: React.PropTypes.number,
            unitSize: React.PropTypes.number.isRequired,
            boardWidth: React.PropTypes.number.isRequired,
            speed: React.PropTypes.number,
            direction: React.PropTypes.number
        },
        getDefaultProps: function() {
            return {
                x: 0,
                speed: 1,
                direction: 1
            }
        },
        getInitialState: function() {
            return {
                x: this.props.x
            }
        },
        componentWillReceiveProps: function(nextProps) {
            if(nextProps.tick !== this.props.tick) {
                // I know this section sucks.. 
                if(this.props.direction === 0) {
                    if(this.state.x < this.props.boardWidth) {
                        this.setState({x : (this.state.x + this.props.speed)});
                    } else {
                        this.setState({x : -this.props.unitSize*2});
                    }
                } else {
                    if(this.state.x > -this.props.unitSize) {
                        this.setState({x : (this.state.x - this.props.speed)});
                    } else {
                        this.setState({x : this.props.boardWidth + this.props.unitSize*2});
                    }
                }      
            }
        },
        render: function() {
            let classes = 'car ' + this.props.type,
                styles = {
                    position: 'absolute',
                    left: this.state.x + 'px',
                    height: this.props.unitSize,
                    width: this.props.unitSize,
                    webkitTransform: 'rotate(' + this.props.direction + 'deg)',
                    mozTransform: 'rotate(' + this.props.direction + 'deg)',
                    msTransform: 'rotate(' + this.props.direction + 'deg)',
                    transform: 'rotate(' + this.props.direction + 'deg)'
                };

            return (
                <div style={styles} className={classes}></div>
            );
        }
    }); 

module.exports = Car;
