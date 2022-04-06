<template>
	<view class="listLeft">
		<view class="author">
			sina
		</view>
		<view class="title">
			nihaonihaonihaonihaonihaonih
		</view>
		<view class="box">
			<view class="music">
				你要的爱你要的爱你要的爱你要的爱你要的爱
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"list",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.listLeft{
	height: 150px;
	margin-left: 10px ;
	color: #FFFFFF;
	width: 150px;
	
}

.author{
	height: 35px;
	line-height: 35px;
	font-size: 17px;
}

.title{

	line-height: 20px;
	font-size: 15px;
	width: 100%;
	word-wrap: break-word;
}
.box{
	width: 100px;
	overflow: hidden;
}
.music{
	height: 35px;
	line-height: 35px;
	font-size: 15px;
	width: 200px;
	animation: music 4s linear 0.2s infinite;
}

@keyframes music{
	0%{
		transform: translate3d(80%,0,0);
	}
	100%{
		transform: translate3d(-80%,0,0);
	}
}
</style>