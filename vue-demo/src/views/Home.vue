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
        <li>Timer</li>
      </ul>
    </div>
  </div>
  <div id="head-section">

  </div>
  <div id="content">
    <div id="last-card"></div>
    <div id="cards">
      <div id="left-card"></div>
      <div id="center-card"></div>
      <div id="right-card"></div>
    </div>
    <div id="highlight-section"></div>
  </div>
  <div id="footer"></div>
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
    margin: 0px 0px 24px 0px;
    background-color: #f5f5f5;
  }

  #nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #nav>li {
    list-style: none;
    padding-right: 10px;
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
    box-shadow: var(--el-box-shadow-base);
    border: 1px solid var(--el-border-color-base);
    border-radius: var(--el-border-radius-base);
  }
  #cards {
    display: flex;
    margin: 24px 0px;
    height: 200px;
    justify-content: space-around;
    align-items: stretch;
  }
  #cards>div {
    flex: 1;
    
    margin-right: 16px;
    background-color: #f5f5f5;
    box-shadow: var(--el-box-shadow-base);
  }
  
  #cards div:last-of-type  {
    margin-right: 0;    
  }
  #highlight-section {
    height: 500px;
    background-color: #f5f5f5;
    border-radius: var(--el-border-radius-base);
  }
  #footer {
    margin: 24px 0 0 0 ;
    height: 100px;
    background-color: #f5f5f5;
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