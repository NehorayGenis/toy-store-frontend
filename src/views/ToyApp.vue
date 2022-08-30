<template>
  <section class="toy-app app-main">
    <div class="main-container container">
      <div class="top">
        <ToyFilter @set-filter="setFilter" />
        <RouterLink class="btn-basic" to="/toy/edit"><i class="material-icons">add</i></RouterLink>
      </div>
      <ToyList :toys="toys" @remove="removeToy" />
    </div>
  </section>
</template>

<script>
import ToyList from "@/components/Toy-List.vue";
import ToyFilter from "../components/Toy-Filter.vue";
import { showMsg } from "../services/event-bus-service.js";

export default {
  components: {
    ToyList,
    ToyFilter,
  },
  data() {
    return {
      filterBy: null,
    };
  },
  created() {
    // this.$store.dispatch({type: 'loadToys'});
  },
  methods: {
    removeToy(id) {
      this.$store
        .dispatch({ type: "removeToy", id })
        .then(() => {
          showMsg("Removed successfully", "success");
        })
        .catch(() => {
          showMsg("Cannot remove toy", "error");
        });
    },
    setFilter(filterBy) {
      // this.filterBy = filterBy;
      console.log(filterBy);
      const copyFilter = JSON.parse(JSON.stringify(filterBy));
      console.log(copyFilter);
      this.$store.dispatch({
        type: "setFilterAct",
        filterBy: copyFilter,
      });
    },
    // setSort(sortBy) {
    //   const copySort = JSON.parse(JSON.stringify(sortBy));
    //   this.$store.commit({type: 'setSort', copySort});
    // },
  },
  computed: {
    toys() {
      return this.$store.getters.toysToShow;
    },
    // toysToShow() {
    //   if (!this.filterBy) return this.toys;
    //   const regex = new RegExp(this.filterBy.name, 'i');
    //   return this.toys.filter((toy) => regex.test(toy.name));
    // },
  },
};
</script>
