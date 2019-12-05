# Todata

Using the back end we've built, let's implement the following features:

* Show priorities in addition to text.
* Show only not complete items.
* Show only high priority items.
* Move completed items to the bottom.
* Move high priority items to the top.


### We've added a few things to help you along, like:

* an `id` field to each todo
* a `currentTodos` array you can reassign to (declared with `let` in `todos.js`) without changing your underlying data
* a few minor changes along the way


### We've taken away:

* All buttons but the "ADD" button, and the code for handling that.


### Tips and hints:

* Use the `id` field, which, in `printTodo`, also gets put on the DOM as the `li`'s `id`. Now you can find the right todo to edit no matter what order your todos are in.
* You'll need a lot of buttons (or some code to change what the buttons do, like toggling show/hide). Add them to the html.
* Some code has been changed around to fit the new data and give you some idea of how to do this, but... not everything! This is a very common issue, having to change components of your app to keep up with changes in others. Keep your console open to see your `console.log`ged out values and to watch for errors!