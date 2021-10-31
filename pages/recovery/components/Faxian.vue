<template>
	<view>
		<view v-for="(item,index) in shoestalk" :key="index" class="main">
			<view class="content-img">
				<image :src="item.img" mode="" style="width:200rpx;height: 150rpx;">
				</image>
			</view>
			<view>
				<view class="content-title">
					<image src="../../../static/daohang/爆款.png" mode="" style="width: 20px;height: 38rpx;margin-right: 3px;"></image>
					<text>{{item.title}}</text>
				</view>
				<view class="content-msg"><text style="color: gray;">{{item.msg}}</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'Faxian',
		data(){
			return{
				shoestalk:[
					{
						img:'../../../static/lunbotu/1.jpg',
						msg:'这是air jordan第一代，是aj品牌的开端',
						title:'Air Jordan 1'
					},
					{
						img:'../../../static/lunbotu/3.jpg',
						msg:'这是air jordan第六代，他与前几代不同的设计是',
						title:'Air Jordan 6'
					},
					{
						img:'../../../static/lunbotu/4.jpg',
						msg:'镂空加上最近科技，以及史上最便宜的棉花糖配合',
						title:'全城9'
					},
					{
						img:'../../../static/lunbotu/5.jpg',
						msg:'争议颇大的球鞋，但是性能是毋庸置疑的',
						title:'驭帅14'
					},
					{
						img:'../../../static/lunbotu/2.jpg',
						msg:'这是air jordan第四代，他与前几代不同的设计是',
						title:'Air Jordan 4'
					}
				]
			}
		}
	}
</script>

<style scoped>
	.main{
		width: 750rpx;
		height: 150rpx;
		display: flex;
		margin-bottom: 15px;
	}
	.content-img{
		width: 200rpx;
		height: 150rpx;
		margin: 10px;
	}
	.content-title{
		height: 100%;
		border: 1px solid #DCDFE6;
		border-radius: 30px 30px 30px 0;
		background-color:#DCDFE6;
		/* margin-bottom: 10px; */
		/* display: inline; */
		display: flex;
		display:inline-block;
		display:inline;
		zoom:1;
	}
	
	.content-msg{
		width: 500rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-top: 10px;
	}
</style>
