<template>
	<view class="shoesItem">
		<image class="shoesImg" mode="aspectFill" src="../static/lunbotu/2.jpg"></image>
		<text class="shoesName">{{shoesItem.name}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shoesItem:{
					shoesImg:"",
					name:"aj4"
				}
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
	}
</style>
