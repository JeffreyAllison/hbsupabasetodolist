import {
  checkAuth,
  createTodo,
  completeTodo,
  getTodos,
  logout,
  deleteAllTodos,
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

todoForm.addEventListener('submit', async (e) => {
  // on submit, create a todo, reset the form, and display the todos
  e.preventDefault();

  const data = new FormData(form);

  await createTodoItem({
    todo: data.get('todo'),
    completed: false,
  });

  await displayTodos();

});

async function displayTodos () {
  // fetch the todos
  todosEl.textContent = '';

  // display the list of todos
  const todoList = await getTodos();

  for (let todoItem of Todos) {
    const todoItemEl = document.createElement('p');

    todoItemEl.textContent = `${todo.todo}`;

    todosEl.append(todoItemEl);
  }

  // be sure to give each todo an event listener

  // on click, complete that todo
}

// add an on load listener that fetches and displays todos on load

logoutButton.addEventListener('click', () => {
  logout();
});


deleteButton.addEventListener('click', async () => {
  // delete all todos

  // then refetch and display the updated list of todos
});
