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
  const clearItem = document.getElementById('clearItems');
  clearItem.addEventListener('click', () => {
    const list = toDoList.getList();
    if (list.length > 0) {
      const confirmed = confirm('are you sure you want to delete the list ?');
      if (confirmed) {
        toDoList.clearList();
        updatePresistentData(toDoList.getList());
        refreshThePage();
      }
    }
  });
  // * Procedural
  loadListObject();
  refreshThePage();
};

const loadListObject = () => {
  const list = localStorage.getItem('myToDoList');
  if (typeof list !== 'string') return;
  const parsedList = JSON.parse(list);
  parsedList.forEach((itme) => {
    const newToDoItem = createNewItem(itme._id, itme._item);
    toDoList.addItemToList(newToDoItem);
  });
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
  const div = document.createElement('div');
  div.className = 'item';

  const check = document.createElement('input');
  check.type = 'checkbox';
  check.id = item.getId();
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
    updatePresistentData(toDoList.getList());
    setTimeout(() => {
      refreshThePage();
    }, 2000);
  });
};

const updatePresistentData = (listArry) => {
  localStorage.setItem('myToDoList', JSON.stringify(listArry));
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
  const toDoItem = createNewItem(nextItemId, newEnteryText);
  toDoList.addItemToList(toDoItem);
  updatePresistentData(toDoList.getList());
  refreshThePage();
};

const getNewEnterty = () => {
  return document.getElementById('newItem').value.trim();
};
const calcNextItemId = () => {
  let nextItemId = 1;
  const list = toDoList.getList();
  if (list.length > 0) {
    nextItemId = list[list.length - 1].getId() + 1;
  }
  return nextItemId;
};
const createNewItem = (nid, ntext) => {
  const toDo = new Todoitem();
  toDo.setId(nid);
  toDo.setItem(ntext);
  return toDo;
};
