<template lang="javascript">
  <div id="header">
    <div>
      Home
    </div>
    <div id="search">
      <input type="text" placeholder="Search" v-model="search">
    </div>
    <div>
      <ul id="nav">
        <li>Home</li>
        <li>Author</li>
      </ul>
    </div>
  </div>
  <div id="head-section">

  </div>
  <div id="content">
    <div id="last-card"></div>
    <div id="cards">
      <div id="left-card">1</div>
      <div id="center-card">2</div>
      <div id="right-card">3</div>
    </div>

  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="css" scoped>
  #header {
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

  }

  #nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #nav>li {
    list-style: none;
    padding: 10px;
  }

  #head-section {
    height: 300px;
    background-color: #f5f5f5;
  }

  #content {
    width: 966px;
    margin: 24px auto;
  }
  #last-card {
    
    height: 243px;
    background-color: #f5f5f5;
  }
  #cards {
    display: flex;
    height: 200px;
    justify-content: space-between;
    align-items: center;
  }
  #cards>div {
    height: 100%;
    width: 100%;
    margin: 10px;
    background-color: red;
  }
</style>


<!-- <template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template> -->

<!-- //  <script>
 // @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// export default {
//   name: "Home",
//   components: {
//     HelloWorld,
//   },
// };
// </script> -->