<template>
   <section class="toy-filter">
      <label>
         <el-input
            v-model="filterBy.name"
            placeholder="Search...."
            @input="setFilter"
            style="max-width: 250px"
         />
      </label>
      <label>
         <el-select
            @change="setFilter"
            v-model="filterBy.inStock"
            class="m-2"
            placeholder="Select Stock"
         >
            <el-option value="" label="All">All</el-option>
            <el-option value="true" label="In stock">In stock</el-option>
            <el-option value="false" label="Not in stock"
               >Not in stock</el-option
            >
         </el-select>
      </label>
      <label>
         <el-select
            v-model="filterBy.lable"
            multiple
            placeholder="Select"
            style="width: 240px"
            @change="setFilter"
         >
            <el-option
               v-for="label in labels"
               :key="label"
               :label="label"
               :value="label"
            />
         </el-select>
      </label>
         <label>
            <el-select
               @change="setFilter"
               v-model="filterBy.sortBy"
               class="m-2"
               placeholder="Sort By"
            >
               <el-option value="time" label="Time">Time</el-option>
               <el-option value="name" label="Name">Name</el-option>
               <el-option value="price" label="Price">Price</el-option>
            </el-select>
         </label>
   </section>
</template>

<script>
   import { utilService } from '@/services/util-service.js'

   export default {
      name: 'ToyFilter',
      data() {
         return {
            filterBy: {
               name: '',
               lable: [],
               inStock: null,
               sortBy: '',
            },
            labels: [
               'On wheels',
               'Box game',
               'Art',
               'Baby',
               'Doll',
               'Puzzle',
               'Outdoor',
            ],
         }
      },
      created() {
         this.setFilter = utilService.debounce(this.setFilter, 1000)
      },
      methods: {
         setFilter() {
            console.log(this.filterBy)
            this.$emit('set-filter', this.filterBy)
         },
         // setSort() {
         //   this.$emit('sorted', this.sortBy);
         // },
      },
   }
</script>

