<template>
	<view class="mainPage">
		<!-- 头部轮播图 -->
		<view class="page-section">
			<swiper :indicator-dots="indicatorDots" :indicator-color="indicatorColor"
					:indicator-active-color="indicatorActiveColor" :autoplay="autoplay" :interval="interval"
					:duration="duration">
					<swiper-item v-for="(item,index) in img" :key="index">
							<image :src="item" mode=""></image>
					</swiper-item>
				</swiper>

		</view>
		<!-- 导航栏 -->
		<view class="navigator">
			<view v-for="(item,index) in label" :key="index">
				<view class="content-img" @click="lableClick(index)">
					<image class="uploading" mode="widthFix" :src="item.icon" style="width: 100rpx;height: 60rpx;ma">
					</image>
					{{item.title}}
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
					buttonColor:'#1296db'
				},
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 500,
				indicatorColor: "#292b40",
				indicatorActiveColor: "#ffffff",
				img: [
					'https://s2.loli.net/2022/04/14/iysS6GXMNEwzOpa.jpg',
					'https://s2.loli.net/2022/04/14/lNgZ2Ymp9XnbjMe.jpg',
					'https://s2.loli.net/2022/04/14/yF7Hjdh6UIt9pX1.jpg',
					'https://s2.loli.net/2022/04/14/A8Xhf1uHcyUqCpr.jpg'

				],
				//导航栏数组
				label: [{
						title: '总排行榜',
						icon: '../../static/daohang/排行榜.png'
					},
					{
						title: '实战测评',
						icon: '../../static/daohang/实战测评.png'
					},

					{
						title: '球鞋推荐',
						icon: '../../static/daohang/尺子笔.png'
					},
					{
						title: '热门视频',
						icon: '../../static/daohang/热门.png'
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
	page {
		background-color: #EDEDED;
	}
	.mainPage{
		display: flex;
	/* 	flex-direction: column; */
		flex-wrap: wrap;
		justify-content: center;
		background-color: #EDEDED;

	}
	.page-section{
		width: 100%;
		height: 480rpx;
		background-color: #EDEDED;
		padding: 30rpx;
	}
	swiper {
		height: 500rpx;
		
	}
	swiper swiper-item image {

		width: 100%;
		height: 100%;
		display: block;
		
		border-radius: 5%;


		
	}

	.navigator {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		margin-top: 20rpx;
		background-color: white;
		width: 100%;
		height: 180rpx;
		
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

/* 	.content {
		margin-top: 20rpx;
		background-color: #DCDFE6;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
	} */

</style>
