"use strict";

var $form = $('.js--form');
var $input = $('.js--form__input');
var $todosWrapper = $('.js--todos-wrapper');
var todos = JSON.parse(localStorage.getItem('todos')) || [];
function setTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}
function updateTodos() {
  $todosWrapper.empty();
  todos.forEach(function (todo, index) {
    var $li = $('<li>', {
      "class": 'todo-item'
    });
    if (todo.completed) {
      $li.addClass('todo-item--checked');
    }
    var $checkbox = $('<input>', {
      type: 'checkbox',
      checked: todo.completed
    });
    $checkbox.on('change', function () {
      return markTaskAsDone(index);
    });
    var $span = $('<span>', {
      "class": 'todo-item__description',
      text: todo.text
    });
    var $deleteButton = $('<button>', {
      "class": 'todo-item__delete',
      text: 'Видалити'
    });
    $deleteButton.on('click', function () {
      return deleteTodo(index);
    });
    $li.on('click', function () {
      var taskText = todo.text;
      $('.modal-task-text').text(taskText);
      $('.modal').modal('show');
    });
    $li.append($checkbox, $span, $deleteButton);
    $todosWrapper.append($li);
  });
}
$form.on('submit', function (e) {
  e.preventDefault();
  var value = $input.val();
  if (value) {
    addTodo(value);
    $input.val('');
  }
});
function addTodo(text) {
  todos.push({
    text: text,
    completed: false
  });
  setTodos();
  updateTodos();
}
function deleteTodo(index) {
  todos.splice(index, 1);
  setTodos();
  updateTodos();
}
function markTaskAsDone(index) {
  var todo = todos[index];
  todo.completed = !todo.completed;
  setTodos();
  updateTodos();
}
updateTodos();