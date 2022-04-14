<template>
	<view>
		<view v-for="(item,index) in shoestalk" :key="index" class="main" @click="tz(index)">
			<view class="content-img">
				<image :src="item.img" mode="" style="width:200rpx;height: 150rpx;">
				</image>
			</view>
			<view style="margin: 10px;">
				<view class="content-title">
					<image src="../../static/daohang/收藏2.png" mode="" style="width: 15px;height: 28rpx;"></image>
					<text style="font-size: 14px;">{{item.title}}</text>
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
						img:'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA9772bf9f871e16ad4d035b0cb20a4b7c.jpg',
						msg:'这是air jordan第一代，是aj品牌的开端，代表了一代人的记忆！可以说是最热门的鞋子了。',
						title:'Air Jordan 1',
						rate:5
					},
					{
						img:'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA36d1ef744e6220d77c9e97d36e796aec.jpg',
						msg:'这是air jordan第六代，他与前几代不同的设计是它采用的气垫非常的舒服，以及包裹性非常的好',
						title:'Air Jordan 6',
						rate:4.5
					},
					{
						img:'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA1f33491c8c05fcc63a994deeaca9037c.jpg',
						msg:'镂空加上最新的科技，以及史上最便宜的棉花糖配合',
						title:'全城9',
						rate:4
					},
					{
						img:'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA591c10f215742a1f6377d123299ebcd0.jpg',
						msg:'争议颇大的球鞋，但是性能是毋庸置疑的',
						title:'驭帅14',
						rate:3.5
					},
					{
						img:'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA37b504556d42af5b49ffe19bb7cee602.jpg',
						msg:'这是air jordan第四代，而且这是一双联名款，在市面上很少能见到，收到了无数年轻人的追捧',
						title:'Air Jordan 4',
						rate:4.5
					},
					{
						img:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170517%2F6a41e78e98d6489b9ea6e1d518fa2561_th.png&refer=http%3A%2F%2Fimg.mp.sohu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639146371&t=ac4de69ed3411e9b114991c47db38a95',
						msg:'这是air jordan第七代，它的设计是很好看的，非常多年轻人喜欢这款鞋子',
						title:'Air Jordan 7',
						rate:3
					},
					{
						img:'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA82587b039e49e1efe08d2758e6de4101.jpg',
						msg:'这是yeezy 350，是adidas推出的一款鞋子，受到了一致好评。',
						title:'Yeezy 350',
						rate:4.5
					},
					{
						img:'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA7fe8c125b0a9515a958507fd4788d763.jpg',
						msg:'这是Nike品牌推出的一双板鞋，名为dunk，上脚感觉良好，但是外观非常好看。性价比较高',
						title:'Nike dunk',
						rate:4
					},
					{
						img:'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aAbb1fec224d06475402404315ed8ffd92.jpg',
						msg:'这是安踏推出的汤普森第六代，简称为KT 6，是一款非常好的实战鞋，而且价格比较亲民',
						title:'Anta KT 6',
						rate:3.5
					},
					{
						img:'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA75d0d4f70987c4949640249c5622f0fe.jpg',
						msg:'这是vans的一款板鞋，是大多数滑板爱好者都必不可少的一双鞋子',
						title:'vans',
						rate:3.5
					},
				]
			}
		},
		methods:{
			tz(index){
				let item = encodeURIComponent(JSON.stringify(this.shoestalk[index]));
				uni.navigateTo({
					url:'./detail?item='+item
				})
			}
		}
	}
</script>

<style scoped>
	.main{
		width: 750rpx;
		height: 200rpx;
		display: flex;

		margin-bottom: 15px;
	}
	.content-img{
		width: 180rpx;
		height: 180rpx;
		margin: 10px;
	}
	.content-title{
		height: 100%;
		border: 1px solid #e6e9f0;
		border-radius: 30px 30px 30px 0;
		background-color:#EDEDED;
		/* margin-bottom: 10px; */
		/* display: inline; */
		display: flex;
		display:inline-block;
		display:inline;
		padding: 5px;
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
