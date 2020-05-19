<template>
        <van-tabbar 
        route
        v-model="active"
        active-color="#07c160"
        inactive-color="#000">
            <van-tabbar-item v-for="(item,index) in tabList" :name='item.name' :icon="item.icon" :to='item.to' :key="index" replace >
                {{item.title}}
            </van-tabbar-item>
        </van-tabbar>
</template>

<script>
// import { Tabbar, TabbarItem } from 'vant';


export default {
    name : "Footer",
    // components: {
    //     [Tabbar.name]: Tabbar,
    //     [TabbarItem.name]: TabbarItem
    // },
    data(){
        return {
            active:'home',
            tabList:[
                {name: 'needPayInfo',icon:'home-o',title:'支付',info:'',to:'/needPayInfo'},
                {name:"home",icon:'home-o',title:'选号',info:'',to:'/index'},
                {name:"orderInfo",icon:'search',title:'订单',info:'',to:'/orderInfo'}
            ]
        }
    }
    
}
</script>
<style >
.tab{
    height: 120px;
}
.van-tabbar{
    height:3.33333rem
}
</style>
