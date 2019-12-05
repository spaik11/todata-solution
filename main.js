/********************
 * OPTIONAL HELPERS *
 ********************/

/*

These functions will greatly simplify things if you want to write them. They are
implementations of map and filter, plus a very simple sort. If you can do them first, they will make the following functions a lot easier, but they aren't super easy
concepts, so if you want to skip them, you can.

They'll also become easier later once you've written a few of the iteration functions and seen how they can be generalized. Those iteration functions in the last section are good practice for writing these!

*/

const map = function(arr, func) {
  const result = [];
  arr.forEach(function(element) {
    result.push(func(element))
  })

  Or:
  // for (const element of arr) {
  //   result.push(func(element))
  // }

  return result;
}

const filter = function(arr, test) {
  const filtered = [];

  arr.forEach(function(element) {
    if(test(element)) {
      filtered.push(element)
    }
  })

  return filtered;
}

const twoPileSort = function(arr, test) {
  // unshift/push method:
  // const sorted = [];

  // arr.forEach(function(element) {
  //   if(test(element)) {
  //     sorted.unshift(element)
  //   } else {
  //     sorted.push(element);
  //   }
  // })

  // return sorted;

  // two-array method:
  // const pile1 = filter(arr, test);
  // const pile2 = filter(arr, function(element) {
  //   return !test(element)
  // })

  // pile2.forEach(function(element) {
  //   pile1.push(element);
  // })

  // return pile1;

  // two array method using concat:
  const pile1 = filter(arr, test);
  const pile2 = filter(arr, (element) => !test(element))

  return pile1.concat(pile2);
}



/********************
 * HELPER FUNCTIONS *
 ********************/

const getTodoName = function(todo) {
  return todo.text
}

const getCompleteness = function (todo) {
  return todo.complete
}

const getPriority = function (todo) {
  return todo.priority
}

const isComplete = function(todo) {
  return todo.complete
}

const isNotComplete = function(todo) {
  return !isComplete(todo)
}

const isHighPriority = function(todo) {
  return todo.priority === 2
}

const isLowPriority = function(todo) {
  return todo.priority === 1
}



/***********************
 * ITERATION FUNCTIONS *
 ***********************/

const names = (todos) => todos.map((todo) => todo.text)


const getPriorityText = (priorityNumber) => {
  switch (priorityNumber) {
    case 1:
      return 'Low';

    case 2:
      return 'High'
  }
}

const namesAndPriorities = (todos) => todos.map((todo) => {
  const {
    text,
    id,
    priority,
    complete
  } = todo;

  return {
    id,
    priority,
    complete,
    text: `${text} - ${getPriorityText(priority)}`
  }
})

const originalTexts = (currentTodos) => currentTodos.map((todo) => {
  const {
    id,
    priority,
    complete,
  } = todo;

  const text = todos.find((todo) => todo.id === id).text;

  return {
    text,
    id,
    priority,
    complete
  }
})

const justNotComplete = (todos) => todos.filter((todo) => !todo.complete)

const justComplete = (todos) => todos.filter((todo) => todo.complete)

const priority2Only = (todos) => todos.filter((todo) => todo.priority === 2)

const priority1Only = (todos) => todos.filter((todo) => todo.priority === 1)

const notCompleteFirst = (todos) => twoPileSort(todos, (todo) => !todo.complete)

const priority2First = (todos) => twoPileSort(todos, (todo) => todo.priority === 2)

module.exports = {
  map,
  filter,
  twoPileSort,
  getTodoName,
  getCompleteness,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
  notCompleteFirst,
  priority2First,
}