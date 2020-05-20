<template>
    <div class="index">
        <van-nav-bar
                title="更多号码信息"
                left-arrow
                @click-left="onClickBack"
            />
        <van-search
            v-model="search.inputValue"
            placeholder="生日、幸运数字"
            show-action
            shape="round"
            @search="queryNumberList(true)"
            >
            <div slot="action" style="color:#25C973;" @click="queryNumberList(true)">搜索</div>
        </van-search>
        <van-dropdown-menu>
            <van-dropdown-item :title="search.locationText"  ref="addressRef">
                <van-area :area-list="areaList" :columns-num="2" @confirm='confirmChoiceAddress' @cancel="cancelChoiceAddress"/>
            </van-dropdown-item>
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
    import AreaList from '../../common/area';
    import {setAesString} from "../../config/date";

export default {
    name: 'Index',
    data(){
        return{
            areaList:AreaList,
            search:{
                levelRegex:'all',
                providerCode:'all',
                locationArr:[],
                locationText:'全国',
                money:0,
                inputValue:''
            },
            searchOption:[
                [
                    { text: '全部等级', value: 'all' }
                ],
                [
                    { text: '全部提供商', value: 'all' },
                    { text: '联通', value: 3 },
                    { text: '电信', value: 4 }
                ],
                [
                    { text: '筛选', value: 0 },
                    { text: '内含话费降序', value: 1 },
                    { text: '内含话费升序', value: 2 }
                ]
            ],
            numberList: [],
            loading: false,
            loadError:false,
            finished: false,
            page: {
                pageNum: 1,
                pageSize: 20,
                total: 0,
                paging: "1"
            }
        }
    },
    created(){
        //新增全国选项
        this.areaList.province_list[100000]='全国';
        //加载号码等级
        this.queryNumberLevelRegex();
    },
    methods: {
        onClickBack() {
            this.$router.back(-1);//返回上一层
        },
        onLoad() {
            // 异步更新数据
            setTimeout(() => {
                this.queryNumberList(false);       
                this.page.pageNum = this.page.pageNum + 1;
            }, 500);
        },
        dropdownChange(){
            //搜索条件该表
            this.queryNumberList(true);
        },
        goChoicePackage(index){
           
        },
        confirmChoiceAddress(obj){
            //确认地址选择，code 代表被选中的地区编码， name 代表被选中的地区名称
            this.$refs.addressRef.toggle();
            if(obj[1] == null){
                // 全国
                this.search.locationText = "全国";
            }else{
                this.search.locationText = obj[1].name;
            }
            this.search.locationArr = obj;
            this.queryNumberList(true);
        },
        cancelChoiceAddress(){
            //取消地址选择
            this.$refs.addressRef.toggle();
        },
        queryNumberLevelRegex(){
            //查询号码等级
            var formdata={
                
            }
            this.$api.post("/dataDictionary/byPCode/RANK_LEVEL", formdata,(res)=>{
                if(res != null && res.length > 0){
                    for(var i = 0; i < res.length; i++){
                        this.searchOption[0].push({
                            text:res[i].name,
                            value:res[i].v1
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
                param:{}
            }

            if(this.search.inputValue != ''){
                formdata.param.phoneNumber = this.search.inputValue;
            }

            if(this.search.levelRegex != 'all'){
                formdata.param.rank = this.search.levelRegex;
            }
            if(this.search.providerCode != 'all'){
                formdata.param.mno = this.search.providerCode;
            }

            if(this.search.money == 1){
                formdata.param.bossPrestoreDesc = true;
            }else if(this.search.money == 2){
                formdata.param.bossPrestoreAsc = true;
            }

            if(this.search.locationArr != null && this.search.locationArr[1] != null){
                formdata.param.provinceId= this.search.locationArr[0].code;
                formdata.param.cityId = this.search.locationArr[1].code;
            }

            this.$api.post("/phoneInfo/list", formdata,(res)=>{
                this.loadError = false;
                // 加载状态结束
                this.loading = false;
                if(res != null && res.content.length>0){
                for(var i = 0; i < res.content.length; i++){
                    this.numberList.push(res.content[i]);
                }
                if(res.content.length < this.page.pageSize){
                    this.finished = true;
                    this.page.currentPage = 1;
                }
                }else{
                    this.page.currentPage = 1;
                    this.finished = true;
                }
            },(res)=>{
                this.$toast.fail(res.errorMsg);
                this.page.currentPage =  this.page.currentPage - 1;
                this.loading = false;
                this.finished = false;
                this.loadError = true;
            });
        }
    }
}
</script>

<style lang="less">

</style>
