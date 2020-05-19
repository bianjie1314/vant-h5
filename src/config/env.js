/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

let CODE_IV = "ABCDEF0123456789";
let CODE_KEY = "ABCDEf1234567890ABCDEF1234567890";
let baseUrl;
let uploadNetWorkFileBaseUrl;//上传
let readNetWorkImagePath;
let locationUrl;//项目部署url
let uploadBossFileBaseUrl;//上传到boss
let readBossImagePath;//boss图片


//环境判断,设置对应的服务器地址bianjie.51vip.biz:19311
if(process.env.NODE_ENV =='production'){//生产
	baseUrl = 'http://api.ms170.cn:6060';
	locationUrl = 'http://www.ms170.cn/choiceNumber';
	uploadNetWorkFileBaseUrl = 'http://www.ms170.cn/uploadFile';
	readNetWorkImagePath = 'http://www.ms170.cn/fileupload?path='

	uploadBossFileBaseUrl = 'http://www.ms170.cn/uploadFileToBoss';
	readBossImagePath = 'http://read.image.ms170.cn:8060/'

}else{//测试
	baseUrl = 'http://localhost:9091';

	uploadNetWorkFileBaseUrl = 'http://www.ms170.cn/uploadFile';
	readNetWorkImagePath = 'http://www.ms170.cn/fileupload?path='
	// locationUrl = 'http:localhost:8080';

	uploadBossFileBaseUrl = 'http://www.ms170.cn/uploadFileToBoss';
	readBossImagePath = 'http://read.image.ms170.cn:8060/'
}
export {
	baseUrl,
	uploadNetWorkFileBaseUrl,
	readNetWorkImagePath,
	locationUrl,
	uploadBossFileBaseUrl,
	readBossImagePath,
	CODE_IV,
	CODE_KEY
}
