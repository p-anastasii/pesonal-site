const $form = $('.js--form');
const $input = $('.js--form__input');
const $todosWrapper = $('.js--todos-wrapper');

const todos = JSON.parse(localStorage.getItem('todos')) || [];

function setTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function updateTodos() {
  $todosWrapper.empty();

  todos.forEach((todo, index) => {
    const $li = $('<li>', {class: 'todo-item'});

    if (todo.completed) {
      $li.addClass('todo-item--checked');
    }

    const $checkbox = $('<input>', {type: 'checkbox', checked: todo.completed});
    $checkbox.on('change', () => markTaskAsDone(index));

    const $span = $('<span>', {class: 'todo-item__description', text: todo.text});

    const $deleteButton = $('<button>', {class: 'todo-item__delete', text: 'Видалити'});
    $deleteButton.on('click', () => deleteTodo(index));

    $li.on('click', function () {
      const taskText = todo.text;
      $('.modal-task-text').text(taskText);
      $('.modal').modal('show');
    });

    $li.append($checkbox, $span, $deleteButton);

    $todosWrapper.append($li);
  });
}

$form.on('submit', function (e) {
  e.preventDefault();
  const value = $input.val();
  if (value) {
    addTodo(value);
    $input.val('');
  }
});

function addTodo(text) {
  todos.push({text, completed: false});
  setTodos();
  updateTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  setTodos();
  updateTodos();
}

function markTaskAsDone(index) {
  const todo = todos[index];
  todo.completed = !todo.completed;
  setTodos();
  updateTodos();
}

updateTodos();