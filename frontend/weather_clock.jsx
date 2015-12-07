
var React = require('react');

var WeatherClock = React.createClass({
  getInitialState: function() {
    return {date: new Date()};
  },
  componentDidMount: function() {
    this.intervalId = setInterval(this.updateClock, 1000);
  },
  updateClock: function() {
    var newTime = this.state.date;
    newTime.setSeconds(this.state.date.getSeconds() + 1);
    this.setState({date: newTime});
  },
  componentWillUnmount: function(){
    this.clearInterval(this.intervalId);
  },
  render: function(){
    return(
        <div>
          <span className="clock">
            {this.state.date.toString()}
          </span>
          <span className="weather">

          </span>
        </div>
    );
  }





});

module.exports = WeatherClock;
