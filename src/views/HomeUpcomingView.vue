<script setup>
import MyCardAllVue from "../components/MyCardAll.vue";
</script>

<template>
  <!-- <main>
    <h1>Home All</h1>
    <div className="grid-container">
      <MyCardAllVue v-for="item in items" v-bind="item" />
    </div>
  </main> -->
  <main>

    <div class="grid-container">
      <h1 class="header-font">Home Upcoming</h1>
      <br>
      <table id="customers">
        <thead>
          <tr>

            <th @click="sortByColumn('id')">No.</th>
            <th @click="sortByColumn('name')">Name</th>
            <th @click="sortByColumn('date_utc')">Date UTC</th>
            <!-- <th >Date UTC</th> -->
            <th @click="sortByColumn('date_local')">Date Local</th>
            <th >Image</th>
            <th >Crew</th>
            <th >Status</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in items" :key="item.id" @click="goToDetails(item.id)">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.date_utc }}</td>
            <td>{{ item.date_local }}</td>
            <td>
              <a :href="item.links.patch.small"><img :src="item.links.patch.small" :alt="item.name" /></a>
            </td>
            <td>{{ item.crew }}</td>
            <td>
              <!-- แสดงสถานะการปล่อย -->
              <p v-if="item.success === true && item.upcoming === false">
                Status:
                <button type="button" class="btn-Released">Released</button>
              </p>
              <p v-if="item.success === false && item.upcoming === false">
                Status:
                <button type="button" class="btn-Released">Released</button>
              </p>
              <p v-if="item.success === null && item.upcoming === true">
                Status:
                <button type="button" class="btn-Upcoming">Upcoming</button>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      perPage: 10, // จำนวนรายการต่อหน้า
      currentPage: 1, // หน้าปัจจุบัน
      sortBy: '', // เก็บชื่อคอลัมน์ที่ใช้เรียงลำดับ
      sortOrder: 'asc' // เก็บรายละเอียดการเรียงลำดับ (asc หรือ desc)
    };
  },
  created() {
    fetch("https://api.spacexdata.com/v4/launches/upcoming")
      .then((res) => res.json())
      .then((result) => {
        this.items = result;
      });
  },
  methods: {
    goToDetails(id) {
      // นำคุณไปยังหน้า Details ที่มี id เป็นพารามิเตอร์
      this.$router.push(`/luncehes/upcoming/${id}`);
    },
    pageChange(newPage) {
      this.currentPage = newPage;
    },
    // เรียกเมื่อคลิกที่หัวคอลัมน์เพื่อเรียงลำดับ
    sortByColumn(columnName) {
      if (this.sortBy === columnName) {
        // ถ้ากำลังเรียงตามคอลัมน์เดิม สลับการเรียงลำดับ
        this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
      } else {
        // ถ้ากำลังไม่เรียงตามคอลัมน์เดิม ให้เรียงตามคอลัมน์ใหม่
        this.sortBy = columnName;
        this.sortOrder = 'asc'; // เริ่มต้นการเรียงลำดับเป็น Ascending
      }

      // เรียงลำดับข้อมูล
      this.items.sort((a, b) => {
        // ปรับให้คอลัมน์ที่ต้องการเรียงลำดับเป็นค่าตัวเลข (หากเป็นวันที่ให้แปลงเป็น Date)
        const valueA = columnName === 'date_utc' ? new Date(a[columnName]) : a[columnName];
        const valueB = columnName === 'date_utc' ? new Date(b[columnName]) : b[columnName];
        
        if (this.sortOrder === 'asc') {
          return valueA < valueB ? -1 : 1; // เรียงจากน้อยไปมาก
        } else {
          return valueA > valueB ? -1 : 1; // เรียงจากมากไปน้อย
        }
      });
    },
  },
  // computed: {
  //   sortedItems() {
  //     // ถ้าไม่ได้เรียงลำดับให้คืนข้อมูลเริ่มต้น
  //     if (!this.sortBy) {
  //       return this.items;
  //     }

  //     // ถ้าเรียงลำดับให้คืนข้อมูลที่ถูกเรียงลำดับแล้ว
  //     return [...this.items].sort((a, b) => {
  //       const valueA = this.sortBy === 'id' ? new Date(a[this.sortBy]) : a[this.sortBy];
  //       const valueB = this.sortBy === 'id' ? new Date(b[this.sortBy]) : b[this.sortBy];

  //       if (this.sortOrder === 'asc') {
  //         return valueA - valueB;
  //       } else {
  //         return valueB - valueA;
  //       }
  //     });
  //   },
  // },



};
</script>

<style scoped>
style .grid-container {
  display: grid;
  place-items: center;
  /* จัดเนื้อหาตรงกลางทั้งแนวตั้งและแนวนอน */
  min-height: 100vh;
  /* สร้างความสูงเท่ากับ viewport height เพื่อให้เนื้อหาอยู่กลางหน้าจอ */
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

.h1 {
  display: grid;
  justify-items: center;
  /* เพิ่ม */
  align-items: center;
  /* เพิ่ม */
}

.header-font {
  display: grid;
  justify-items: center;
  /* เพิ่ม */
  align-items: center;
  /* เพิ่ม */
}

#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  max-width: 1200px;
  /* ปรับขนาดสูงสุดของตาราง */
  margin: 0 auto;
  /* จัดตารางตรงกลางของหน้าจอ */
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  /* จัดข้อความตรงกลางแนวนอน */
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  /* จัดข้อความตรงกลางแนวนอน */
  background-color: #04aa6d;
  color: white;
}

.btn-Released,
.btn-Upcoming {
  background-color: #5eaf4c;
  border: none;
  font-size: 18px;
  /* ปรับขนาดตัวอักษรให้เล็กลง */
  color: #ffffff;
  padding: 8px 12px;
  /* ปรับขนาดการเว้นระยะให้สั้นลง */
  width: 120px;
  /* ปรับความกว้างของปุ่ม */
  text-align: center;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
}

.btn-Upcoming {
  background-color: #c9d735;
}
</style>
