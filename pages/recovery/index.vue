<template>
	<view>
		<Faxian></Faxian>
		<!-- <button type="default" @click="tz()">跳转</button> -->
	</view>
</template>

<script>
	import Faxian from './Faxian.vue'
	
	export default{
		components:{
			Faxian
		},
		// methods:{
		// 	tz(){
		// 		uni.navigateTo({
		// 			url:'./detail',
		// 		})
		// 		console.log('aaa')
		// 	}
		// }
	}
</script>

<style>
	
</style>
