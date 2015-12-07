var React = require('react');
var ReactDOM = require('react-dom');
var AutoComplete = require('./auto_complete');

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
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets/>, document.getElementById('main'));
});
