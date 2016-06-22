var addTodo = function (text) {
    return {
        type: 'ADD_TODO',
        text: text
    };
};
var deleteTodo = function (id) {
    return {
        type: 'DELETE_TODO',
        id: id
    };
};
var completeTodo = function (id) {
    return {
        type: 'COMPLETE_TODO',
        id: id
    };
};

var actions =
    {
        addTodo: addTodo,
        deleteTodo: deleteTodo,
        completeTodo: completeTodo
    };
module.exports = actions;
