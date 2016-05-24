var addTodo = function (text) {
    return {
        type: 'ADD_TODO',
        text: text
    };
};
var deleteTodo = function (text) {
    return {
        type: 'DELETE_TODO',
        text: text
    };
};
var completeTodo = function (text) {
    return {
        type: 'COMPLETE_TODO',

    };
};

var actions =
    {
        addTodo: addTodo,
        deleteTodo: deleteTodo,
        completeTodo: completeTodo
    };
module.exports = actions;

