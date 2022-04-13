<template>
	<view class="">
		<!-- 头部 -->
		<view class="head">
			<view class="head-imgae" >
				<image src="../../static/daohang/站外测评广告数据.png" mode="" style="width: 150rpx;height: 150rpx;margin: 30rpx;"></image>
			</view>
			<view class="head-content">
				<view class="content-title">
					<image src="../../static/daohang/收藏2.png" mode="" style="width: 15px;height: 28rpx;margin-right: 3px;"></image>
					<text style="font-size: 14px;">实战测评</text>
				</view>
				<view style="margin-top: 10px;">
					<text style="color: #999b9e;">你可以很硬核，你也可以只是分享体验感受。不管是哪种，都希望你对和大家分享“你对球鞋的热爱”这件事感到自豪！</text>
				</view>
			</view>
		</view>
		<view style="width: 750rpx;height: 100rpx;background-color: #F5F5F5;line-height: 100rpx;">
				<text style="font-size: 20px;font-weight: bold;">最新评论</text>
		</view>
		<view class="like">
			<view v-for="(item,index) in Data">
				<postItem :key="index" :postItem="item"></postItem>
			</view>
		
		</view>
	</view>
</template>

<script>
	import postItem from '../../components/postItem.vue'
	export default{
		components:{
			postItem
		},
		data(){
			return {
				Data: [
					{
						username: "yonghu1234",
						createtime: "11-24 02:44",
						content: "aaaaaaaaaaa",
						imgUrl: "222222222",
						num1: 10,
						num2: 20,
						num3: 3
					},
					{
						username: "yonghu",
						createtime: "11-24 02:44",
						content: "aaaaddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
						imgUrl: "222222222",
						num1: 20,
						num2: 20,
						num3: 30
					},
					{
						username: "aksudg",
						createtime: "11-24 02:44",
						content: "aavvvvvvaaa",
						imgUrl: "222222222",
						num1: 10,
						num2: 2,
						num3: 30
					}
				]
			}
		}
	}
</script>

<style scoped>
	.head{
		width: 750rpx;
		height: 300rpx;
		display: flex;
	}
	.head-imgae{
		margin: auto;
	}
	.head-content{
		margin: 20px;
	}
	.content-title{
		height: 100%;
		border: 1px solid #e6e9f0;
		border-radius: 30px 30px 30px 0;
		background-color:#e6e9f0;
		/* margin-bottom: 10px; */
		/* display: inline; */
		display: flex;
		display:inline-block;
		display:inline;
		padding: 5px;
		zoom:1;
	}
	.like{
		background-color: #EDEDED;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
