document.querySelector('.high-priority-first').addEventListener('click', (event) => {
  const {target} = event;

  if (target.innerText === 'High Priority First') {
    target.innerText = 'Original Order';
    currentTodos = priority2First(currentTodos)
  } else {
    target.innerText = 'High Priority First';
    currentTodos = todos.slice();
    if (showingPriorities) {
      currentTodos = namesAndPriorities(currentTodos);
    }
  }

  refreshTodos()
})