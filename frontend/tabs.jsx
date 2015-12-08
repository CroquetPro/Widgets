var React = require('react');


var Tabs = React.createClass({
  getInitialState: function() {
    var count = 0;
    this.props.items.forEach( function(item) {
      item.index = count++;
      item.style = {};
    });

    return {selectedTabIndex: 0};
  },
  onClick: function(e) {
    this.setState({selectedTabIndex: e.target.key});
    debugger
  },
  render: function(){
    // debugger;
    var items = this.props.items;
    var selectedItem = items[this.state.selectedTabIndex];
    selectedItem.style = {fontWeight: "bold"};

    return(
      <div>
        <ul onClick={this.onClick}>
          {
            items.map( function(item) {
            return <li key={item.index} style={item.style}>{item.title}</li>;
            })
          }
        </ul>
        <article> {selectedItem.content} </article>
      </div>
    );
  },
});

module.exports = Tabs;
