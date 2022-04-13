<template>
	<view>
		<!-- 头部轮播图 -->
		<view class="page-section swiper">
			<view>
				<swiper :indicator-dots="indicatorDots" :indicator-color="indicatorColor"
					:indicator-active-color="indicatorActiveColor" :autoplay="autoplay" :interval="interval"
					:duration="duration">
					<swiper-item v-for="(item,index) in img" :key="index">
						<view>
							<image :src="item" mode=""></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<!-- 导航栏 -->
		<view class="navigator">
			<view v-for="(item,index) in label" :key="index">
				<view class="content-img" @click="lableClick(index)">
					<image class="uploading" :src="item.icon" mode="widthFix" style="width: 60rpx;height: 60rpx;">
					</image>
					<text>{{item.title}}</text>
				</view>
			</view>
		</view>
		<!-- 内容 -->
		<view class="content">
			<Tiezi></Tiezi>
		</view>
		<view>
			<uni-fab 
			:pattern="pattern"
			horizontal="right"
			vertical="bottom"
			:popMenu="false"
			@fabClick="publishpost"
			 />
		</view>
		
	</view>
</template>

<script>
	import Tiezi from './Tiezi.vue'
	export default {
		components: {
			Tiezi
		},
		onLoad() {

		},
		data() {
			return {
				pattern:{
					color: 'gray',
					backgroundColor: '#FFFFFF',
					selectedColor: '#007AFF',
					buttonColor:'skyblue'
				},
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 500,
				indicatorColor: "#292b40",
				indicatorActiveColor: "#ffffff",
				img: [
					'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA9772bf9f871e16ad4d035b0cb20a4b7c.jpg',
					'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA36d1ef744e6220d77c9e97d36e796aec.jpg',
					'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA9772bf9f871e16ad4d035b0cb20a4b7c.jpg'
				],
				//导航栏数组
				label: [{
						title: '总排行榜',
						icon: '../../static/daohang/排行榜.png'
					},
					{
						title: '实战测评',
						icon: '../../static/daohang/篮球.png'
					},
					{
						title: '球鞋对比',
						icon: '../../static/daohang/对比.png'
					},
					{
						title: '热门球鞋',
						icon: '../../static/daohang/鞋子.png'
					}
				]

			}
		},
		methods: {
			publishpost(e) {
				if(!this.$store.state.judgedeng) {
					uni.showModal({
						content:'用户还未登录，无法进行发帖功能',
						showCancel:false
					})
				}
				else {
					uni.showModal({
						content:'分享内容',
						success(res) {
							if (res.confirm) {
								uni.navigateTo({
									url: './publishPost'
								});
								
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					})
				}
				
			},
			lableClick(index) {
				// console.log(index)
				if (index === 0) {
					uni.navigateTo({
						url: './rankingList'
					})
				} else if (index === 1) {
					uni.navigateTo({
						url: './evaluation'
					})
				} else if (index === 2) {
					uni.switchTab({
						url: '../recovery/index'
					})
				} else if (index === 3) {
					uni.navigateTo({
						url: './hotShoes'
					})
				}
			}
		}
	}
</script>

<style scoped>
	swiper {
		width: 750rpx;
		height: 422rpx;
	}

	swiper-item {
		width: 750rpx;
		height: 422rpx !important;
	}

	swiper swiper-item image {
		display: block;
		width: 750rpx;
		height: 422rpx !important;
	}

	.navigator {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
	}

	.content-img {
		margin: 6px;
		position: relative;
		text-align: center;
	}

	.content-img text {
		padding-top: 20rpx;
		font-size: 30rpx;
		font-weight: bold;
	}

	.uploading {
		display: block;
		margin: 0 auto;
	}

	.content {
		background-color: #DCDFE6;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
	}
</style>
