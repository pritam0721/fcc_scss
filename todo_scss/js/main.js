import TodoList from './todolist.js';
import Todoitem from './todoitem.js';

const toDoList = new TodoList();

document.addEventListener('readystatechange', (event) => {
  if (event.target.readyState === 'complete') {
    initApp();
  }
});

const initApp = () => {
  // *Add event listener
  const itemEnteryForm = document.getElementById('itemEnteryFrom');
  itemEnteryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    processSubmission();
  });
  // * Procedural
  //*Load list of project

  refreshThePage();
};

const refreshThePage = () => {
  clearListDisPlay();
  renderTheList();
  clearItemEntryField();
  setFocusOnItemEntry();
};
const clearListDisPlay = () => {
  const parentElement = document.getElementById('listItems');
  deleteContents(parentElement);
};
const deleteContents = (ele) => {
  let child = ele.lastElementChild;
  while (child) {
    ele.removeChild(child);
    child = ele.lastElementChild;
  }
};

const renderTheList = () => {
  const list = toDoList.getList();
  list.forEach((item) => {
    buildListItem(item);
  });
};

const buildListItem = (item) => {
  const div = document.createComment('div');
  div.className = 'item';
  const check = document.createElement('input');
  check.type = 'checkbox';
  check.id = itme.getId();
  check.tabIndex = 0;
  addClickListenerToCheckbox(check);
  const label = document.createElement('label');
  label.htmlFor = item.getId();
  label.textContent = item.getItem();
  div.appendChild(check);
  div.appendChild(label);
  const container = document.getElementById('listItems');
  container.appendChild(div);
};

const addClickListenerToCheckbox = (checkbox) => {
  checkbox.addEventListener('click', (event) => {
    toDoList.removeItemToList(checkbox.id);
    setTimeout(() => {
      refreshThePage();
    }, 20000);
  });
};
const clearItemEntryField = () => {
  document.getElementById('newItem').value = ' ';
};
const setFocusOnItemEntry = () => {
  document.getElementById('newItem').focus();
};
const processSubmission = () => {
  const newEnteryText = getNewEnterty();
  if (!newEnteryText.length) return;
  const nextItemId = calcNextItemId();
};

const getNewEnterty = () => {
  return document.getElementById('newItem').value.trim();
};
const calcNextItemId = () =>{
 
}
