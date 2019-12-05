document.querySelector('.toggle-priorities')
  .addEventListener('click', (event) => {
    const {target} = event;
    showingPriorities = !showingPriorities

    if (target.innerText === 'Show Priorities') {
      target.innerText = 'Hide Priorities'
      currentTodos = namesAndPriorities(currentTodos);
    } else {
      target.innerText = 'Show Priorities'
      currentTodos = originalTexts(currentTodos);
    }

    refreshTodos();
})