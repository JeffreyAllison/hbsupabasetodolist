export function renderTodo (todo) {
  // create a div and a p tag
  const todoDivEl = document.createElement('div');
  const todoPEl = document.createElement('p');
  // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
  if (todo.complete) {
    todoDivEl.classList.add('complete');
  } else {
    todoDivEl.classList.add('incomplete');
  }
  // add the 'todo' css class no matter what
  todoDivEl.classList.add('todo');
  // put the todo's text into the p tag
  todoPEl.textContent = todo.todo;

  // append stuff
  todoDivEl.append(todoPEl);

  // return the div
  return todoDivEl;
}