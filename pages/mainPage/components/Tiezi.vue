<template>
	<view style="display: flex;flex-wrap: wrap;align-items: center;justify-content: space-between;">
		<view v-for="(item,index) in tz" :key="index" class="main-content">
			<image :src="item.img" mode="" style="width: 355rpx;height: 355rpx;"></image>
			<view class="main-msg">
				<text style="font-size: 18px;">{{item.content}}</text>
			</view>
			<view style="display: flex;align-items: center;justify-content: space-between;">
				<view style="display: flex;">
					<view class="main-img">
						<image :src="item.img" mode="" style="border-radius: 50%;width: 100%;height: 100%;"></image>
					</view>
					<text style="font-size: 20px;color: #808080;">{{item.username}}</text>
				</view>
				<view style="display: flex;">
					<image src="../../../static/daohang/评论.png" style="width: 20px;height: 20px;"></image>
					<text style="font-size: 15px;">2</text>
				</view>
			</view>
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
						content: '这是air jordan 第一代aaaaaaaaaaaaaaaaaaaaa'
					},
					{
						username: 'wyllll',
						img: '../../../static/lunbotu/2.jpg',
						content: '这是air jordan 第四代'
					},
					{
						username: '热热热',
						img: '../../../static/lunbotu/3.jpg',
						content: '今天买的新鞋大家来kkkkk'
					},
					{
						username: 'zzzz',
						img: '../../../static/lunbotu/4.jpg',
						content: '史上最好看的李宁篮球鞋，是大家都可以入手的价格'
					},
					{
						username: '球鞋玩家',
						img: '../../../static/lunbotu/5.jpg',
						content: '性价比不太高的一双球鞋，但是实战好到爆炸'
					},
				]
			}
		}
	}
</script>

<style scoped>
	.main-content {
		width: 355rpx;
		height: 500rpx;
		padding: 8rpx;
		border: 1px solid #DCDFE6;
		border-radius: 5px 5px 5px 5px;
		background-color: white;
	}

	.main-img {
		width: 50rpx;
		height: 50rpx;
		border: 1px solid #fff;
		border-radius: 50%;
	}

	.main-msg {
		width: 355rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
