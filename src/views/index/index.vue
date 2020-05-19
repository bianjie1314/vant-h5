<template>
  <div class="index">
        <van-nav-bar
                :fixed='true'
                title="创客优创"
            />
        <van-swipe class="index-swipe"  :autoplay="3000" :duration='100' indicator-color='#39A9ED'>
            <van-swipe-item v-for="img in SwipeImage" :key="img">
                <img :src="img" >
            </van-swipe-item>
        </van-swipe>
        <van-grid :border="false" :column-num="4">
          <van-grid-item @click="goNumberList('BBBB')">
            <van-image 
              width="50"
              height="50"
              src="http://read.image.ms170.cn:8060/201908/AAAc8a62c1329374084b3539f7a265a6c32.png" />
              <span class="iconLabel">同心靓号</span>
          </van-grid-item>
          <van-grid-item @click="goNumberList('WAAWAA')"> 
            <van-image 
              width="50"
              height="50"
              src="http://read.image.ms170.cn:8060/201908/ABCDe76264b877904cabb85e0d52292193f6.png" />
              <span class="iconLabel">顺子靓号</span>
          </van-grid-item>
          <van-grid-item @click="goNumberList('AAAA')">
            <van-image 
              width="50"
              height="50"
              src="http://read.image.ms170.cn:8060/201908/ANY363637818a1b450ba361539f09cf5e04.png" />
              <span class="iconLabel">更多靓号</span>
          </van-grid-item>
          <van-grid-item @click="goFiance()">
            <van-image 
              width="50"
              height="50"
              src="http://read.image.ms170.cn:8060/201908/PHONE178604925c1b417dbd94964f254b2fcc.png" />
              <span class="iconLabel">金融业务</span>
          </van-grid-item>
        </van-grid>
        <van-dropdown-menu>
          <van-dropdown-item 
            v-model="search.levelRegex" 
            :options="searchOption[0]"
            @change='dropdownChange' />
          <van-dropdown-item 
            v-model="search.providerCode" 
            :options="searchOption[1]"
            @change='dropdownChange' />
          <van-dropdown-item
            class="index-orderOption"
            ref="orderOption"
            v-model="search.money"
            :options="searchOption[2]"
            @change='dropdownChange' >
          </van-dropdown-item>
        </van-dropdown-menu>
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="亲,人家也是有底线的..."
            error-text="请求失败，点击重新加载"
            :error.sync="loadError"
            @load="onLoad"
            >
            <van-cell  v-for="(item,index) in numberList"
                :key="item.index"
                size='large'
                :title="item.phoneNumber"
                :label="item.provinceName+','+item.cityName"
                @click='goChoicePackage(index)'>
                <div>含话费<span style="color:red">{{item.prostoreMoney}}</span> 元</div>
                <div>{{item.mno}}</div>
            </van-cell>
        </van-list>
  </div>
</template>

<script>
  import {setAesString} from "../../config/date";

export default {
  name: 'index',
  data(){
      return{
        search:{
          preDepositBeg:"",
          preDepositEnd:"",
          levelRegex:'all',
          providerCode:'all',
          money:0
        },
        searchOption:[                
          [
            { text: '全部等级', value: 'all' },
          ],
          [
            { text: '全部提供商', value: 'all' },
            { text: '联通', value: 'CUC' },
            { text: '电信', value: 'CTC' }
          ],
          [
            { text: '筛选', value: 0 },
            { text: '按保底消费降序', value: 1 },
            { text: '按保底消费升序', value: 2 },
            { text: '按预存金额降序', value: 3 },
            { text: '按预存金额升序', value: 4 }
          ]
        ],
        numberList: [{phoneNumber:'111',provinceName:'11',cityName:'aa',mno:'aa'}],
        loading: false,
        loadError:false,
        finished: false,
        SwipeImage:['http://www.ms170.cn/fileupload?path=4e00e97b-9283-4e9b-9e34-4c63bchicenumber'],
        page: {
          pageNum: 1,
          pageSize: 20,
          total: 0,
          paging: "1",
        }
      }
  },
  created(){
    //查询号码等级
    // this.queryNumberLevelRegex();
    //清楚历史缓存
    sessionStorage.clear();
  },
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        this.queryNumberList(false);       
        this.page.pageNum = this.page.pageNum + 1;
      }, 500);
    },
    orderOptionConfirm() {
      // this.$refs.orderOption.toggle();
      this.queryNumberList(true);
    },
    goChoicePackage(index){//套餐包选择
      var numberObj = this.numberList[index];
      sessionStorage.setItem(setAesString("numberObj"),setAesString(JSON.stringify(numberObj)));
      this.$router.push({
        path:"/packageChoice"
      });
    },
    goFiance(){
      window.location.href='http://www.ms170.cn/active/agentFianceChoice/TnpZME5BPT0mTURFek56TTM=';
    },
    dropdownChange(){
      //搜索条件该表
      this.page.pageNum = 1;
      this.queryNumberList(true);
    },
    goNumberList(type){
      //指定号码类型的
      if(type=='myOrder'){
        this.$router.push({
          path:"/orderList"
        });
      }else{
        this.$router.push({
          path:"/numberList"
        });
      }
      
    },
    queryNumberLevelRegex(){
        //查询号码等级
        var formdata={
            service : "user.qryAcNumberLevelRegex",
        }
        this.$api.post("/mstx/pr/gateway.do", formdata,(res)=>{
            if(res != null && res.length > 0){
                for(var i = 0; i < res.length; i++){
                    this.searchOption[0].push({
                        text:res[i],
                        value:res[i]
                    });
                }
            }
        },(res)=>{
            this.$toast.fail(res.errorMsg);

        });
    },
    queryNumberList(reset){
      if(reset){
        this.numberList=[];
      }

      var formdata={
        ...this.page,
      }

      if(this.search.levelRegex != 'all'){
        formdata.levelRegex = this.search.levelRegex;
      }
      if(this.search.providerCode != 'all'){
        formdata.providerCode = this.search.providerCode;
      }

      if(this.search.money == 1){
        formdata.orderByBaseAmount = '0';//保底
      }else if(this.search.money == 2){
        formdata.orderByBaseAmount = '1';
      }else if(this.search.money == 3){
        formdata.orderByPreDeposit = '1';//预付
      }else if(this.search.money == 4){
        formdata.orderByPreDeposit = '0';
      }

      this.$api.post("/phoneInfo/list", formdata,(res)=>{
        this.loadError = false;
        // 加载状态结束
        this.loading = false;
        if(res != null && res.length>0){
          for(var i = 0; i < res.length; i++){
            this.numberList.push(res[i]);
          }
          if(res.length < this.page.pageSize){
            this.finished = true;
            this.page.pageNum = 1;
          }
        }else{
          this.page.pageNum = 1;
          this.finished = true;
        }
      },(res)=>{
        this.$toast.fail(res.errorMsg);
        this.page.pageNum =  this.page.pageNum - 1;
        this.loading = false;
        this.finished = false;
        this.loadError = true;
      });
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
