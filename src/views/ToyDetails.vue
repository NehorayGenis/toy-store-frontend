<template>
  <section v-if="toy" class="">
    <h3>Toy Details</h3>
    <p>ID: {{ toy._id }}</p>
    <p>Name: {{ toy.name }}</p>
    <p>Price: {{ toy.price }}</p>
    <ul>
      <li
        v-for="(review, idx) in toy.reviews"
        :key="idx + Math.ceil(Math.random() * 100)"
      >
        {{ review }}
      </li>
    </ul>
  </section>
  <div v-else class="loading"></div>
</template>

<script>
  // import toyService from '../services/toy-service.js';

  export default {
    components: {},
    data() {
      return {
        toy: null,
      };
    },
    async created() {
      const {id} = this.$route.params;
      this.$store
        .dispatch({
          type: 'getToyById',
          toyId: id,
        })
        .then((toy) => {
          this.toy = toy;
        })
        .catch(() => showMsg(`Cannot get toy`, 'danger'));
    },
    methods: {},
    // watch: {
    //   '$route.params.id'(id) {
    //     console.log('Changed to', id);
    //     this.loadtoy();
    //   },
    // },
  };
</script>

