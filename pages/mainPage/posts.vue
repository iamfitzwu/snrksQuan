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
		<view style="margin: 10px;background-color: #fafafa;height:100%">
			<view style="display: flex;">
				<view class="main-img">
					<image :src="user.imglist[0]" mode="" style="border-radius: 10%;width: 100%;height: 100%;"></image>
				</view>
				<view style="display: flex;flex-direction:column">
					<text style="font-size: 20px;">{{user.username}}</text>
					<text style="font-size: 15px;color: #C5C5C5;">10-24 14:11</text>
				</view>
			</view>
			<view>
				<view>
					<text style="font-size: 20px;">{{user.content}}</text>
					<view style="display: flex;flex-wrap: wrap;">
						<view v-for="(item,index) in user.imglist" :key="index" :index="index">
							<image :src="item" mode="" style="width: 200rpx;height: 180rpx;margin-right: 10rpx;" @click="TanPreviewImage(index)"></image>
						</view>
					</view>
				</view>
				<view class="bottom-area">
					<view class="likes">
						<image class="areaImg" src="../../static/images/mine/like.png"></image>
						<text class="areaNum">10</text>
					</view>
					<view class="comment">
						<image class="areaImg" src="../../static/images/mine/notices.png"></image>
						<text class="areaNum">10</text>
					</view>
					<view class="date">
						<image class="areaImg" src="../../static/daohang/篮球.png"></image>
						<text class="areaNum">10-25</text>
					</view>
				</view>
				<view class="" style="margin: 10px;">
					<text style="font-size: 25px; font-weight: bold;">全部评论</text>
				</view>
			</view>
		</view>
		<!-- 用户评论区 -->
		<view v-for="(item,index) in comments" :key="index">
			<view style="margin: 10px;height: 100px;">
				<view style="display: flex;justify-content: space-between;margin-bottom: 10px;">
					<view style="display: flex;">
						<view class="main-img">
							<image :src="item.userImg" mode="" style="border-radius: 10%;width: 100%;height: 100%;"></image>
						</view>
						<view style="display: flex;flex-direction:column">
							<text style="font-size: 20px;">{{item.username}}</text>
							<text style="font-size: 15px;color: #C5C5C5;">{{item.time}}</text>
						</view>
					</view>
					<view>
						<image src="../../static/images/mine/notices.png" mode="" style="width: 50rpx;height: 50rpx;"></image>
						<text class="areaNum">10</text>
						<image :src="item.isLike?zan:yizan" mode="" @click="doyoulike(index)" style="width: 50rpx;height: 50rpx;"></image>
						<text class="areaNum">{{item.likeCount}}</text>
					</view>
				</view>
				<view>
					<text>{{item.comment}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				zan:'../../static/daohang/赞.png',
				yizan:"../../static/images/mine/like.png",
				comments:[
					{isLike:true,userImg:'../../static/lunbotu/1.jpg',username:'zbj',time:'10-24 14:11',comment:'1111111',likeCount:10,},
					{isLike:true,userImg:'../../static/lunbotu/2.jpg',username:'abc',time:'10-24 15:11',comment:'2222222',likeCount:10,},
					{isLike:true,userImg:'../../static/lunbotu/3.jpg',username:'edg',time:'10-24 16:11',comment:'22222333',likeCount:10,},
					{isLike:true,userImg:'../../static/lunbotu/4.jpg',username:'qwe',time:'10-24 17:11',comment:'34444444',likeCount:10,}
				],
				user:{},
				phones:[],
				// imgList:[
				// 	'../../static/lunbotu/1.jpg',
				// 	'../../static/lunbotu/2.jpg',
				// 	'../../static/lunbotu/3.jpg',
				// 	'../../static/lunbotu/4.jpg',
				// 	'../../static/lunbotu/5.jpg',
				// 	'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170517%2F6a41e78e98d6489b9ea6e1d518fa2561_th.png&refer=http%3A%2F%2Fimg.mp.sohu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639146371&t=ac4de69ed3411e9b114991c47db38a95'
				// ],
			}
		},
		methods:{
			doyoulike(a){
			this.comments[a].isLike = !this.comments[a].isLike;
			if(!this.comments[a].isLike) {
				this.comments[a].likeCount =this.comments[a].likeCount +1;
			}else {
				this.comments[a].likeCount = this.comments[a].likeCount - 1;
			}
		},
			TanPreviewImage(indexa){
				// console.log(indexa)
				// console.log(this.user)
				uni.previewImage({
					current:indexa,
					urls:this.user.imglist,	
			})}
	},
	onLoad(options){
		const item = JSON.parse(decodeURIComponent(options.item));
		            this.user = item
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
		padding: 5px;
		zoom: 1;
	}

	.main-img {
		width: 90rpx;
		height: 90rpx;
		border: 1px solid #fff;
		border-radius: 50%;
		margin-right: 10px;
	}
	
	.bottom-area {
		display: flex;
		flex-direction: row;
	}
	.areaImg {
		width: 50rpx;
		height: 50rpx;
	
	}
	.areaNum {
		font-size: 30rpx;
		color: #ACACAC;
		margin: 10rpx;
		margin-right: 30rpx;
	}
</style>
