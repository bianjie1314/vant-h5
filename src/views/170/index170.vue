<template>
  <div class="index">
    <van-nav-bar
            :fixed='true'
            title="民生通讯-170自助"
        />
    <van-swipe class="index-swipe"  :autoplay="3000" :duration='100' indicator-color='#39A9ED'>
        <van-swipe-item v-for="img in SwipeImage" :key="img">
            <img :src="img" >
        </van-swipe-item>
    </van-swipe>
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="(item,index) in menuList" v-bind:key="index" @click="goTargetUrl(item.targetUrl)">
        <van-image 
          width="50"
          height="50"
          :src="item.icon" />
          <span class="iconLabel">{{item.text}}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>


export default {
  name: 'index',
  data(){
      return{
        menuList:[
          {icon:'http://read.image.ms170.cn:8060/201908/PHONE178604925c1b417dbd94964f254b2fcc.png',text:'话费充值',targetUrl:'http://charge.ms170.cn/wt/charge/toNewCharge'},
          {icon:'http://read.image.ms170.cn:8060/201911/F717b0a844b804a25bf4471ddd8ea45b7.jpg',text:'余额查询',targetUrl:'http://charge.ms170.cn/wt/bill/newYuECheckLogin'},
          {icon:'http://read.image.ms170.cn:8060/201911/F5d5d06ab8ea24bb98b4a17bf1d5b8aca.jpg',text:'余量查询',targetUrl:'http://charge.ms170.cn/wt/bill/yuLiangCheckLogin'},
          {icon:'http://read.image.ms170.cn:8060/201911/Fd97c855882f7449c890d880dbbca1783.jpg',text:'套餐产品变更',targetUrl:'http://charge.ms170.cn/wt/package/changePackageCheckLogin'},
          {icon:'http://read.image.ms170.cn:8060/201908/ANY363637818a1b450ba361539f09cf5e04.png',text:'号码激活',targetUrl:'http://www.ms170.cn/active/choicePage'},
          // {icon:'http://read.image.ms170.cn:8060/201908/ANY363637818a1b450ba361539f09cf5e04.png',text:'号码激活',targetUrl:'https://smz.cmcc-cs.cn:30026/edcreg-web/videorealname/realnameActive/realNameActivateM.html'},
          {icon:'http://read.image.ms170.cn:8060/201911/F15b7949161a14da8acd78c5c0b943ccf.jpg',text:'承诺书下载',targetUrl:'http://www.ms170.cn/fileupload?path=b321de3bdc299ec807e9f795d7d9deeb'}
        ],
        //
        SwipeImage:['https://img.yzcdn.cn/vant/apple-1.jpg','http://read.image.ms170.cn:8060/201911/F2dd1eefadc614443ab37958c8e8b27a1.jpg'],
      }
  },
  methods: {
    goTargetUrl(url){
      window.location.href=url;
    }
  }
}
</script>

<style lang="less">
.index {
  padding-bottom: 50px;
  &-orderOption{
    &-content{
      margin: 10px;
      display:flex;
      font-size: 14px;
      &-title{
        float:left;
        margin:0px 5px;
        color: rgb(119, 118, 118);
      }
    }
    
  }
 

  &-swipe {
    margin-top: 47px;
    img {
      width: 100%;
      display: block;
      height: 200px;
    }
  }

  &-title {
    font-size: 16px;
  }

  &-price {
    color: #f44;
  }

  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }

  &-cell-group {
    margin: 15px 0;

    .van-cell__value {
      color: #999;
    }
  }

  &-tag {
    margin-left: 5px;
  }
}

.iconLabel{
  font-size: 12px;
  color: #999;
  margin: 5px 0px;
}

</style>
