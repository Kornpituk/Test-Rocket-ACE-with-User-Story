<template lang="">
    <div>
      <router-link :to="['/luncehes/all/', id].join('')" class="hide-link">
      <div class="card">
        <div class="container">
          <!-- <div class="id-heddent" >
            <h3>Id: {{id}}</h3>
          </div> -->
          <h2>
            Name: <b>{{ name }}</b>
          </h2>
          <!-- <p>Time : {{ static_fire_date_utc }}</p> -->
          <p>date-utc : {{ date_utc }}</p>
          <p>Time-local : {{ date_local }}</p>
          <div>
            <p>
              <a :href="links.patch.small"
                ><img :src="links.patch.small" :alt="name"
              /></a>
            </p>
          </div>
          <p>Crew: {{ crew }}</p>
          <!-- แสดงสถานะการปล่อย -->
          <p v-if="success === true && upcoming === false">
            Status: <button type="button" class="btn-Released">Released</button>
          </p>
          <p v-if="success === false && upcoming === false">
            Status: <button type="button" class="btn-Released">Released</button></p>
          <p v-if="success === null && upcoming === true">
            Status: <button type="button" class="btn-Upcoming">Upcoming</button></p>
        </div>
      </div>
    </router-link>
  </div>
  </template>
<script>
  export default {
    props: ["id", "name", "detail", "crew", "static_fire_date_utc","date_utc","date_local", "links","success","upcoming"],
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
.hide-link {
  text-decoration: none; /* เอาเส้นใต้ข้อความออก */
  color: #000000; /* สีของลิงก์เมื่อยังไม่โฮเวอร์ */
}
.hide-link:hover {
  color: #0056b3; /* สีของลิงก์เมื่อโฮเวอร์ */
  text-decoration: none; /* เอาเส้นใต้ข้อความออกเมื่อโฮเวอร์ */
}
.btn-Released{
  background-color: #5eaf4c;
  border: none;
  font-size: 28px;
  color: #FFFFFF;
  padding: 10px;
  width: 200px;
  text-align: center;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
}

.btn-Upcoming{
  background-color: #c9d735;
  border: none;
  font-size: 28px;
  color: #FFFFFF;
  padding: 10px;
  width: 200px;
  text-align: center;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
}
</style>
  