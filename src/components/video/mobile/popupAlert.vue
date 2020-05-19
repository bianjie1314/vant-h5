<template>
    <div class="face-mobile-popuperror">
        <div class="face-mobile-popuperror-mask"></div>
        <div class="face-mobile-popuperror-box">
            <div class="face-mobile-popuperror-box-title">友情提示</div>
            <div class="face-mobile-popuperror-box-img" v-if="showPopupImg"><img :src='showPopupImg' /></div>
            <div class="face-mobile-popuperror-box-text" v-if="showPopupLable">{{showPopupLable}}</div>
            <div class="face-mobile-popuperror-box-btn"
                @click="closePop">知道了</div>
        </div>
    </div>
</template>

<script>
/**
 * 人脸活体检测h5 demo容器组件
 * 
 */
export default {
    props: {
        showPopup: Boolean,
        showPopupLable:String,
        showPopupImg:String
    },
    methods: {
        closePop() {
            this.$emit('update:showPopup', false);
            this.$emit('update:showPopupLable', '');
            this.$emit('update:showPopupImg', '');
        }
    }
};
</script>
<style lang="less">
    .face-mobile-popuperror {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        
        background: rgba(0, 0, 0, .45);
        z-index: 10;
        height: 100%;


        .face-mobile-popuperror-mask {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0.45;
            z-index: 1;
            width: 100%;
            height: 100%;
        }

        .face-mobile-popuperror-box {
            box-shadow: 0px 0px 12px #58727c;
            position: fixed;
            z-index: 2;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 21.083rem;
            background-color: rgb(241, 235, 235);
        }

        .face-mobile-popuperror-box-title{
            width: 100%;
            height: 2rem;
            font-size: 1.2rem;
            padding: 0.5rem 0;
            color: rgb(83, 86, 87);
            border-bottom: 0.01rem solid #05CBD8;
        }

        .face-mobile-popuperror-box-text {
            padding: 1rem 0rem;
            text-align: center;
            font-size: 1.2rem;
            color: #05CBD8;
        }

        .face-mobile-popuperror-box-img {
            img{
                margin-top: 1rem;
                width: 15rem;
                height: 10rem;
            }
        }

        .face-mobile-popuperror-box-btn {
            margin: 1rem 0rem 0rem 0rem;
            height: 3rem;
            line-height: 3rem;
            text-align: center;
            background: #05CBD8;
            color: #fff;
            display: block;
            width: 100%;
            font-size: 16px;
        }
    }

</style>