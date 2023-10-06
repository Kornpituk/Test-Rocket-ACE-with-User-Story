<template lang="">
  <div>
    <div class="card">
      <div class="container">
        <!-- ในตัวอย่างนี้ฉันใช้ชื่อ prop เป็น "item" เพื่อรับข้อมูลที่ส่งมา -->
        <h2>
          Name: <b>{{ item.name }}</b>
        </h2>
        <!-- <p>Time : {{ static_fire_date_utc }}</p> -->
        <p>date-utc : {{ item.date_utc }}</p>
        <p>Time-local : {{ item.date_local }}</p>
        <p>
          <a :href="item.links.patch.small"
            ><img :src="item.links.patch.small" :alt="item.name"
          /></a>
        </p>
        <!-- <p>Time Start: {{ item.crew }}</p> -->
        <p>Date-utc: {{ item.date_utc }}</p>
        <p>Data-local: {{ item.date_local }}</p>
        <p>Details: {{ item.details }}</p>
        <!-- <p>Rocket: {{ item.rocket }}</p> -->
        <div>
          <!------------------------------ Rocket  ----------------------------------------------------->
          <div class="coupon">
            <div class="container">
              <h3>{{ itemsRocket.name }}</h3>
            </div>
            <img
              :src="itemsRocket.flickr_images"
              :alt="itemsRocket.name"
              style="width: 100%"
            />
            <div class="container" style="background-color: white">
              <h2>
                <b>{{ itemsRocket.company }}</b>
              </h2>

              <p>Country: {{ itemsRocket.country }}</p>
              <p>{{ itemsRocket.description }}</p>
              <p>
                Wikipedia:
                <a :href="itemsRocket.wikipedia">{{ itemsRocket.wikipedia }}</a>
              </p>
            </div>
            <div class="container">
              <p>
                Rocket Id: <span class="promo">{{ itemsRocket.id }}</span>
              </p>
              <p class="expire">First Flight: {{ itemsRocket.first_flight }}</p>
            </div>
          </div>
        </div>

        <!---------------------------------------- End Rooket ---------------------------------------------------->
        <br />
        <p>Launchpad: {{ itemsLaunchpad.name }}</p>

        <!------------------------------------------- launches -------------------------------------------------------->
          <p>
            Webcam:
            <a
              :href="item.links.webcast"
              class="button"
              style="vertical-align: middle"
              ><span>Youtube</span></a
            >
          </p>
          <p>
            Article:
                <a :href="item.links.article">{{ item.links.article }}</a>
              </p>

        <!---------------------------------------- End launches ---------------------------------------------------->
        <!-- <div>
          <p>
            <a :href="itemsRocket.flickr_images"
              ><img :src="itemsRocket.flickr_images" :alt="itemsRocket.name"
            /></a>
          </p>
        </div> -->
        <!-- <p>Launchpad: {{ item.launchpad }}</p> -->

        <!-- <div>
          <h2>List of Crew Members:</h2>
          <ul>
            <li v-for="matchingCrewMember in matchingCrewMembers" :key="matchingCrewMember">
              Crew: <span>{{ matchingCrewMember }}</span>
            </li>
          </ul>
        </div> -->
        <!-- เพิ่มการแสดงรายละเอียดเพิ่มเติมที่นี่ -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // กำหนดชื่อ prop เป็น "item" เพื่อรับข้อมูลที่ส่งมาจาก DetailsView.vue
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      itemsRocket: [],
      itemsLaunchpad: [],
      matchingCrewMembers: [], // เก็บข้อมูลนักบินที่จะแสดงบนหน้าเว็บ
    };
  },
  created() {
    fetch("https://api.spacexdata.com/v4/rockets/" + this.item.rocket)
      .then((res) => res.json())
      .then((result) => {
        this.itemsRocket = result;
      }),
      fetch("https://api.spacexdata.com/v4/launchpads/" + this.item.launchpad)
        .then((res) => res.json())
        .then((result) => {
          this.itemsLaunchpad = result;
        }),
      // โหลดข้อมูลนักบินจาก API แรก
      fetch("https://api.spacexdata.com/v4/crew")
        .then((res) => res.json())
        .then((crewData) => {
          // โหลดข้อมูลการเดินทางจาก API ที่สอง
          fetch("https://api.spacexdata.com/v4/launches/" + this.item.id)
            .then((res) => res.json())
            .then((launchData) => {
              // สร้างอาร์เรย์เปล่าเพื่อเก็บชื่อนักบินที่ตรงกัน
              const matchingCrewMembers = [];

              // วนลูปผ่านข้อมูลนักบินจาก API แรก
              for (const crewMember of crewData) {
                // วนลูปผ่านข้อมูลการเดินทางจาก API ที่สอง
                for (const launch of launchData) {
                  // หาชื่อนักบินที่ตรงกันโดยเปรียบเทียบไอดี launches
                  if (crewMember.launches.includes(launch.id)) {
                    // เพิ่มชื่อนักบินที่ตรงกันในอาร์เรย์
                    matchingCrewMembers.push(crewMember.name);
                  }
                }
              }

              // ตอนนี้คุณมีรายการชื่อนักบินที่ตรงกันในตัวแปร matchingCrewMembers
              console.log("Matching Crew Members:", matchingCrewMembers);
            })
            .catch((error) => {
              console.error("Error loading launch data:", error);
            });
        })
        .catch((error) => {
          console.error("Error loading crew data:", error);
        });
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  display: grid;
  /* เพิ่ม */
  justify-items: center;
  /* เพิ่ม */
  align-items: center;
  /* เพิ่ม */
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
  display: grid;
  /* เพิ่ม */
  justify-items: center;
  /* เพิ่ม */
  align-items: center;
  /* เพิ่ม */
}

.button {
  display: inline-block;
  border-radius: 4px;
  background-color: #f4511e;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 28px;
  padding: 10px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}

/**------------------ Coupon   ----------------------------------- */
body {
  font-family: Arial;
}

.coupon {
  border: 5px dotted #bbb;
  width: 80%;
  border-radius: 15px;
  margin: 0 auto;
  max-width: 600px;
}

.container {
  padding: 2px 16px;
  background-color: #f1f1f1;
}

.promo {
  background: #ccc;
  padding: 3px;
}

.expire {
  color: red;
}

/*----------------------------------------------------------------------------------------*/
</style>
