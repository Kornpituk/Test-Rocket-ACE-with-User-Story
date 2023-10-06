<script setup>
import MyDetails from '../components/MyDetails.vue';
</script>

<template>
  <main>
    <!-- <h1>Details </h1> -->
    <!-- <div className="grid-container">
      <MyDetails v-for="item in items" v-bind="item" />
    </div> -->
    <div>
    <!-- <h1>Details Page for ID: {{ $route.params.id }}</h1> -->
    <MyDetails v-if="items" :item="items" />
    <!-- <MyDetails v-for="item in items" v-bind="item" /> -->
  </div>
  </main>
  
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  },
  created() {
    fetch('https://api.spacexdata.com/v4/launches/'+this.$route.params.id)
    .then(res => res.json())
    .then((result) => {
      this.items = result
    })
  }
}

</script>

<style scoped>
.grid-container {
  display: grid;
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
}

@media (min-width: 576px) {
  .grid-container {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (min-width: 992px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
