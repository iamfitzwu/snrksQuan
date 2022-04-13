<template>
	<view class="listright">
		<view class="author-img">
			<image mode="widthFix" src="../static/img/author.jpg" class="img"></image>
			<view class="iconfont icon-jiahao add" v-show="show" @click="hide"></view>
		</view>
		<view class="iconfont icon-xin right-box" :style="color" @click="changeColor">
			
		</view>
		<view class="number">
			123
		</view>
		<view class="iconfont icon-53pinglun- right-box">
			
		</view>
		<view class="number">
			521
		</view>
		<view class="iconfont icon-fenxiang right-box">
			
		</view>
		<view class="number">
			521
		</view>
		<view class="around">
			<image src="../static/logo.png" class="img"></image>
		</view>
	</view>
</template>

<script>
	export default {
		name:"listright",
		data() {
			return {
				show:true,
				color:''
			};
		},
		methods:{
			hide(){
				this.show =false
			},
			//点击爱心变红（即点赞）或者变白（取消点赞）
			changeColor(){
				this.color = this.color === ''?'color:red;':''
			},
			//双击点赞
			change(){
				this.color = "color:red;"
			}
		}
	}
</script>

<style>
.listright{
	width: 50px;
	margin: 0 auto;
}
.author-img{
	width: 50px;
	height: 50px;
	border-radius: 50%;
	border: 3px solid #FFFFFF;
	position: relative;
}
.right-box{
	width: 50px;
	height: 40px;
	margin-top: 13px;
	text-align: center;
	line-height: 40px;
	color: #FFFFFF;
	font-size: 30px;
}
.img{
	width: 50px;
	height: 50px;
	border-radius: 50%;
}

.number{
	font-size: 10px;
	text-align: center;
	color: #FFFFFF;
}
.around{
	margin-top: 15px;
	width: 50px;
	height: 50px;
	animation: rotate 1.5s linear 0.2s infinite;
}
.add{
	background-color: red;
	position: absolute;
	bottom: -9px;
	left:16px;
	text-align: center;
	line-height: 18px;
	color: #FFFFFF;

}

@keyframes rotate{
	0%{
		transform: rotate(0deg);
	}
	100%{
		transform: rotate(360deg);
	}
}
</style>