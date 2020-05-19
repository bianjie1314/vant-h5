<template>
    <div class="photo">
        <div v-if="resultImage != null"   class="uploader_box"  :width="picWidth" :height="picHeight">
            <img class='camera-icon' :src='resultImage' :width="picWidth" :height="picHeight" @click="showPreviewClick"/>
            <van-icon name="delete" @click="removeUpload"/>
        </div>
        <div v-else class="uploader_box"  :width="picWidth" :height="picHeight">
            <input type="file" accept="image/*"  multiple id="logimg" :value='imgValue' @change="readFile($event,$refs.choice)" ref='choice' />
            <img class='camera-icon' :width="picWidth" :height="picHeight"   :src="picOver" />
        </div>
        <van-image-preview
            v-model="showPreview"
            :images="resultImageArr"
            :showIndex=false
        />
        <van-popup v-model="showLoading" style="background-color:#4C4C4C;" :lazy-render=false :close-on-click-overlay=false >
            <van-loading size="24px" vertical>{{loadingText}}</van-loading>
        </van-popup>
  </div>
</template>

<script>

export default {
    name: 'PictureCamera',
    props: {
        uploadImagePath:String,
        readImagePath:String,
        desc:String,
        picOver:String,
        resultImage:String,
        picWidth:String,
        picHeight:String,
        imageInfoObj:Object,
        isAnalyze:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            showLoading:false,
            loadingText:'图片上传中,请稍等...',
            resultImageArr:[],
            showPreview:false,
            imgValue:''
        }
    },
    methods: {
        //上传文件
        readFile(event,dom){
            this.files = dom.files;
            for (var index = 0; index <this.files.length; index++){
                var file = this.files[index]; //获取file对象
                //判断file的类型是不是图片类型。
                if(!/image\/\w+/.test(file.type)){ 
                    _this.$toast({
                            message: '文件必须为图片！!',
                            icon: 'success'
                        });
                    return false; 
                }
            }
            this.showLoading = true;
            if(this.files.length > 0){
                var fi = this.files[0];
                var reader = new FileReader(); //声明一个FileReader实例
                reader.readAsDataURL(fi); //调用readAsDataURL方法来读取选中的图像文件
                //最后在onload事件中，获取到成功读取的文件内容，并以插入一个img节点的方式显示选中的图片
                var _this = this;
                reader.onload = function(){
                    let formdata = new FormData();
                    formdata.append("desc", _this.desc);
                    formdata.append("photo", fi); //加入文件对象   file为传递给后台的参数，可以模仿form中input的name值。
                    formdata.append("needWaterMark",true);
                    formdata.append("isImage",true);
                    formdata.append("channel",'weixin');
                    if(_this.isAnalyze){
                        formdata.append("isAnalyze",true);
                    }
                    _this.$api.uploadFileForm(_this.uploadImagePath, formdata, (res) => {
                        _this.showLoading = false;
                        _this.$toast({
                            message: '图片上传成功!',
                            icon: 'success'
                        });
                        if(_this.isAnalyze){
                            //需要解析
                            _this.$emit('update:resultImage', _this.readImagePath+res.imagePath);
                            _this.$emit('update:imageInfoObj', res);
                        }else{
                            _this.$emit('update:resultImage', _this.readImagePath+res);
                        }
                        // if(_this.isAnalyze){
                        //     //需要解析
                        //     _this.$emit('update:resultImage', _this.$api.readImagePath+"?path="+res.imagePath);
                        //     _this.$emit('update:imageInfoObj', res);
                        // }else{
                        //     _this.$emit('update:resultImage', _this.$api.readImagePath+"?path="+res);
                        // }
                    },(res)=>{
                        _this.showLoading = false;
                        _this.$dialog.alert({
                            message: "图片上传失败!"+res.errorMsg
                        }).then(() => {
                            _this.removeUpload();
                        });
                    },()=>{
                        _this.showLoading = false;
                        _this.$dialog.alert({
                            message: "服务链接异常,图片上传失败!"
                        }).then(() => {
                            _this.removeUpload();
                        });
                    });
                }
            }
           // this.$emit('readFile',event);
        },
        removeUpload(){
            //重新上传
            this.imgValue = '';
            this.$emit('update:resultImage',null);
        },
        showPreviewClick(){
            this.showPreview = true;
            this.resultImageArr = [];
            this.resultImageArr.push(this.resultImage);
        }
    }
}
</script>

<style lang="less">
.photo{
    text-align: center;
}
.uploader_box{
        overflow: hidden;
        position: relative;
    }
 #logimg{
        position: absolute;
        top:0;
        left:10%;
        height:100%;
        width: 80%;
        opacity:0;
    }
 .camera-icon{
        width:80%;
    }
</style>
