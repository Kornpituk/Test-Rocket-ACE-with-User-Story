<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="grid-container">
      <!-- <div>
        <ul>
          <li><a class="active" href="/">Home</a></li>
          <li><a href="/luncehes/past">Luncehes Past</a></li>
          <li><a href="/luncehes/upcoming">Luncehes Upcomming</a></li>
          <li><a href="/contactus">Contact</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div> -->
    </div>
    <ul>
      <li><a class="active" href="/">Home</a></li>
      <li><a href="/luncehes/past">Luncehes Past</a></li>
      <li><a href="/luncehes/upcoming">Luncehes Upcomming</a></li>
      <li class="dropdown">
        <a href="javascript:void(0)" class="dropbtn">Dropdown</a>
        <div class="dropdown-content">
          <a href="/contactus">Contact</a>
          <a href="/about">About</a>
        </div>
      </li>
    </ul>
    <div class="grird-container"></div>
  </header>
  <RouterView />
</template>

<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
} */

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.grid-container {
  display: grid;
  place-items: center; /* จัดเนื้อหาตรงกลางทั้งแนวตั้งและแนวนอน */
  align-items: center;
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

/* ปรับเมนูให้แสดงผลแนวนอนทั้งหมดเมื่อหน้าจอมีขนาดไม่เกิน 768px */
@media screen and (max-width: 768px) {
  ul {
    flex-direction: row; /* เปลี่ยนเป็นแนวนอน */
    text-align: center;
    
  }

  li {
    margin-right: 10px; /* เพิ่มระยะห่างระหว่างเมนู */
    margin-bottom: 0; /* ไม่มีระยะห่างด้านล่าง */
  }
}

/* กำหนดคุณสมบัติ CSS Grid เมื่อหน้าจอมีขนาดไม่น้อยกว่า 769px */
@media screen and (min-width: 769px) {
  ul {
    display: flex; /* ใช้ Flexbox */
    justify-content: center; /* จัดให้เมนูอยู่ตรงกลาง */
  }

  li {
    margin-right: 10px; /* ระยะห่างระหว่างเมนู */
    margin-bottom: 0; /* ไม่มีระยะห่างด้านล่าง */
  }
}

/**---------------------------- */
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #38444d;
  border-radius: 10px;
}

li {
  float: left;
}

li a,
.dropbtn {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover,
.dropdown:hover .dropbtn {
  background-color: red;
}

li.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
