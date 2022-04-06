<template>
	<view style="display: flex;flex-wrap: wrap;align-items: center;justify-content: space-between;" >
		<view v-for="(item,index) in tz" :key="index" class="main-content" @click="tiaozhuan(index)">
			<image :src="item.imglist[0]" mode="" style="max-width: 355rpx;max-height: 355rpx;"></image>
			<view class="main-msg">
				<text style="font-size: 18px;">{{item.content}}</text>
			</view>
			<view style="display: flex;align-items: center;justify-content: space-between;margin-top: 10px;">
				<view style="display: flex;">
					<view class="main-img">
						<image :src="item.imglist[0]" mode="" style="border-radius: 50%;width: 100%;height: 100%;"></image>
					</view>
					<text style="font-size: 18px;color: #808080;">{{item.username}}</text>
				</view>
				<view style="display: flex;">
					<image src="../../static/daohang/评论.png" style="width: 20px;height: 20px;"></image>
					<text style="font-size: 15px;">10</text>
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
				tz:this.$store.state.tz,
			}
		},
		
		methods:{
			tiaozhuan(index){
				let item = encodeURIComponent(JSON.stringify(this.tz[index]));
				uni.navigateTo({
					url:`./posts?item=`+item
				})
			}
		}
	}
</script>

<style scoped>
	.main-content {
		width: 355rpx;
		height: 500rpx;
		padding: 9rpx;
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
