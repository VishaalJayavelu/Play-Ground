let todoTask = [];

function add(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoTask.push(todo);
  console.log(todoTask);
}

const form = document.querySelector('.Add-Task');

form.addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('.task');
  const text = input.value.trim();
  if (text !== '') {
    add(text);
    input.value = '';
    input.focus();
  }
});





