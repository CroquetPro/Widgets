var React = require('react'),
  ReactDOM = require('react-dom'),
  AutoComplete = require('./auto_complete'),
  WeatherClock = require('./weather_clock'),
  Tabs = require('./tabs');


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

var TABARRAY = [{title: 'First', content: 'first content'},
                {title: 'Second', content: '2nd content'},
                {title: 'Third', content: 'third content'},
                {title: 'Fourth', content: '4th content'},
                {title: 'Fifth', content: 'fifth content'},
                {title: 'Sixth', content: '6th content'},
                {title: 'Seventh', content: 'seventh content'},
                {title: 'Eighth', content: '8th content'},
];

var Widgets = React.createClass({
  render: function () {
    return(
      <div>
        <AutoComplete dictionary={NAMES}/>
        <WeatherClock />
        <Tabs items={TABARRAY}/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets/>, document.getElementById('main'));
});
