<template>
  <section class="toy-edit app-main">
    <h3>{{ pageTitle }}</h3>
    <form v-if="toyToEdit" @submit.prevent="save" class="toy-edit-form">
      <input type="text" placeholder="name" v-model="toyToEdit.name" />
      <input type="price" placeholder="price" v-model="toyToEdit.price" />
      <label
        >Is in stock?
        <select v-model="toyToEdit.inStock">
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </label>
      <select v-model="toyToEdit.labels" multiple>
        <option value="On wheels">On wheels</option>
        <option value="Box game">Box game</option>
        <option value="Art">Art</option>
        <option value="Baby">Baby</option>
        <option value="Doll">Doll</option>
        <option value="Puzzle">Puzzle</option>
        <option value="Outdoor">Outdoor</option>
      </select>
      <button>Save</button>
    </form>
  </section>
</template>

<script>
  import toyService from '../services/toy-service-toBack.js';
  import {showMsg} from '../services/event-bus-service.js';

  export default {
    components: {},
    data() {
      return {
        toyToEdit: null,
      };
    },
    created() {
      const id = this.toyId;
      if (id) {
        // this.toyToEdit = await toyService.getById(id);
        // console.log('the toy', this.toyToEdit);
        //can add try catch if need
        this.$store
          .dispatch({
            type: 'getToyById',
            toyId: id,
          })
          .then((toy) => {
            this.toyToEdit = toy;
          })
          .catch(() => showMsg(`Cannot get toy`, 'danger'));
      } else this.toyToEdit = toyService.getEmptyToy(); // change it to work with store
    },
    methods: {
      save() {
        console.log(this.toyToEdit);
        this.$store
          .dispatch({type: 'saveToy', toy: this.toyToEdit})
          .then((savedToy) => {
            showMsg(`New Toy with ID: ${savedToy._id}`);
          })
          .catch(() => showMsg(`Cannot add toy`, 'danger'));
        // this.toyToEdit = toyService.getEmptyToy();
        this.$router.push('/toy');
      },
    },
    computed: {
      toyId() {
        return this.$route.params.id;
      },
      pageTitle() {
        return this.toyId ? 'Edit toy' : 'Add toy';
      },
    },
  };
</script>

<style></style>
