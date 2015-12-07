
var React = require('react');

var WeatherClock = React.createClass({
  getInitialState: function() {
    return {date: new Date(), weather: {descrips: [], temp: 0}};
  },
  componentDidMount: function() {
    this.intervalId = setInterval(this.updateClock, 1000);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(this.getWeather);
    }
  },
  getWeather: function(pos) {
    var request = new XMLHttpRequest();
    var lat = pos.coords.latitude;
    var long = pos.coords.longitude;
    request.open('GET', "http://api.openweathermap.org/data/2.5/weather?lat="
            + lat + "&lon=" + long + "&appid=645c5d39c7603f17e23fcaffcea1a3c1");
    var wc = this;

    request.onload = function() {
      // debugger;
      if ( request.status >= 200 && request.status < 400) {
        var parsedWeather = JSON.parse(request.responseText);
        var temp = parsedWeather.main.temp;
        var weatherArr = parsedWeather.weather;
        wc.setState({weather: {descrips: weatherArr, temp: temp}});
      } else {
        console.log( "weather request returned error");
      }
    };

    request.onerror = function() {
      console.log( "weather request connection error");
    };

    request.send();
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
    var count = 0;
    return(
        <div>
          <span className="clock">
            {this.state.date.toString()}
          </span>
          <span className="weather">
            <div> {this.state.weather.temp}K </div>
            {
              this.state.weather.descrips.map( function(descrip) {
                return <div key={count++}> {descrip.description} </div>;
              })
            }
          </span>
        </div>
    );
  }





});

module.exports = WeatherClock;
