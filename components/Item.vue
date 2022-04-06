<template>
	<view>
		<view class="content">
			<text style="color: #f3f3f3;width: 750rpx;word-wrap: break-word;margin: 10px;">{{shoes.msg}}</text>
			<h3 style="color: #FFFFFF;font-weight: bold;margin-top: 20px;margin-left: 10px;">球鞋评分</h3>
			<view class="" style="display: flex;justify-content: space-between;flex-wrap: wrap;margin: 10px;">
				<view style="display: flex;"> 
					<text>综合</text>
					<view
						style="background-color:#007AFF;width: 180rpx;height: 75rpx;margin-left: 20px;line-height: 75rpx;text-align: center;">
						<text style="font-size: 50rpx;font-weight: bold;">{{shoes.rate}}</text>
					</view>
				</view>
				<view class="" style="display: flex;text-align: center;">
					<text style="margin-right: 10px;">透气</text>
					<uni-rate allow-half :value="shoes.rate" size="18" activeColor="#00aaff" />
				</view>
				<view class="" style="display: flex;text-align: center;">
					<text style="margin-right: 10px;">耐磨</text>
					<uni-rate allow-half :value="shoes.rate" size="18" activeColor="#00aaff" />
				</view>
				<view class="" style="display: flex;text-align: center;">
					<text style="margin-right: 10px;">启动</text>
					<uni-rate allow-half :value="shoes.rate" size="18" activeColor="#00aaff" />
				</view>
				<view class="" style="display: flex;text-align: center;">
					<text style="margin-right: 10px;">缓震</text>
					<uni-rate allow-half :value="shoes.rate" size="18" activeColor="#00aaff" />
				</view>
				<view class="" style="display: flex;text-align: center;">
					<text style="margin-right: 10px;">包裹</text>
					<uni-rate allow-half :value="shoes.rate" size="18" activeColor="#00aaff" />
				</view>
				<view class="" style="width: 630rpx;margin:30px;background-color:#30333C;border: 1px solid #30333C;">
					<text>与其他相近产品的参数对比</text>
					<view style="display: flex;margin: 10px;">
						<view class="main-img">
							<image src="../static/lunbotu/2.jpg" mode=""
								style="border-radius: 50%;width: 100%;height: 100%;"></image>
						</view>
						<text>AJ air jordan 4</text>
					</view>
					<view style="display: flex;margin: 10px;">
						<view class="main-img">
							<image src="../static/lunbotu/3.jpg" mode=""
								style="border-radius: 50%;width: 100%;height: 100%;"></image>
						</view>
						<text>AJ air jordan 6</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {UniRate} from '@dcloudio/uni-ui'
	export default{
		name:'Item',
		props:['shoes'],
		components:{UniRate},
		data(){
			return{
				shoesItem:{
					msg:'Jordan第七代签名鞋，划时代产品，潮流界的热门鞋款，配置为后掌Aiursole气垫'
				}
			}
		}
	}
</script>

<style scoped>
	.content {
		background-color: #363942;
		width: 750rpx;
		height: 100%;
	}
	.main-img {
		width: 50rpx;
		height: 50rpx;
		border: 1px solid #fff;
		border-radius: 50%;
		margin-right: 10px;
	}
	text {
		color: white;
	}
</style>
