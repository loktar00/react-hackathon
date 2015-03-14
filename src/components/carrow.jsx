var React = require('react'),
    Car = require('./car.jsx'),

    CarRow = React.createClass({
        propTypes: {
            tick: React.PropTypes.number.isRequired,
            unitSize: React.PropTypes.number.isRequired,
            boardWidth: React.PropTypes.number.isRequired,
            direction: React.PropTypes.number.isRequired,
            speed: React.PropTypes.number.isRequired,
            y: React.PropTypes.number.isRequired
        },
        getInitialState: function() {
            let unitSize = this.props.unitSize;

            return {
                spacing: Math.ceil(((Math.random()*(unitSize*4))+64)/unitSize)*unitSize,
                xOffset: -this.props.unitSize,
                cars : []
            }
        },
        componentWillMount: function() {
            // create cars...
            let cars = [];

            for(let c = -1; c < 5; c++) {
                cars.push(
                    {x : this.state.spacing * c}
                )
            }

            this.setState({cars : cars});
        },
        render: function() {
            let styles = {
                position: 'absolute',
                top: this.props.y + 'px',
                width: this.boardWidth + 'px',
                height: this.unitSize + 'px'
            },
            cars = this.state.cars.map(function(car, idx) {
                return (<Car key={idx}
                            type={this.props.type}
                            unitSize={this.props.unitSize}
                            tick={this.props.tick}
                            direction={this.props.direction}
                            boardWidth={this.props.boardWidth}
                            speed={this.props.speed}
                            x={car.x}/>
                        );
            }.bind(this));

            return (
                <div style={styles} className='CarRow'>
                    {cars}
                </div>
            );
        }
    }); 

module.exports = CarRow;
