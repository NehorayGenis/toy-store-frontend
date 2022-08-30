<template>
  <section class="toy-list">
    <ul class="clean-list">
      <li v-for="toy in toys" :key="toy._id">
        <ToyPreview sign="$" :toy="toy" />
        
      </li>
    </ul>
  </section>
</template>

<script>
  import ToyPreview from './Toy-Preview.vue';

  export default {
    name: 'ToyList',
    props: {
      toys: Array,
    },
    components: {
      ToyPreview,
    },
    data() {
      return {};
    },
    created() {},
    methods: {
      remove(id) {
        this.$emit('remove', id);
      },
    },
    computed: {},
    unmounted() {},
  };
</script>
