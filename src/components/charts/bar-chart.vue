
<script>
import { BarChart, useBarChart } from "vue-chart-3";
export default {
  extends: BarChart,
  props: {
    pricePerType: Object,
    required: true,
  },
  data() {
    return {
      chartdata: {
        labels: ["0-10", "11-50", "51-100", "100-200", "200+"],
        title: "Prices",
        datasets: [
          {
            label: "Funny",
            backgroundColor: "#1b9ea2",
            data: [12, 54, 88],
          },
          {
            label: "Adult",
            backgroundColor: "#e9fe7e",
            data: [2, 60, 55],
          },
          {
            label: "Educational",
            backgroundColor: "#e64e69",
            data: [2, 60, 55],
          },
        ],
      },
      options: {
        title: {
          display: true,
        },
      },
    };
  },
  created() {},
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>