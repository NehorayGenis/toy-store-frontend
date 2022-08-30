// import {storageService} from './async-storage-service.js';
// import { storageService } from './storage-service.js'
import axios from 'axios';

// import {utilService} from './util-service.js';

const KEY = 'toysDB';

export default {
  query,
  getById,
  remove,
  save,
  getEmptyToy,
};



function _getUrl(id = '') {
  const BASE_URL =
    process.env.NODE_ENV !== 'development'
      ? '/api/toy'
      : '//localhost:3030/api/toy';
  return `${BASE_URL}/${id}`;
}

function query(filterBy) {
  // return storageService.query(KEY);
  return axios.get(_getUrl(), {params: filterBy}).then((res) => res.data);
}

function getById(id) {
  // return storageService.get(KEY, id);
  return axios.get(_getUrl(id)).then((res) => res.data);
}

function remove(id) {
  // return storageService.remove(KEY, id);
  return axios.delete(_getUrl(id)).then((res) => res.data);
}

function save(toy) {
  if (toy._id) {
    return axios.put(_getUrl(toy._id), toy).then((res) => res.data);
  } else return axios.post(_getUrl(), toy).then((res) => res.data);
}

function getEmptyToy() {
  return {
    _id: '',
    name: '',
    price: null,
    labels: ['Doll', 'Battery Powered', 'Baby'],
    createdAt: new Date(Date.now()).toLocaleString(),
    inStock: true,
    reviews: ['Good', 'Nice', 'Fun'],
  };
}

// function _createToys() {
//   var toys = JSON.parse(localStorage.getItem(KEY));
//   if (!toys || !toys.length) {
//     toys = [
//       _createToy(
//         'Talking Doll',
//         123,
//         ['Doll', 'Battery Powered', 'Baby'],
//         ['Good', 'Nice', 'Fun']
//       ),
//       _createToy('Ball', 50, ['Outdoor', 'Baby'], ['Amazing!']),
//       _createToy('Cards', 250, ['Box game'], ['wow!', 'awesome']),
//     ];
//     localStorage.setItem(KEY, JSON.stringify(toys));
//   }
//   return toys;
// }

// function _createToy(name, price, labels, reviews) {
//   return {
//     _id: utilService.makeId(),
//     name,
//     price,
//     labels,
//     inStock: true,
//     createdAt: new Date(Date.now()).toLocaleString(),
//     reviews: reviews,
//   };
// }
