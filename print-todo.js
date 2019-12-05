const printTodo = function(todo) {
  const {
    text,
    id,
    priority,
    complete
  } = todo;

  // Use `document.createElement` to make an <li>
  const li = document.createElement('li');
  li.innerText = text;

  // Append the li we made to the ul as the last child.
  document.querySelector('.todo-list').appendChild(li);

  // Give the li a complete class if it was complete already (as in dummy data, or loaded data if we had a back end).
  if (complete) {
    li.classList.add('complete')
  }

  // Give the <li> a layout class and an id so we can find it later (for instance in the event listener below).
  li.classList.add('todo-item');
  li.id = id.toString();

  // Give the li an event listener to toggle its completeness.
  li.addEventListener('click', function(event) {
    event.target.classList.toggle('complete')
    const todo = todos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
  })
}