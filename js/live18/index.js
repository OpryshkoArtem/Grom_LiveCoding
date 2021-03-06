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

const createBtn = document.querySelector('.create-task-btn');
const inputElem = document.querySelector('.task-input');

function createTaskHandler() {
  const task = {
    text: inputElem.value,
    done: false,
  };
  if (inputElem.value !== '') {
    tasks.push(task);
    inputElem.value = '';

    renderTasks(tasks);
  }
}
createBtn.addEventListener('click', createTaskHandler);

// EVENT
// 1. add event to the element   +++
// 2. create event handlers

// list
// click

// input: event
// output: undef

// alg
// find task by Id
// update task
// re-render
listElem.addEventListener(
  'click',
  function (event) {
    if (event.target.tagName === 'INPUT') {
      event.target.closest('.list__item').classList.toggle('list__item_done');
    }
  },
  false,
);

// input: string, func(callback)
// output: undefined

listElem.addEventListener('click', updateTaskHandler);

// web flow
// 1. get data
// 2. render
// 3. uptade data, don't update DOM (!!!!!)
// 4. re-render
