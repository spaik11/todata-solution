document.querySelector('.hide-low-priority')
  .addEventListener('click', (event) => {
    const {target} = event;

    if (target.innerText === "Show Low Priority") {
      target.innerText = 'Hide Low Priority';
      currentTodos = todos.slice();
      if (showingPriorities) {
        currentTodos = namesAndPriorities(currentTodos);
      }
    } else {
      target.innerText = 'Show Low Priority';
      currentTodos = priority2Only(currentTodos);
    }

    refreshTodos()
  })