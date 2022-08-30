<template>
  <DoughnutChart  :chartData="datacollection" />
</template>

<script>
import { defineComponent } from "vue";
import { DoughnutChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default defineComponent({
  name: "Home",
  props: {
    inStockTypes: Object,
  },
  components: { DoughnutChart },
  created() {
    for (const [key, value] of Object.entries(this.inStockTypes)) {
      this.inventory.push(value.stockCount);
    }
  },
  data() {
    return {
      inventory: [],
      datacollection:null,
    };
  },
      mounted () {
      this.fillData()
    },

  methods:{
    fillData() {
      this.datacollection = {
        labels: Object.keys(this.inStockTypes),
        datasets: [
          {
            backgroundColor: ["#1b9ea2", "#e64e69", "#969696",'#964696','#914696'],
            data:this.getArrayofInventory,
          },
        ],
      }
    },
  },
  computed:{
    getArrayofInventory() {
      return Object.values(this.inventory)
    }
  }
});
</script>
