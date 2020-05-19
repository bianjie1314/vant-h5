<template>
  <div class="home">
    <router-view class='home-router'/>
    <!-- <Footer/> -->
  </div>
</template>

<script>
// import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  // components: {
  //     Footer
  // },
  methods: {
    onClickBack() {
      this.$router.back(-1);//返回上一层
    }
   }
}
</script>
<style scoped>
/* .home-router{
  margin-bottom: 3.4rem;
} */


.van-nav-bar{
  background-color: #20A0FF;
}

.van-nav-bar .van-icon {
  color: white;
}
.van-nav-bar__title{
  color: white;
}
</style>