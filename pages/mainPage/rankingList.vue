<template>
		<view>
			<view class="contaier" style="background-color: #FFFFFF;">
				<view class="top_bg">
					<view class="one_box">
						<!-- 第二名 -->
						<view class="top3">
							<view class="num_two">
								<image class="huangguan2" src="@/static/rank/two.png"></image>
								<image class="top3_head" src="https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA36d1ef744e6220d77c9e97d36e796aec.jpg"></image>
								<!-- <view class="top_name">{{twoName}}</view> -->
								<view class="top_name">AJ 6</view>
								<view class="top_sy">3000</view>
							</view>
						</view>
		
						<!-- 第一名 -->
						<view class="top3">
							<view class="num_one">
								<image class="huangguan1" src="@/static/rank/one.png"></image>
								<image class="top3_head" src="https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA9772bf9f871e16ad4d035b0cb20a4b7c.jpg"></image>
								<!-- <view class="top_name" style="font-size: 30rpx;">{{oneName}}</view> -->
								<view class="top_name text-bold" style="font-size: 30rpx;">AJ 1</view>
								<view class="top_sy">10000</view>
							</view>
						</view>
		
						<!-- 第三名 -->
						<view class="top3">
							<view class="num_three">
								<image class="huangguan2" src="@/static/rank/three.png"></image>
								<image class="top3_head" src="https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA37b504556d42af5b49ffe19bb7cee602.jpg"></image>
								<view class="top_name">AJ4</view>
								<view class="top_sy">12500</view>
							</view>
						</view>
					</view>
		
		
					<view class="number_sy_box">
						<view class="number_sy_box_title">
							<text>宅家学·统计</text>
							<text style="position: absolute; right: 20rpx;z-index: 9999; font-size: 24rpx;color: #c3c3c3;">
								截止：{{nowTime}}
							</text>
						</view>
						<view class="number_sy_main">
							<view style="width: 50%; text-align: center; border-right: 1px solid #eee;">
								<view class="number_num1">1800元</view>
								<view class="danwei">鞋子平均售价</view>
							</view>
							<view style="width: 50%; text-align: center; z-index: 9999;">
								<view class="number_num2">最受欢迎的品牌为 Air Jordan</view>
							</view>
						</view>
					</view>
				</view>
		
				<view class="rankList_box">
					<view class="rankItem" v-for="(item,index) in rankList" :key="index">
						<view class="rankIndex">
							<text>{{ index + 4 }}</text>
						</view>
						<view class="HeardBox">
							<image class="rankHeard" :src="item.headimgurl "></image>
						</view>
		
						<view class="NameBox">
							<!-- <view class="userName">{{item.name}}</view> -->
							<view class="userName text-bold">{{item.name}}</view>
							<view class="userPost text-gray">{{item.post}}</view>
							<view class="color_ccc">{{item.city}} ｜ <text class="text-blue">{{item.salary}}</text>元/双</view>
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
				nowTime: '',
				rankList: [
					{
						headimgurl: 'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA82587b039e49e1efe08d2758e6de4101.jpg',
						name: 'yeezy 350',
						city: 'adidas',
						salary: '2200'
					},{
						headimgurl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170517%2F6a41e78e98d6489b9ea6e1d518fa2561_th.png&refer=http%3A%2F%2Fimg.mp.sohu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639146371&t=ac4de69ed3411e9b114991c47db38a95',
						name: 'AJ 7',
						city: 'Air Jordan',
						salary: '2000'
					}, {
						headimgurl: 'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA591c10f215742a1f6377d123299ebcd0.jpg',
						name: '驭帅14',
						city: '李宁',
						salary: '1800'
					}, {
						headimgurl: 'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA1f33491c8c05fcc63a994deeaca9037c.jpg',
						name: '全城 9',
						city: '李宁',
						salary: '1600'
					},
					{
						headimgurl: 'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA7fe8c125b0a9515a958507fd4788d763.jpg',
						name: 'Dunk low',
						city: 'Nike',
						salary: '1500'
					},
					{
						headimgurl: 'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aAbb1fec224d06475402404315ed8ffd92.jpg',
						name: 'KT 6',
						city: '安踏',
						salary: '1000'
					},
					{
						headimgurl: 'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA75d0d4f70987c4949640249c5622f0fe.jpg',
						name: 'Vans oldschool',
						city: 'Vans',
						salary: '500'
					}
				]
			}
		},
		onLoad() {
			this.getTime();
		},
		methods: {
			getTime: function() {

				var date = new Date(),
					year = date.getFullYear(),
					month = date.getMonth() + 1,
					day = date.getDate(),
					hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
					minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
					second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
				month >= 1 && month <= 9 ? (month = "0" + month) : "";
				day >= 0 && day <= 9 ? (day = "0" + day) : "";
				var timer = year + '-' + month + '-' + day + ' ' + hour + ':00';
				this.nowTime = timer
				console.log(this.nowTime);
			},
		},
		filters: {

		}
	}
</script>

