<template>
  <section class="dashboard-page-container flex">
    <h1>Dashboard</h1>
    <pie-chart
      v-if="dataReady"
      class="pie-chart"
      :inStockTypes="inStockTypesMap"
    />
    <!-- <bar-chart class="bar-chart" :pricePerType="pricePerType" /> -->
  </section>
</template>

<script>
import pieChart from "@/components/charts/pie-chart.vue";
import barChart from "@/components/charts/bar-chart.vue";
export default {
  data() {
    return {
      dataReady: false,
    };
  },
  computed: {
    toys() {
      return this.$store.getters.toys;
    },
    inStockTypesMap() {
      return this.toys?.reduce((acc, toy) => {
        toy.labels.forEach((label) => {
          if (!acc[label]) acc[label] = { stockCount: 0 };
          if (toy.inStock) acc[label].stockCount++;
          return acc[label];
        }); 
        return acc;
      }, {});
    },
    pricePerType() {
      return this.toys?.reduce(
        (data, toy) => {
          console.log(data);
          if (toy.type !== "Funny") {
            console.log("DATAAAAA", data);
            return data;
          }
          if (parseInt(toy.price) <= 10) data["0-10"]++;
          else if (parseInt(toy.price) <= 50) data["11-50"]++;
          else if (parseInt(toy.price) <= 100) data["51-100"]++;
          else if (parseInt(toy.price) <= 200) data["100-200"]++;
          else data["200+"]++;
          return data;
        },
        { "0-10": 0, "11-50": 0, "51-100": 0, "100-200": 0, "200+": 0 }
      );
    },
  },
  created() {
    this.$store.dispatch("loadToys").then(() => (this.dataReady = true));
  },
  components: {
    pieChart,
    barChart,
  },
};
</script>
<style scoped>
.pie-chart,
.bar-chart {
  width: 320px;
}
</style>