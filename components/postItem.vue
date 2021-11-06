<template>
	<view class="postItem">
		<view class="user-wrapper">
			<image class="poster-avatar" mode="aspectFill" src="../static/images/mine/avator.jpg"></image>
			<view class="userinfo">
				<view class="username">
					<text>{{postItem.username}}</text>
				</view>
				<view class="createtime">{{postItem.createtime}}</view>
			</view>
		</view>
		<view class="post-content">
			<text class="content">{{postItem.content}}</text>
			<image class="postPic" mode="aspectFill" src="../static/images/mine/defAvatar.jpg"></image>
		</view>
		<view class="bottom-area">
			<view class="likes">
				<image class="areaImg" src="../static/images/mine/like.png"></image>
				<text class="areaNum">10</text>
			</view>
			<view class="comment">
				<image class="areaImg" src="../static/images/mine/notices.png"></image>
				<text class="areaNum">10</text>
			</view>
			<view class="date">
				<image class="areaImg" src="../static/daohang/篮球.png"></image>
				<text class="areaNum">10-25</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// postItem:{
				// 	avatarUrl:"../static/image/mine/defAvatar.jpg",
				// 	username:"用户12345",
				// 	createtime:"11-24 02:44",
				// 	content:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
				// 	postPicUrl:"../static/image/mine/defAvatar.jpg"
				// }
			};
		},
		props: {
			postItem: {
				type: Object
			}
		},
		methods: {

		}
	}
</script>

<style scoped>

	.postItem { 
		width: 650rpx;
		margin: 20rpx;
		padding: 20rpx;
		display: flex;
		border-radius: 25rpx;
		flex-direction: column;
		background-color: #FFFFFF;
	}
	.poster-avatar {
		width: 100rpx;
		height: 100rpx;
		border-radius: 20rpx;
		margin-right: 25rpx;
	}
	.username {
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		font-size: 35rpx ;
		font-weight: 600;
	}
	.createtime {
		font-size: 25rpx;
		color: #ACACAC;
	}
	.user-wrapper {
		display: flex;
		flex-direction: row;
	}
	.post-content {
		margin-top: 20rpx;
		margin-bottom: 10rpx;
		word-break:break-all;
		display: flex;
		flex-direction: column;
	}
	.postPic {
		margin-top: 20rpx;
		width: 300rpx;
		height: 300rpx;
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