<style lang="scss" scoped>
	.top_bg {
		width: 750rpx;
		height: 650rpx;
		background: url(http://cdn.zhoukaiwen.com/rank_bg.png) no-repeat;
		background-size: 750rpx;
		position: relative;
	}
	
	.one_box {
		width: 750rpx;
		height: 260rpx;
		position: absolute;
		left: 0;
		bottom: 110rpx;
		display: flex;
		justify-content: space-around;
	}
	
	.one_box .top3 {
		width: 210rpx;
		height: 280rpx;
	}
	
	.top_name {
		width: 100%;
		height: 55rpx;
		line-height: 60rpx;
		color: #f2f2f2;
		font-size: 26rpx;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.top_sy {
		width: 100%;
		height: 40rpx;
		line-height: 40rpx;
		font-size: 24rpx;
		color: rgba(255, 255, 255, .7);
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.top_sy span {
		font-size: 20rpx !important;
	}
	
	.num_one {
		position: relative;
	}
	
	.huangguan1 {
		width: 60px;
		height: 60px;
		position: absolute;
		right: -10rpx;
		top: -18*2rpx;
	}
	
	.num_one .top3_head {
		width: 150rpx;
		height: 150rpx;
		border-radius: 100%;
		margin: 15rpx 0 0 30rpx;
		border: 4rpx solid #ffdd3c;
	}
	
	.num_two {
		position: relative;
	}
	
	.huangguan2 {
		width: 100rpx;
		height: 100rpx;
		position: absolute;
		right: 15rpx;
	}
	
	.num_two .top3_head {
		width: 120rpx;
		height: 120rpx;
		border-radius: 100%;
		margin: 45rpx 0 0 45rpx;
		border: 4rpx solid #bcdcdf;
	}
	
	.num_three {
		position: relative;
	}
	
	.huangguan2 {
		width: 100rpx;
		height: 100rpx;
		position: absolute;
		right: 15rpx;
	}
	
	.num_three .top3_head {
		width: 120rpx;
		height: 120rpx;
		border-radius: 100%;
		margin: 45rpx 0 0 45rpx;
		border: 4rpx solid #e29d85;
	}
	
	// 第二块
	.number_sy_box {
		width: 706rpx;
		height: 210rpx;
		background-color: #FFFFFF;
		position: absolute;
		// left: 25rpx;
		border-radius: 20rpx;
		bottom: -115rpx;
		z-index: 999;
		padding: 22rpx;
		// margin: auto;
		box-shadow: 3px 3px 15px 3px rgba(0, 0, 0, 0.1)
	}
	
	.number_sy_box_title {
		color: #888888;
		// font-weight: 500;
		font-size: 28rpx;
		display: flex;
		z-index: 9999;
		justify-content: space-between;
	}
	
	.number_sy_main {
		width: 100%;
		height: 124rpx;
		padding-top: 20rpx;
		line-height: 52rpx;
		// background: red;
		display: flex;
		justify-content: space-around;
		position: relative;
	}
	
	.xiaoding_bg {
		position: absolute;
		right: -22rpx;
		bottom: -30rpx;
		width: 180rpx;
	}
	
	.number_num1 {
		font-size: 40rpx;
		font-weight: 500;
		color: #2fc04f;
	}
	
	.number_num2 {
		font-size: 40rpx;
		font-weight: 500;
		color: #4bac7f;
	}
	
	.danwei {
		height: 60rpx;
		line-height: 60rpx;
		font-size: 26rpx;
		color: #c9c9c9;
	}
	
	// 列表
	.rankList_box {
		width: 750rpx;
		min-height: 200rpx;
		margin-top: 130rpx;
	}
	
	.rankItem:last-child {
		border: none;
	}
	
	.rankItem {
		width: 700rpx;
		height: 140rpx;
		margin: 0px auto;
		border-bottom: 1px solid #e9e9e9;
	}
	
	.rankIndex {
		width: 60rpx;
		height: 140rpx;
		line-height: 140rpx;
		text-align: center;
		color: #CCCCCC;
		font-size: 40rpx;
		float: left;
	}
	
	.HeardBox {
		width: 100rpx;
		height: 100rpx;
		margin: 20rpx;
		border-radius: 100%;
		overflow: hidden;
		float: left;
		margin-right: 25rpx;
		margin-left: 10rpx !important;
	}
	
	.HeardBox image {
		width: 100%;
		height: 100%;
	}
	
	.NameBox {
		width: 400rpx;
		height: 140rpx;
		float: left;
		padding-top: 10rpx;
		box-sizing: border-box;
	}
	
	.NameBox view {
		height: 50rpx;
		line-height: 70rpx;
	}
	
	.userName {
		min-width: 90rpx;
		font-size: 30rpx;
		float: left;
		margin-right: 20rpx;
	}
	
	.download_box {
		width: 80rpx;
		height: 140rpx;
		// background-color: red;
		float: right;
	
	}
	
	.download_box image {
		width: 45rpx;
		margin: 50rpx auto;
		display: block;
	}
</style>
