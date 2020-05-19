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
            <van-dropdown-item v-model="search.levelRegex" :options="searchOption[0]" @change='dropdownChange' />
            <van-dropdown-item v-model="search.providerCode" :options="searchOption[1]" @change='dropdownChange' />
            <van-dropdown-item v-model="search.money" :options="searchOption[2]" @change='dropdownChange' />
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
                :title="item.serialNumber"
                :label="'月底保底消费'+ (item.baseAmount!=null && item.baseAmount != ''?item.baseAmount/100:0) + '元'"
                :value="'预存 '+item.preDeposit/100+' 元'"
                @click='goChoicePackage(index)'
                is-link>
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
                    { text: '全部等级', value: 'all' },
                    // { text: '砖石', value: '砖石' },
                    // { text: 'AAAA', value: 'AAAA' },
                    // { text: 'ABCD', value: 'ABCD' }
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
            //套餐包选择
            var numberObj = this.numberList[index];
            sessionStorage.setItem(setAesString("numberObj"),setAesString(JSON.stringify(numberObj)));
            //TODO 
            this.$router.push({
                path:"/packageChoice"
            });
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
                this.page.pageNum = 1;
            }

            var formdata={
                ...this.page,
                service : "user.qryChoiceNumber",
            }

            if(this.search.locationArr != null && this.search.locationArr[1] != null){
                formdata.provinceCode = '8'+this.search.locationArr[0].code;
                formdata.regionCode = '8'+this.search.locationArr[1].code;
            }

            if(this.search.inputValue != ''){
                formdata.serialNumber = this.search.inputValue;
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

            this.$api.post("/mstx/pr/gateway.do", formdata,(res)=>{
                this.loadError = false;
                // 加载状态结束
                this.loading = false;
                if(res != null && res.list.length>0){
                for(var i = 0; i < res.list.length; i++){
                    this.numberList.push(res.list[i]);
                }
                if(res.list.length < this.page.pageSize){
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

</style>
