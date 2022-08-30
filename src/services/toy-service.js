import { storageService } from './async-storage-service.js';
// import { storageService } from './storage-service.js'

import { utilService } from './util-service.js';

const KEY = 'toysDB';

export default {
  query,
  getById,
  remove,
  save,
  getEmptyToy,
};

var gToys = _createToys();

function query(filterBy) {
  return storageService.query(KEY);
}

function getById(id) {
  return storageService.get(KEY, id);
}

function remove(id) {
  return storageService.remove(KEY, id);
}

function save(toy) {
  const savedToy = toy._id
    ? storageService.put(KEY, toy)
    : storageService.post(KEY, toy);
  return savedToy;
}

function _add(toy) {
  return storageService.post(KEY, toy);
}

function _update(toy) {
  return storageService.put(KEY, toy);
}

function getEmptyToy() {
  return Promise.resolve({
    _id: '',
    name: '',
    price: null,
    labels: ['Doll', 'Battery Powered', 'Baby'],
    createdAt: new Date(Date.now()).toLocaleString(),
    inStock: true,
    reviews: ['Good', 'Nice', 'Fun'],
  });
}

function _createToys() {
  var toys = JSON.parse(localStorage.getItem(KEY));
  if (!toys || !toys.length) {
    toys = [
      _createToy(
        'Talking Doll',
        123,
        ['Doll', 'Battery Powered', 'Baby'],
        ['Good', 'Nice', 'Fun']
      ),
      _createToy('Ball', 50, ['Outdoor', 'Baby'], ['Amazing!']),
      _createToy('Cards', 250, ['Box game'], ['wow!', 'awesome']),
    ];
    localStorage.setItem(KEY, JSON.stringify(toys));
  }
  return toys;
}

function _createToy(name, price, labels, reviews) {
  return {
    _id: utilService.makeId(),
    name,
    price,
    labels,
    inStock: true,
    createdAt: new Date(Date.now()).toLocaleString(),
    reviews: reviews,
  };
}
