<template>
<div>
  <app-header />
  <RouterView />
  <user-msg />
</div>
</template>

<script>
  // import {RouterLink, RouterView} from 'vue-router';
  import AppHeader from './components/AppHeader.vue';
  import UserMsg from '@/components/UserMsg.vue';

  export default {
    components: {
      AppHeader,
      UserMsg,
    },
    created() {
      this.$store.dispatch({type: 'loadToys'});
    },
  };
</script>

<style></style>
