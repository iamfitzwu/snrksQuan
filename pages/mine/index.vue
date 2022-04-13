<template>
	<view class="mine">
		<view class="wrapper">
			<!-- 头像 -->
			<image class="avator" mode="aspectFill" :src="userinfo.avatarUrl"></image>
			<!-- 用户名 -->
			<view class="username">
				<text>{{userinfo.nickName}}</text>
			</view>
			<view class="mine-go-to"></view>
		</view>
		<view class="mine-list">
			<navigator class="mine-item" url="/pages/mine/myPages" hover-class="none">
				<image class="mine-item-icon" src="../../static/images/mine/mypages.png" mode="aspectFill"></image>
				<view class="mine-item-title mine-item-title-border">
					我的发帖
				</view>
				<view class="mine-item-go-to">
				</view>
			</navigator>

			<navigator class="mine-item" url="/pages/mine/myLikes" hover-class="none">
				<image class="mine-item-icon" src="../../static/images/mine/like.png" mode="aspectFill"></image>
				<view class="mine-item-title mine-item-title-border">
					我点赞的帖子
				</view>
				<view class="mine-item-go-to">
				</view>
			</navigator>

			<navigator class="mine-item" url="/pages/mine/notices" hover-class="none">
				<image class="mine-item-icon" src="../../static/images/mine/notices.png" mode="aspectFill"></image>
				<view class="mine-item-title mine-item-title-border">
					我的消息
				</view>
				
				<view class="mine-item-go-to"></view>
			</navigator>
			
		</view>
		
			<button v-if="!userinfo.judgedeng" class="loginBtn" @click="getUser()">微信登录</button>
			<button v-if="userinfo.judgedeng" class="loginBtn" @click="logout()">退出登录</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return{
				userinfo:{
					judgedeng:false,
					avatarUrl:"../../static/images/mine/defAvatar.jpg",
					nickName:"用户12345",
				},

			}
		},
		methods:{
		    getUser(){
				let that = this
				uni.getUserProfile({
				    desc: 'weixin',
				    success: function (infoRes) {
						console.log('用户昵称为：' + infoRes.userInfo.nickName);
						that.userinfo=infoRes.userInfo;
						that.userinfo.judgedeng = true;
						that.$store.state.username = infoRes.userInfo.nickName;
						that.$store.state.userimg = infoRes.userInfo.avatarUrl;
						that.$store.state.judgedeng = true;
						uni.showToast({
						    title: '登陆成功',
						    duration: 2000
						});
				    },
					
					
				});
			},
			logout(){
				let that = this;
				uni.showModal({
					title:"退出登录",
					content:"退出之后无法享受部分权益",
					success(res) {
						if(res.confirm) {
							that.userinfo.avatarUrl = "../../static/images/mine/defAvatar.jpg";
							that.userinfo.nickName = "用户12345";
							that.userinfo.judgedeng = false;
							that.$store.state.judgedeng = false;
						}
					}
				})
			},
			// print(){
			// 	console.log(this.userinfo)
			// },

		},
		
		
		
		
	}
	
</script>

<style>
	page {
		background-color: #EDEDED;
	}
	.mine {
		display: flex;
	/* 	flex-direction: column; */
		flex-wrap: wrap;
		justify-content: center;
	}
	/* 用户信息 */
	.wrapper {
		width: 100%;
		background-color:#1296db;
		padding-left: 46rpx;
		padding-right: 30rpx;
		padding-bottom: 70rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-top: 20rpx;
		position:relative;
		margin-bottom: 30rpx;

		
	
	}
	
	.avator {
		width: 116rpx;
		height: 116rpx;
		flex-shrink: 0;
		border:3px solid #fff;
		border-radius: 50%;
		margin-right: 30rpx;
	}
	.username {
		margin-top: 10rpx;
		font-size: 40rpx;
		color: #1C1C1C;
		position: relative;
	}
	.mine-go-to {
		position: absolute;
		right: 30rpx;
		width: 14rpx;
		height: 14rpx;
		border-top: 4rpx solid #000000;
		border-right: 4rpx solid #000000;
		transform: rotate(45deg);
	}
	
	/* 功能列表 */
	.mine-list {
		width: 85%;
		border:10rpx solid #ffffff;
		border-radius: 25rpx;
		margin-bottom: 30rpx;

	}
	.mine-item {
		position: relative;
		padding-left: 30rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: white;
		color: #111111;
	}
	
    .mine-item-icon {
		width: 50rpx;
		height: 50rpx;
		margin-right: 30rpx;
	}

	.mine-item-title {
		font-size: 32rpx;
		width: 640rpx;
		height: 108rpx;
		line-height: 108rpx;
	}

	.mine-item-title-border {
		border-bottom: 1rpx solid #f3f3f3;
	}

	.mine-item-go-to {
		position: absolute;
		top: 46rpx;
		right: 30rpx;
		width: 14rpx;
		height: 14rpx;
		border-top: 4rpx solid #ACACAC;
		border-right: 4rpx solid #ACACAC;
		transform: rotate(45deg);
	}
	.loginBtn {
		  width: 85%;
		  margin-top: 20rpx;
		  background-color: #c5c5c5;
		  color: white;
		  border-radius: 98rpx;
		  align-items: center;
	}
</style>
