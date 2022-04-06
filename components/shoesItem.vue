<template>
	<view class="shoserow">
		<view class="shoesItem">
			<image class="shoesImg" mode="aspectFill" src="../static/images/shoes/traeyoung1.jpg"></image>
			<text class="shoesName">{{shoesItem.nameOne}}</text>
		</view>
		<view class="shoesItem">
			<image class="shoesImg" mode="aspectFill" src="../static/images/shoes/traeyoung1.jpg"></image>
			<text class="shoesName">{{shoesItem.nameTwo}}</text>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				// shoesItem:{
				// 	shoesImg:"",
				// 	name:"aj4"
				// }
			};
		},
		props: {
			shoesItem: {
				type: Object
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.shoserow {
		display: flex;
		width: 100%;
	}
	.shoesItem {
		display: flex;
		flex-direction: column;
		margin-left: 10rpx;
		margin-top: 18rpx;

	}
	.shoesImg {
		width: 230rpx;
		height: 230rpx;
	}
	.shoesName {
		text-align: center;
		font-size: 30rpx;
		font-weight: 300;
	}
</style>
