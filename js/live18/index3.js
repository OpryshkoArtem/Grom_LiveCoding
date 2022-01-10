const listElem = document.querySelector('.list');

const tasks = [
  { id: 1, text: 'Buy milk', done: false },
  { id: 2, text: 'Pick up Tom from airport', done: false },
  { id: 3, text: 'Visit party', done: false },
  { id: 4, text: 'Visit doctor', done: true },
  { id: 5, text: 'Buy meat', done: true },
];

const renderTasks = tasksList => {
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');

      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);
      checkbox.checked = done;

      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

function updateTaskHandler(event) {
  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }

  const task = tasks.find(el => el.id === Number(event.target.dataset.id));
  task.done = !task.done;
  // task.done = event.target.checked;
  renderTasks(tasks);
}

// super bad
// let newStatus;
// if(task.done) {
// 	newStatus = false;
// } else {
// 	newStatus = true;
// }

// bad
// const newStatus = task.done ? false : true;

listElem.addEventListener('click', updateTaskHandler);



// web flow
// 1. get data
// 2. render
// 3. uptade data, don't update DOM (!!!!!)
// 4. re-render
