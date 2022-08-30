<template>
  <section class="about container">
    <GMapMap :center="center" :zoom="12" map-type-id="terrain">
      <GMapCluster>
        <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m"
          :clickable="true"
          :draggable="true"
          @click="center = m"
        />
      </GMapCluster>
    </GMapMap>
    <div class="btns-container">
      <button @click="setCenter({ lat: 32.166313, lng: 34.843311 })"><i class="material-icons">pin_drop</i>Tel aviv
      </button>
      <button @click="setCenter({ lat: 32.794044, lng: 34.989571 })">
        <i class="material-icons">pin_drop</i>Haifa
      </button>
      <button @click="setCenter({ lat: 32.919945, lng: 35.290146 })">
        <i class="material-icons">pin_drop</i>Karmiel
      </button>
    </div>
  </section>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      center: { lat: 32.166313, lng: 34.843311 },
      markers: [
        {
          lat: 32.166313,
          lng: 34.843311,
        },
        {
          lat: 32.794044,
          lng: 34.989571,
        },
        {
          lat: 32.919945,
          lng: 35.290146,
        },
      ],
    };
  },
  methods: {
    setCenter(position) {
      this.center = position;
    },
  },
};
</script>
