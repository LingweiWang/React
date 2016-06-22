import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import TodoInput from 'TodoInput'

var App = React.createClass({
  render: function() {
    return (
      <div>
      <TodoInput addTodo={this.props.actions.addTodo}></TodoInput>
      </div>
    )
  }
});

var mapStateToProps = function (state) {
  return state;
}
var mapDispatchToProps = function (dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch);
  };
}
module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
