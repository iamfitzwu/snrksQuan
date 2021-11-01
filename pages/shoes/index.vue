<template>
	<view>
		<!-- 搜索框 -->
		<view class="search">
			<input class="search-box" placeholder="请输入你要搜索的内容" bindtap='goodsName' />
			<image src="../../static/daohang/搜索.png" class="question-mark"></image>
		</view>
		<!-- 左侧导航 -->
		<view style="display: flex;justify-content: center;">
			<view class="left" style="width: 100%;height: 100%;">
				<scroll-view scroll-y="true" scroll-with-animation="true" class="scrollY" style="height: 2000rpx;">
					<view>
						<view v-for="l in lists" :key="l.id">
							<view @click="jumpIndex" :id="l.id">
								<view class="text-style">
									<text :class="indexId===l.id?'active1':''">{{l.item}}</text>
									<text :class="indexId===index?'active':''"></text>
							</view>
								</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="right">
				<scroll-view scroll-y="true">
					<shoes-item></shoes-item>
					<shoes-item></shoes-item>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import shoesItem from '../../components/shoesItem.vue'
	export default {
		components:{
			shoesItem
		},
		data() {
			return {
				lists: [{
						id: '0',
						item: '热门实战'
					},
					{
						id: '1',
						item: '热门休闲'
					},
					{
						id: '2',
						item: '高颜值出街'
					},
					{
						id: '3',
						item: '舒适压马路'
					},
					{
						id: '4',
						item: '日常休闲鞋'
					},
					{
						id: '5',
						item: '标题6'
					},
				],
				contentList: [
					'1', '2', '3', '4', '5', '6'
				],
				indexId: 0,
				contentId: 0
			}
		},
		methods: {
			jumpIndex(e) {
				let index = e.currentTarget.id;
				this.indexId = index;
				this.contentId = index;
			}
		},
	}
</script>

<style scoped>
	.search {
		width: 100%;
		height: 88rpx;
		background-color: #FFFFFF;
		box-sizing: border-box;
		padding-top: 18rpx;
		left: 0;
		top: 0;
	}

	.search-box {
		width: 690rpx;
		height: 57rpx;
		margin-left: 30rpx;
		background-color: #fff;
		box-sizing: border-box;
		padding-left: 60rpx;
		border-radius: 57rpx;
		font-size: 26rpx;
	}

	.question-mark {
		width: 30rpx;
		height: 30rpx;
		position: absolute;
		left: 45rpx;
		top: 30rpx;
	}

	.scrollY {
		width: 200rpx;
		position: fixed;
		left: 0;
		/* top: 100rpx; */
		border-right: 1rpx solid #efefef;
	}

	.left {
		border-top: 1rpx solid #efefef;
		border-right: 1rpx solid #efefef;
	}

	.text-style {
		width: 200rpx;
		height: 140rpx;
		line-height: 140rpx;
		text-align: center;
		font-size: 34rpx;
		font-family: PingFangSC-Semibold;
		color: rgba(51, 51, 51, 1);
	}

	.active1 {
		color: #85d1fd;
	}

	.active {
		display: block;
		width: 50rpx;
		height: 6rpx;
		background: #85d1fd;
		position: relative;
		left: 75rpx;
		bottom: 30rpx;
	}
	.right {
		display: flex;
		flex-direction: row;
	}
</style>
