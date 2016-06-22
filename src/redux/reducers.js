var generateId = function (state) {
  return state.todos.reduce(function (maxId, todo){
    return
  })
}

var reducer = function (state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [{
          id: action.id,
          completed: false,
          text: action.text
        }, ...state.todos]
      });

      case 'DELETE_TODO':
        return Object.assign({}. state, {
          todos: state.todos.filter(function(todo) {
            return todo.id !== action.id
          })
        });

      case 'COMPLETE_TODO':
        return Object.assign({}, state, {
          todos: state.todos.map(function (todo) {
            return todo.id === action.id ?
              Object.assign({}, todo, {completed: !todo.completed}) : todo
          })
        })
    default:
      return state;

  }
}

module.exports = reducer;
