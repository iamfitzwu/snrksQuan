<template>
	<view class="pages">
		<view v-for="(item,index) in Data">
			<postItem :key="index" :postItem="item"></postItem>
		</view>

	</view>
</template>

<script>
	import postItem from '../../components/postItem.vue'
	export default{
		components:{
			postItem
		},
		data(){
			return {
				Data: [
					{
						username: "yonghu1234",
						createtime: "11-24 02:44",
						content: "aaaaaaaaaaa",
						imgUrl: "222222222",
						num1: 10,
						num2: 20,
						num3: 3
					},
					{
						username: "yonghu",
						createtime: "11-24 02:44",
						content: "aaaaddddddaaaa",
						imgUrl: "222222222",
						num1: 20,
						num2: 20,
						num3: 30
					},
					{
						username: "aksudg",
						createtime: "11-24 02:44",
						content: "aavvvvvvaaa",
						imgUrl: "222222222",
						num1: 10,
						num2: 2,
						num3: 30
					}
				]
			}
		}
	}
</script>

<style scoped>
	.pages{
		background-color: #EDEDED;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
