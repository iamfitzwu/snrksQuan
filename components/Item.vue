<template>
	<view>
		<view class="content">
			<text style="color: #f3f3f3;width: 750rpx;word-wrap: break-word;margin: 10px;">{{shoes.msg}}</text>
			<h3 style="color: #FFFFFF;font-weight: bold;margin-top: 20px;margin-left: 10px;">球鞋评分</h3>
			<view class="" style="display: flex;justify-content: space-between;flex-wrap: wrap;margin: 10px;">
				<view style="display: flex;padding: 10rpx;"> 
					<text>综合</text>
					<view class="" 
						style="background-color:#1296db;width: 180rpx;height:80rpx;margin-left: 18px;line-height: 75rpx;text-align: center;">
						<text style="font-size: 50rpx;font-weight: bold;">{{shoes.rate}}</text>
					</view>
				</view>
				<view class="staring" style="display: flex;text-align: center;">
					<text style="margin-right: 10px;">透气</text>
					<uni-rate allow-half :value="shoes.rate" size="18" activeColor="#1296db" />
				</view>
				<view class="staring" style="display: flex;text-align: center;">
					<text style="margin-right: 10px;">耐磨</text>
					<uni-rate allow-half :value="shoes.rate" size="18" activeColor="#1296db" />
				</view>
				<view class="staring" style="display: flex;text-align: center;">
					<text style="margin-right: 10px;">启动</text>
					<uni-rate allow-half :value="shoes.rate" size="18" activeColor="#1296db" />
				</view>
				<view class="staring" style="display: flex;text-align: center;">
					<text style="margin-right: 10px;">缓震</text>
					<uni-rate allow-half :value="shoes.rate" size="18" activeColor="#1296db" />
				</view>
				<view class="staring" style="display: flex;text-align: center;">
					<text style="margin-right: 10px;">包裹</text>
					<uni-rate allow-half :value="shoes.rate" size="18" activeColor="#1296db" />
				</view>
				<view class="" style="width: 630rpx;margin:30px;background-color:#30333C;border: 1px solid #30333C;">
					<text>与其他相近产品的参数对比</text>
					<view style="display: flex;margin: 10px;">
						<view class="main-img">
							<image src="../static/lunbotu/2.jpg" mode=""
								style="border-radius: 50%;width: 100%;height: 100%;"></image>
						</view>
						<text @click="click()">AJ air jordan 4</text>
					</view>
					<view style="display: flex;margin: 10px;">
						<view class="main-img">
							<image src="../static/lunbotu/3.jpg" mode=""
								style="border-radius: 50%;width: 100%;height: 100%;"></image>
						</view>
						<text @click="click2()">AJ air jordan 6</text>
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
				shoesItem1:{
					img:'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA4bd0d5709915845685b1f749937b1be0.jpg?x-bce-process=image/watermark,image_NDU0ZjAyZDU5YjQ1LnBuZw==,bucket_searchbox,w_21,text_QHpiamJiYmJk,type_RlpMYW5UaW5nSGVp,size_21,x_14,y_14,interval_4,color_FFFFFF,effect_softoutline,shc_000000,blr_2,align_1',
					msg:'这是air jordan第四代，他的外观非常好看，受到很多年轻人得追捧，是当下年轻人最喜欢得一款球鞋',
					title:'Air Jordan 4',
					rate:4
				},
				shoesItem2:{
					img:'../static/lunbotu/3.jpg',
					msg:'这是air jordan第六代，他的外观非常好看，受到很多年轻人得追捧，是当下年轻人最喜欢得一款球鞋',
					title:'Air Jordan 6',
					rate:3
				},
			}
		},
		methods:{
			click(){
				let item = encodeURIComponent(JSON.stringify(this.shoesItem1));
				uni.navigateTo({
					url:'./detail?item='+item
				})
			},
			click2(){
				let item = encodeURIComponent(JSON.stringify(this.shoesItem2));
				uni.navigateTo({
					url:'./detail?item='+item
				})
			}
		}
	}
</script>

<style scoped>
	.staring{
		
		margin:10rpx;
	}
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
