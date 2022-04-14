<template>
	<view class="notices">
		<view class="wrapper">
			<text class="label">消息</text>
			<text class="noticesNum">(3)</text>
		</view>
		<view class="noticesItem" v-for="(item,index) in Data" :key="index">
			<image class="avatar" mode="aspectFill" src="../../static/images/mine/defAvatar.jpg"></image>
			<view class="noticesInfo">
				<view class="noticesName">
					<text>{{item.name}}</text>
				</view>
				<view class="noticesContent">
					<text>{{item.content}}</text>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	
	export default{
		
		data(){
			return {
				Data: [
					{
						name: "yonghu1234",
						content: "给您点了赞",
						imgUrl: "222222222",
						
					},
					{
						name: "yonghu",
						content: "给您的帖子评论了",
						imgUrl: "222222222",

					},
					{
						name: "aksudg",
						content: "给您点了赞",
						imgUrl: "222222222",

					}
				]
			}
		}
	}
</script>

<style scoped>
	.notices {
		/* s */
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.wrapper {
		background-color:#1296db;
		/* padding-left: 46rpx; */
		padding-right: 30rpx;
		padding-bottom: 70rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-top: 20rpx;
		position:relative;
		margin-bottom: 30rpx;
		height: 200rpx;
		
		
	}
	.label {
		font-size: 60rpx;
		color:#FFFFFF;
		margin-left: 20rpx;
	}
	.noticesNum {
		font-size: 40rpx;
		color:#FFFFFF;
		margin: 20rpx;
	}
	.noticesItem {
		display: flex;
		flex-direction: row;
		height: 150rpx;
		margin: 50rpx;
		border-bottom: 1rpx solid #f3f3f3;
	}
	.avatar {
		width: 100rpx;
		height: 100rpx;
		border-radius: 20rpx;
		margin-right: 25rpx;
	}
	.noticesName {
		/* margin-top: 10rpx; */
		margin-bottom: 10rpx;
		font-size: 35rpx ;
		font-weight: 500;
	}
	.noticesContent {
		font-size: 40rpx;
		color: #ACACAC;
	}
</style>
