document.querySelector('.complete-last').addEventListener('click', (event) => {
  const {target} = event;

  if (target.innerText === 'Complete Last') {
    target.innerText = 'Original Order';
    currentTodos = notCompleteFirst(currentTodos)
    console.log(`currentTodos`, currentTodos)
  } else {
    target.innerText = 'Complete Last';
    currentTodos = todos.slice();
    if (showingPriorities) {
      currentTodos = namesAndPriorities(currentTodos);
    }
  }

  refreshTodos()
})