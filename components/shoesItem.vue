<template>
<<<<<<< HEAD
	<view class="shoserow">
		<view class="shoesItem">
			<image class="shoesImg" mode="aspectFill" src="../static/lunbotu/2.jpg"></image>
			<text class="shoesName">{{shoesItem.nameOne}}</text>
		</view>
		<view class="shoesItem">
			<image class="shoesImg" mode="aspectFill" src="../static/lunbotu/2.jpg"></image>
			<text class="shoesName">{{shoesItem.nameTwo}}</text>
		</view>
	</view>

=======
	<view class="shoesItem">
		<image class="shoesImg" mode="aspectFill" src="../static/lunbotu/2.jpg"></image>
		<text class="shoesName">{{shoesItem.name}}</text>
	</view>
>>>>>>> bdcc0ec (2021.11.06)
</template>

<script>
	export default {
		data() {
			return {
<<<<<<< HEAD
				// shoesItem:{
				// 	shoesImg:"",
				// 	name:"aj4"
				// }
			};
		},
		props: {
			shoesItem: {
=======
				shoesItem:{
					shoesImg:"",
					name:"aj4"
				}
			};
		},
		props: {
			postItem: {
>>>>>>> bdcc0ec (2021.11.06)
				type: Object
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
<<<<<<< HEAD
	.shoserow {
		display: flex;
	}
	.shoesItem {
		display: flex;
		flex-direction: column;
		margin-left: 13rpx;
		margin-top: 18rpx;

	}
	.shoesImg {
		width: 230rpx;
		height: 220rpx;
	}
	.shoesName {
		text-align: center;
		font-size: 30rpx;
		width: 180rpx;
=======
	.shoesItem {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.shoesImg {
		width: 250rpx;
		height: 250rpx;
	}
	.shoesName {
		font-size: 30rpx;
		justify-content: center;
>>>>>>> bdcc0ec (2021.11.06)
	}
</style>
