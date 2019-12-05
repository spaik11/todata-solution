const clearTodos = function() {
  const list = document.querySelector('.todo-list');
  while(list.hasChildNodes()) {
    list.firstChild.remove();
  }
}