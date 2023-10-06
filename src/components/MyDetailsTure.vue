<template lang="">
    <div>
      <div class="card">
        <div class="container">
          <h2>Name: <b>{{name}}</b></h2>
          <p>Time Start: {{static_fire_date_utc}}</p>
          <div>
          <p>Image: <a :href="links.patch.small"><img :src="links.patch.small" :alt="name" /></a></p>

        </div>
          <p>Crew: {{crew}}</p>
          <p>Detail: {{detail}}</p>
          <p>Rocker: {{rocker}}</p>
          <p>Launchpad: {{launchpad}}</p>
          <div id="app">
    </div>
        </div>
      </div>
    </div>
  </template>
<script>
  export default {
      props: ['id', 'name', 'detail','crew','static_fire_date_utc',
      "links","rocker","launchpad"]
  };

</script>
  
<style scoped>
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;

}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
    padding: 2px 16px;
}
</style>