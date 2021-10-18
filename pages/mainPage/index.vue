<template>
	<view>
		<!-- 头部轮播图 -->
		<view class="page-section swiper">
			<view>
				<swiper 
					:indicator-dots="indicatorDots" 
					:indicator-color="indicatorColor"
					:indicator-active-color="indicatorActiveColor"
					:autoplay="autoplay"
					:interval="interval"
					:duration="duration"
					>
					<swiper-item v-for="(item,index) in img":key="index">
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
				<view class="content-img">
					<image class="uploading" :src="item.icon" mode="widthFix" style="width: 60rpx;height: 60rpx;"></image>
					<text>{{item.title}}</text>
				</view>
			</view>
		</view>
		<!-- 内容 -->
		<view class="content">
			<template>
				<Tiezi>123123</Tiezi>
				<Tiezi>123123</Tiezi>
			</template>
		</view>
	</view>
</template>

<script>
	import Tiezi from './components/Tiezi.vue'
	export default{
		components:{
			Tiezi
		},
		data(){
			return{
				indicatorDots:true,
				autoplay:true,
				interval:3000,
				duration:500,
				indicatorColor:"#292b40",
				indicatorActiveColor:"#ffffff",
				img:[
					'../../static/lunbotu/1.jpg',
					'../../static/lunbotu/2.jpg',
					'../../static/lunbotu/3.jpg'
				],
				//导航栏数组
				label:[
					{title:'总排行榜',icon:'../../static/daohang/排行榜.png'},
					{title:'实战测评',icon:'../../static/daohang/篮球.png'},
					{title:'球鞋对比',icon:'../../static/daohang/对比.png'},
					{title:'热门球鞋',icon:'../../static/daohang/鞋子.png'}
				]
				
			}
		},
		onLoad() {
			
		},
	}
</script>

<style scoped>
	
	swiper{
		width: 750rpx;height: 422rpx ;
	}
	swiper-item{
		width: 750rpx;height: 422rpx !important;
	}
	swiper swiper-item image {
		display: block;width: 750rpx;height: 422rpx !important;
	}
	.navigator{
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
	}
	.content-img{
		margin: 6px;
		position: relative;
		text-align: center;
	}
	.content-img text{
		padding-top: 20rpx;
		font-size: 30rpx;
		font-weight: bold;
	}
	.uploading{
		display: block;
		margin: 0 auto;
	}
	.content{
		display: flex;
	}
</style>
