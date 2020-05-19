<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  background-color: #F2F2F2;
  font-weight:600;
  height: 100%;
  /* margin-top: 60px; */
}
body{
  background: #F2F2F2 !important;
}
.van-nav-bar{
  background-color: #20A0FF !important;
}

.van-nav-bar .van-icon {
  color: white !important;
}
.van-nav-bar__title{
  color: white !important;
}
.van-icon{
    color:#25C973 !important; 
}
</style>
