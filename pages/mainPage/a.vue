<template>
	<view>
		<!-- 头部小图标 -->
		<view style="width:750rpx;height: 100rpx;margin:10px;">
			<view class="content-title">
				<image src="../../static/daohang/井号.png" mode="" style="width: 20px;height: 38rpx;margin-right: 3px;"></image>
				<text>随便说说</text>
			</view>
		</view>
		<!-- 用户信息，及内容 -->
		<view style="margin: 10px;background-color: #EEEEEE;height: 700rpx;">
			<view style="display: flex;">
				<view class="main-img">
					<image src="../../static/lunbotu/1.jpg" mode="" style="border-radius: 50%;width: 100%;height: 100%;"></image>
				</view>
				<view style="display: flex;flex-direction:column">
					<text style="font-size: 20px;">zbjbbbd</text>
					<text style="font-size: 15px;color: #C5C5C5;">10-24 14:11</text>
				</view>
			</view>
			<view class="">
				<view>
					<text>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
					aaaaaaaaaaaaaa
					aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</text>
					<view>
						<view v-for="(item,index) in imgList" :key="index" :index="index">
							<image :src="item" mode="" style="width: 200rpx;height: 180rpx;margin-right: 10rpx;" @click="TanPreviewImage(index)"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phones:[],
				imgList:[
					'../../static/lunbotu/1.jpg',
					'../../static/lunbotu/2.jpg',
					'../../static/lunbotu/3.jpg',
					'../../static/lunbotu/4.jpg',
					'../../static/lunbotu/5.jpg',
				]
			}
		},
		methods:{
			TanPreviewImage(indexa){
				console.log(indexa)
				uni.previewImage({
					current:indexa,
					urls:this.imgList,	
			})
		}
	},
}
</script>

<style scoped>
	.content-title {
		height: 100%;
		border: 1px solid #E4E7ED;
		border-radius: 30px 30px 30px 0;
		background-color: #E4E7ED;
		/* margin-bottom: 10px; */
		/* display: inline; */
		display: flex;
		display: inline-block;
		display: inline;
		zoom: 1;
	}

	.main-img {
		width: 80rpx;
		height: 80rpx;
		border: 1px solid #fff;
		border-radius: 50%;
	}
</style>
