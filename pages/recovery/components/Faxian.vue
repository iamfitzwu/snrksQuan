<template>
	<view>
		<view v-for="(item,index) in shoestalk" :key="index" class="main">
			<view class="content-img"><image :src="item.img" mode="" style="width: 100%;height: 180rpx;"></image></view>
			<view class="content-title">{{item.title}}</view>
			<view class="content-msg"><text style="color: gray;">{{item.msg}}</text></view>
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
						msg:'这是air jordan第一代，是aj品牌的开端....',
						title:'Air Jordan 1'
					}
				]
			}
		}
	}
</script>

<style scoped>
	.main{
		width: 750rpx;
		height: 180rpx;
/* 		display: flex; */
	}
	.content-title{
		border: 1px solid gray;
		border-radius: 30px 30px 30px 0;
		background-color: gray;
	}
	.content-img{
		
	}
	.content-msg{
		
	}
</style>
