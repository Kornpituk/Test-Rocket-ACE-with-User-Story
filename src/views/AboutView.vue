<template>
  <div>
    <main>
      <div class="grid-container">

        <h2 style="text-align: center">About Us</h2>

        <div class="card">
          <img src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/radarsemarang/2022/08/progra.jpg" alt="John" style="width:100%">
          <h1>Interview coding challeng</h1>
          <p class="title">user story rocket</p>
          <p>Space X</p>
          <p><button>About Us</button></p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* รายละเอียดสไตล์ของหน้า About ของคุณ */
/* เหมือนกับข้อความก่อนหน้า */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover, a:hover {
  opacity: 0.7;
}
</style>
