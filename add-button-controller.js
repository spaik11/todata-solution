document.querySelector('.add-todo').addEventListener('click', () => {
  const inputBox = document.querySelector('.todo-input');

  const text = inputBox.value;
  const id = todos.length;
  const priority = Number(document.querySelector('.priority').value)
  const complete = false;

  const todo = {
    text,
    id,
    priority,
    complete,
  }

  addTodo(todo);
  printTodo(todo);


  inputBox.value = '';
})