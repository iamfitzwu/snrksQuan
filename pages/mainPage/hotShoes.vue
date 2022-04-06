<template>
	<view class="videoList">
		<view class="swiper-box">
			<swiper class="swiper"  :vertical="true" @change="changeplay" @touchstart="touchStart" @touchend="touchEnd">
				<swiper-item v-for="(item,index) in videos" :key="item.id">
					<view class="swiper-item"  style="color: #000000;">
						<video-player @changeClick='changeClick' ref="player" :video="item" :index="index"></video-player>
					</view>
					<view class="listleftbox">
						<list-left></list-left>
					</view>
					<!-- <view class="listrightbox">
						<list-right ref="right"></list-right>
					</view> -->
				</swiper-item>
			</swiper>
		</view>
		
	</view>
</template>

<script>
	import videoPlayer from './videoPlayer.vue'
	import listLeft from './listLeft.vue'
	var time = null
	export default {
		props:['list'],
		name:"videoList",
		components:{
			videoPlayer,
			listLeft
		},
		data() {
			return {
				videos:["https://klxxcdn.oss-cn-hangzhou.aliyuncs.com/histudy/hrm/media/bg1.mp4","https://klxxcdn.oss-cn-hangzhou.aliyuncs.com/histudy/hrm/media/bg1.mp4"],
				pageStatrY:0,
				pageEndY:0,
				page:0
			};
		},
		//监听传过来的list
		watch:{
			//当list发生改变 就触发这个方法 所以用watch
			list(){
				this.videos = this.list
				console.log(this.videos)
			}
		},
		methods:{
			changeClick(){
				//双击点赞 调用子组件listright的方法
				this.$refs.right[0].change()
			},
			//上下滑动触发事件
			changeplay(res){
				clearTimeout(time)
				this.page = res.detail.current
				time=setTimeout(()=>{
					if(this.pageStatrY < this.pageEndY){
						console.log('向上滑动')
						setTimeout(()=>{
							this.$refs.player[this.page].player()
						},20)
						
						this.$refs.player[this.page+1].pause()
						this.pageStatrY=0
						this.pageEndY=0
					}else{
						console.log('向下滑动')
						setTimeout(()=>{
							this.$refs.player[this.page].player()
						},20)
						
						this.$refs.player[this.page-1].pause()
						this.pageStatrY=0
						this.pageEndY=0
					}
				},1)	
			},
			//获取向下滑动的值
			touchStart(res){
				
				this.pageStatrY = res.changedTouches[0].pageY
				console.log(this.pageStatrY)
			},
			//获取向上滑动的值
			touchEnd(res){		
				
				this.pageEndY = res.changedTouches[0].pageY
				console.log(this.pageEndY)
			}
		}
	}
</script>

<style>
.videoList{
	height: 770px;
	width: 100%;
}
.swiper-box{
	height: 100%;
	width: 100%;
}
.swiper{
	height: 100%;
	width: 100%;
}
.swiper-item{
	height: 100%;
	width: 100%;
	z-index:19;
}
.title{
	color: #FFFFFF;
}
/deep/.listleftbox{
	z-index:20;
	position: absolute;
	bottom: 50px;
	left: 10px;
}
/deep/.listrightbox{
	z-index:20;
	position: absolute;
	bottom: 50px;
	right: 10px;
	color: #FFFFFF;
}
</style>