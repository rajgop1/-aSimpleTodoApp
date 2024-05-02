import TodoStorePriorityQueue from './todoPriorityQueue.js';

// Read UI
const todo = document.getElementById('what-to-do');
const add = document.getElementById('add-todo');
const previouslyAddedItems = document.getElementById('previously-added-items');
const todosUI = document.getElementById('todos');
const priotity = document.getElementById('priority');
const todoForm = document.getElementById('todo-form');

// minHeap Prioirty Queue Todo store
const todoStore = new TodoStorePriorityQueue([]);

// Add todo prevent default
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoValue = todo.value;
  const priorityValue = priotity.value;
  const todoItem = createTodoItem(todoValue, +priorityValue);
  todoStore.add(todoItem);
  renderTodo();
  todo.value = '';
  todo.focus();
});

function createTodoItem(todoValue, priorityValue) {
  const id = Date.now().toString();
  const todoItem = {
    id,
    todoValue,
    completed: false,
    editable: false,
    priorityValue,
  };
  return todoItem;
}

// render todo
function renderTodo() {
  todosUI.innerHTML = ``;
  if (todoStore.length > 0) {
    const todos = todoStore.data;
    todos.forEach((todoItem) => {
      const container = document.createElement('div');
      const span = document.createElement('span');
      const button = document.createElement('button');

      button.addEventListener('click', () => {
        deleteTodo(todoItem.id);
      });

      span.textContent = todoItem.todoValue;
      button.textContent = 'Delete';
      container.append(span, button);
      todosUI.append(container);
    });
  } else {
    todosUI.innerHTML = `Nothing...`;
  }
}

function deleteTodo(id) {
  todoStore.remove(id);
  renderTodo();
}
