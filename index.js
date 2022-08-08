import Books from './modules/books.js';
import StorageB from './modules/storage.js';
import {
  listBtn, addBtn, contactBtn, listBox, addBox, contactBox, date,
} from './modules/variables.js';

import dateTime from './modules/luxon.js';

// ---------ADD-------------
const booker = new Books();

const newB = document.getElementById('bk');
newB.addEventListener('submit', (event) => {
  event.preventDefault();
  StorageB.addBook(booker);
});

// -------DELETE----------

document.addEventListener('click', (e) => {
  if (e.target.matches('.btn-display')) {
    StorageB.deleteBook(e);
  }
});

StorageB.display();

// -------NAV--------

listBtn.addEventListener('click', () => {
  listBox.style.display = 'flex';
  addBox.style.display = 'none';
  contactBox.style.display = 'none';
});

addBtn.addEventListener('click', () => {
  listBox.style.display = 'none';
  addBox.style.display = 'flex';
  contactBox.style.display = 'none';
});

contactBtn.addEventListener('click', () => {
  listBox.style.display = 'none';
  addBox.style.display = 'none';
  contactBox.style.display = 'flex';
});

date.textContent = dateTime;
