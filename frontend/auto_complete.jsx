
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
    this.props.dictionary.forEach( function(name){
        if(newRegex.exec(name) !== null){
          newMatches.push(name);
        }
      });
      console.log(newMatches);
    this.setState({matches: newMatches});
  },
  render: function(){
    //will be called if state changes
    return(
      <input type='text' value={this.state.currText}
      onChange={this.keyPress}></input>
    );
  }
});

module.exports = AutoComplete;
