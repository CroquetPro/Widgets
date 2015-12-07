
var React = require('react');
var Input = require('./input');

var AutoComplete = React.createClass({
  getInitialState: function() {
    return {currText: "", matches: []};
  },
  keyPress: function(e){
    // console.log(e);
    var oldText = this.state.currText;
    this.setState({currText: e.target.value});
    var newText = e.target.value; //input form
    // check if currText diff and update,
    // if (oldText !== newText){
    // call findMatches
    this.findMatches(newText);
    // }
  },
  findMatches: function(newText){
    //update state of matches
    var newMatches = [];
    var newRegex = new RegExp("^" + newText);
    if(newText.length > 0 ) {
      this.props.dictionary.forEach( function(name){
          if(name.match(newRegex) !== null){
            newMatches.push(name);
          }
        });
    }
    this.setState({matches: newMatches});
    // console.log(this.state.matches);
  },
  onClick: function (e){
    console.log(e);
    this.setState({currText: e.target.textContent});
    this.findMatches(e.target.textContent);
  },

  render: function(){
    //will be called if state changes
    return(
      <div>
        <input type='text' value={this.state.currText}
        onChange={this.keyPress}></input>
        <ul onClick={this.onClick}>{
            this.state.matches.map( function(name) {
              return <li key={name}>{name}</li>;
              })
            }
        </ul>
      </div>
    );
  }
});

module.exports = AutoComplete;
