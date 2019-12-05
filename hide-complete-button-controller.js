document.querySelector('.hide-complete').addEventListener('click', (event) => {
  const {target} = event;

  if (target.innerText === "Show Complete") {
    target.innerText = 'Hide Complete';
    currentTodos = todos.slice();
    if (showingPriorities) {
      currentTodos = namesAndPriorities(currentTodos);
    }
  } else {
    target.innerText = 'Show Complete';
    currentTodos = justNotComplete(currentTodos);
  }

  refreshTodos()
})