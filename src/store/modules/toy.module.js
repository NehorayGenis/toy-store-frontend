// import toyService from '@/services/toy-service.js';
import toyService from '@/services/toy-service-toBack.js';

export default {
  state: {
    toys: [],
    filterBy: null,
  },
  getters: {
    toys(state) {
      return JSON.parse(JSON.stringify(state.toys));
    },
    toysToShow(state) {
      const toysCopy = JSON.parse(JSON.stringify(state.toys));
      return toysCopy;
    },
  },
  mutations: {
    setToys(state, { toys }) {
      state.toys = toys;
    },
    removeToy(state, { id }) {
      const idx = state.toys.findIndex((toy) => toy._id === id);
      state.toys.splice(idx, 1);
    },
    saveToy(state, { toy }) {
      const idx = state.toys.findIndex((currToy) => currToy._id === toy._id);
      if (idx !== -1) {
        state.toys.splice(idx, 1, toy);
      } else {
        state.toys.push(toy);
      }
    },
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy;
    },
  },
  actions: {
    loadToys(context, state) {
      // console.log(state.filterBy); // with proxy , state.filterBy is undifend
      let filterBy = { ...context.state.filterBy }; // important use context.state.filterBy
      //server side filter
      return toyService
        .query(filterBy)
        .then((toys) => {
          context.commit({ type: 'setToys', toys });
        })
        .catch((err) => {
          console.log('Error: cannot get toys', err);
          throw err;
        });
    },
    //       context.commit   payload.id
    removeToy({ commit }, { id }) {
      return toyService
        .remove(id)
        .then(() => {
          commit({ type: 'removeToy', id });
        })
        .catch((err) => {
          console.log('Error: cannot remove toy', err);
          throw err;
        });
    },
    saveToy({ commit }, { toy }) {
      return toyService
        .save(toy)
        .then((savedToy) => {
          commit({ type: 'saveToy', toy: savedToy });
          console.log('savedToy', savedToy);
          return savedToy; // can return if you we want showMsg
        })
        .catch((err) => {
          console.log('Error: cannot save toy', err);
          throw err;
        });
    },
    getToyById(context, { toyId }) {
      return toyService
        .getById(toyId)
        .then((toy) => {
          //can add commit if needed
          return toy;
        })
        .catch((err) => {
          console.log('Error: cannot get toy', err);
          throw err;
        });
    },
    //set the filter and run the loadToys with the filter
    setFilterAct({ commit, dispatch }, { filterBy }) {
      commit({ type: 'setFilter', filterBy });
      dispatch({ type: 'loadToys' });
    },
  },
};
