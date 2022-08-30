<template>
  <section class="toy-preview">
    <el-card :body-style="{ padding: '0px' }">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="image" />
      <div style="padding: 14px">
        <span>{{  toy.name  }}</span>
        <div class="bottom">
          <time class="time">{{  toy.price  }}$</time>
          <h4>In stock? {{  toy.inStock  }}</h4>
        </div>
      </div>
      <div class="btns-container">
        <!-- <button @click="remove(toy._id)">Remove</button> -->
        <RouterLink class="btn-basic" :to="`/toy/edit/${toy._id}`" title="Edit">Edit</RouterLink>
        <RouterLink class="btn-basic" :to="`/toy/${toy._id}`" title="Details">Details</RouterLink>
        <el-button title="Delete" @click="remove(toy._id)" color="#c946bc" style="color: white"><i
            class="material-icons">delete</i></el-button>
      </div>
    </el-card>

    <!-- <p>Sign {{ sign }}</p>
    <h2>{{ toy.name }}</h2>
    <h4>{{ toy.price }}$</h4>
    <h4>In stock? {{ toy.inStock }}</h4> -->
  </section>
</template>

<script>
import toyServiceToBack from '../services/toy-service-toBack'
export default {
  name: 'ToyPreview',
  props: {
    toy: {
      type: Object,
      required: true,
      default: 12,
      default() {
        return {
          name: '',
          price: null,
          labels: ['Doll', 'Battery Powered', 'Baby'],
          createdAt: new Date(Date.now()).toLocaleString(),
          inStock: true,
          reviews: [],
        }
      },
    },
    sign: {
      type: String,
      required: false,
      validator(value) {
        const acceptedSigns = ['$', '&', '@']
        return acceptedSigns.includes(value)
      },
    },
  },
  components: {},
  data() {
    return {}
  },
  created() { },
  methods: {
    remove(id){
      this.$store.dispatch({ type: 'removeToy',id })
    }
  },
  computed: {},
  unmounted() { },
}
</script>