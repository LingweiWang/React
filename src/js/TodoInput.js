import React from 'react';

var TodoInput = React.createClass({
  submit: function (e){
    e.preventDefault();
    this.props.addTodoInput(this.state.text);
    this.setState({
      text: ''
    });
  },
  change: function (e){
    this.setState({
      text: e.target.value
    });
  },
  getInitialState: function(){
    return {
      text: ''
    };
  },

  render: function(){
    return (
      <div>
        <form onSubmit={this.submit}>
          <input
            type="text"
            autoFocus="true"
            value={this.state.text}
            onChange={this.change}/>
          <input
            type="submit"
            value="Add"/>
        </form>
      </div>
    )
  }
});

module.exports = TodoInput;
