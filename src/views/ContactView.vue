<template>
  <div>
    <main>
      <div class="grid-container">
        <div>
        </div>

        <h2 style="text-align: center">Contact Us</h2>

        <div class="card">
          <img src="https://cdn-icons-png.flaticon.com/512/1488/1488581.png" alt="John" style="width:100%">
          <h1>Kornpituk Kannika</h1>
          <p class="title">Fontend</p>
          <p>RMUTL</p>
          <p><button>Contact</button></p>
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
  max-width: 300px;
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
