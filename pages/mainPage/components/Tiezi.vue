<template>
	<view>
		<view v-for="(item,index) in tz" :key="index">
			<image :src="item.img" mode="" style="width: 365rpx;height: 375rpx;"></image>
			<text>{{item.content}}</text>
			<text>{{item.username}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Tiezi',
		data() {
			return {
				tz: [{
						username: 'zbjbbd',
						img: '../../../static/lunbotu/1.jpg',
						content: '这是air jordan 第一代'
					},
					{
						username: 'wyllll',
						img: '../../../static/lunbotu/2.jpg',
						content: '这是air jordan 第四代'
					},
					{
						username:'kkkkkk',
						img:'../../../static/lunbotu/3.jpg',
						content:'这是air jordan 第六代'
					}
				]
			}
		}
	}
</script>

<style scoped>
	view {
		width: 365rpx;
		height: 500rpx;
		margin: 5rpx;
	}
</style>
