var React = require('react'),
  ReactDOM = require('react-dom'),
  AutoComplete = require('./auto_complete'),
  WeatherClock = require('./weather_clock');


var NAMES = ['Annmarie',
                'Allan',
                'Allen',
                'Angela',
                'Angelica',
                'Lonnie',
                'Sherlene',
                'Cyrus',
                'Santos',
                'Mackenzie',
                'Elmer',
                'Willena',
                'Carmen',
                'Candie',
                'Felton',
                'Chandra',
                'Vanna',
                'Hoa',
                'Izola',
                'Owen',
                'Felipa',
                'Twana',
                'Morris',
                'Leigha',
                'Shaunte',
                'Adriene',
                'Hanh',
                'Shay',
                'Marie',
                'Shu',
                'Leia',
                'Willian',
                'Huey',
                'Nikole',
                'Jerlene',
                'Fermin',
                'Renda',
                'Addie',
                'Nola',
                'Marni',
                'Williemae',
                'Shawna',
                'Toshia',
                'Lino',
                'Chantell',
                'Fonda',
                'Elfriede',
                'Rosanne',
                'Dorcas',
                'Mack',
                'Lael',
                'Maryanne',
                'Williams',
                'Melany',
];

var Widgets = React.createClass({
  render: function () {
    return(
      <div>
        <AutoComplete dictionary={NAMES}/>
        <WeatherClock />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets/>, document.getElementById('main'));
});
