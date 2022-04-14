<template>
	<view class="">
		<view class="head"><!-- style="background-image: url({{shoes.img}});" -->
			<view class="headtext" style="width: 755rpx;height: 70rpx;background: -webkit-linear-gradient(top,white,gray);">
				<text>{{shoes.title}}</text>
			</view>
		</view>
		<Item :shoes="shoes" />
		<view style="width: 750rpx;height: 100rpx;background-color: #F5F5F5;line-height: 100rpx;">
				<text style="font-size: 20px;font-weight: bold;">最新评论</text>
		</view>
		<view class="">
			<view v-for="(item,index) in comments" :key="index">
				<view style="margin: 10px;height: 100px;">
					<view style="display: flex;justify-content: space-between;margin-bottom: 10px;">
						<view style="display: flex;">
							<view class="main-img">
								<image :src="item.userImg" mode="" style="border-radius: 10%;width: 100%;height: 100%;">
								</image>
							</view>
							<view style="display: flex;flex-direction:column">
								<text style="font-size: 20px;color: #000000;">{{item.username}}</text>
								<text style="font-size: 15px;color: #C5C5C5;">{{item.time}}</text>
							</view>
						</view>
						<view>
							<image src="../../static/images/mine/notices.png" mode="" style="width: 50rpx;height: 50rpx;"></image>
							<text class="areaNum">10</text>
							<image :src="item.isLike?zan:yizan" mode="" @click="doyoulike(index)"
								style="width: 50rpx;height: 50rpx;"></image>
								<text class="areaNum">10</text>
						</view>
					</view>
					<view>
						<text style="color: #000000;">{{item.comment}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import Item from '../../components/Item.vue'
	export default {
		components:{
			Item
		},
		data() {
			return {
				shoes:{},
				comments: [{
						isLike: true,
						userImg: '../../static/lunbotu/1.jpg',
						username: 'zbj',
						time: '10-24 14:11',
						comment: '1111111'
					},
					{
						isLike: true,
						userImg: '../../static/lunbotu/2.jpg',
						username: 'abc',
						time: '10-24 15:11',
						comment: '2222222'
					},
					{
						isLike: true,
						userImg: '../../static/lunbotu/3.jpg',
						username: 'edg',
						time: '10-24 16:11',
						comment: '22222333'
					},
					{
						isLike: true,
						userImg: '../../static/lunbotu/4.jpg',
						username: 'qwe',
						time: '10-24 17:11',
						comment: '34444444'
					}
				],
				zan: '../../static/daohang/赞.png',
				yizan: '../../static/daohang/已赞.png'
			}
		},
		methods: {
			doyoulike(a) {
				this.comments[a].isLike = !this.comments[a].isLike
			}
		},
		onLoad(options){
			const item = JSON.parse(decodeURIComponent(options.item));
			this.shoes = item
		}
	}
</script>

<style scoped>
	.head {
		width: 750rpx;
		height: 500rpx;
		background-size: 750rpx 500rpx;
		position: relative;
		background-image: url({{shoes.img}});
	}

	.headtext {
		font-size: 60rpx;
		font-weight: bold;
		color: #FFFFFF;
		padding-left: 10px;
		position: absolute;
		/* 相对于容器绝对定位 */
		bottom: 0px;
	}

	
	.content text {
		color: #FFFFFF;
	}

	.main-img {
		width: 50rpx;
		height: 50rpx;
		border: 1px solid #fff;
		border-radius: 50%;
		margin-right: 10px;
	}
	.areaNum {
		font-size: 30rpx;
		color: #ACACAC;
		margin: 10rpx;
		margin-right: 30rpx;
	}
</style>
