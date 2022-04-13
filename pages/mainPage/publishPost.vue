<template>
	<view>
		<!-- 头部小图标 -->
		<view style="width:750rpx;height: 100rpx;margin:10px;">
			<view class="content-title">
				<image src="../../static/daohang/井号.png" mode="" style="width: 20px;height: 38rpx;margin-right: 3px;"></image>
				<text>随便说说</text>
			</view>
		</view>
		<!-- 文本框 -->
		<view style="height: 350rpx;width: 750rpx;background-color: #F5F5F5;margin-bottom: 30px;word-break:break-all">
			<textarea v-model="a.content" placeholder="我想说的是...." >
			</textarea>
		</view>
		<uni-file-picker
			v-model="a.imglist" 
			fileMediatype="image" 
			mode="grid" 
			@select="select" 
			@progress="progress" 
			@success="success" 
			@fail="fail"
			:auto-upload="false">
			<!-- <image src="../../static/daohang/照相机1.png" mode="" style="width: 100%;height: 100%;"></image> -->
		</uni-file-picker>
		<view style="margin-top: 30px;">
			<button type="default" style="background-color: #2979FF;width: 500rpx;" @click="run">提交按钮</button>
		</view>
	</view>
</template>

<script>
		export default {
			data() {
				return {
					a:{
						imglist:[],
						username:this.$store.state.username,
						userimg:this.$store.state.userimg,
					}
				}
			},
			methods:{
				run(){
					var that = this;
					uni.showModal({
						content: '是否发布',
						success:function (res) {
							if(res.confirm) {
								that.$store.commit('chageTz',that.a);
								console.log(that.a);
								that.article = '';
								uni.navigateBack({
									
								})
							}
						}
					});
				},
				// 获取上传状态
				select(e){
					console.log('选择文件：',e);
					this.a.imglist[this.a.imglist.length] = (e.tempFilePaths);
					
				},
				// 获取上传进度
				progress(e){
					console.log('上传进度：',e)
				},
				
				// 上传成功
				success(e){
					console.log('上传成功')
				},
				
				// 上传失败
				fail(e){
					console.log('上传失败：',e)
				}
			}
		}
	</script>

<style>
</style>
