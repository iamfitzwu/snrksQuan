<template>
    <view class="page">
		<view class="search">
			 <input class="search-input" confirm-type="search"  placeholder="请输入搜索内容"/>	 
		</view>
		
        <!-- 菜单 -->
        <view class="menu">
            <scroll-view class="leftScroll" scroll-y scroll-with-animation style="height: calc(100vh);" >
                <view 
                :class="isActive==index?'itemLeftTwo':'itemLeft'" 
                :style="" v-for="(item,index) in leftItems" 
                :key="index" 
                @click="chooseClick(index)">
                {{item.val}}
                </view>
            </scroll-view>
            <scroll-view class="rightScroll" scroll-y scroll-with-animation style="height: calc(100vh);" >
				<view v-if="array.length === 0">暂无数据...</view>
				<view v-else>
					<view v-for="(item,index) in array" :key="index" @click="click()">
						<shoesItem :shoesItem="item"></shoesItem>
					</view>
				</view>
            </scroll-view>
        </view>
    </view>
</template>

<script>
	import shoesItem from '../../components/shoesItem.vue'
	export default {
		components: {
			shoesItem
		},
		data() {
			return {
				isActive: 0,
				leftItems:[
				{val:'热门实战'},
				{val:'热门休闲'},
				{val:'高颜值出街'},
				{val:'舒适压马路'},
				{val:'日常休闲鞋'},
				{val:'New Balance'},
				{val:'AJ正代'},
				{val:'LeBron系列'},
				{val:'KD系列'},
				{val:'Kobe系列'},
				{val:'Nike球星款'},
				{val:'adidas球星款'},
				{val:'Jordan球星款'},
				{val:'韦德之道系列'},
				{val:'安踏系列'},
				{val:'匹克系列'},
				{val:'adidas团队'},
				{val:'Nike团队'},
				{val:'李宁团队款'},
				{val:'Jordan团队'},
				{val:'其他'}
			  ],
			  site:[
				[
					{
						shoesImgOne: "",
						nameOne:"adidas trae young1",
						shoesImgTwo: "",
						nameTwo: "adidas trae young1",
						img:'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA1361dfc320f7a801e1a55b2fca5ae656.jpg?x-bce-process=image/watermark,image_NDU0ZjAyZDU5YjQ1LnBuZw==,bucket_searchbox,w_37,text_QHpiamJiYmJk,type_RlpMYW5UaW5nSGVp,size_37,x_25,y_25,interval_4,color_FFFFFF,effect_softoutline,shc_000000,blr_2,align_1',
						msg:'这是adidas的一双实战写，外观很好看非常受大家欢迎',
						title:'adidas trae young1',
						rate:4.5
					},
					{
						shoesImgOne:"https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA9772bf9f871e16ad4d035b0cb20a4b7c.jpg'",
						nameOne:"aj3",
						shoesImgTwo: "",
						nameTwo: "dd",

					},
				],
				[
					{	
						shoesImgOne:"https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA9772bf9f871e16ad4d035b0cb20a4b7c.jpg'",
						nameOne:"aj2",
						shoesImgTwo: "",
						nameTwo: "ss",
					},
					{
						shoesImgOne:"",
						nameOne:"aj1",
						shoesImgTwo: "",
						nameTwo: "aa",
					},
				]
			  ],
			  array:[]
			}
		},
  created() {
    // 初始化数据默认选中第一个
    this.array = this.site[0];
  },
  methods: {
    chooseClick(index) {
      this.array = [];
      this.isActive = index;
	  if(index+1 > this.site.length) {
		  this.array = [];
	  } else {
		  this.array = this.site[index];
	  }
    },
	click(){
		let item = encodeURIComponent(JSON.stringify(this.site[0][0]));
		uni.navigateTo({
			url:'../recovery/detail?item='+item
		})
	},
  }
}
</script>

<style  scoped>
	.page {
		
	}
	.search {
		background-color: #FFFFFF;
		height: 90rpx;
		padding-top: 3rpx;
	}
	.search-input {
		border: #cfcfcf 1rpx solid;
		border-radius: 10rpx;
		height: 70rpx;
		margin: 15rpx;
		text-align: center;
	}
	.menu {
		margin-top: 10rpx;
		display: flex;
		background-color:#f3f3f3 ;
	}
	.leftScroll {
		font-size: 28rpx;
		width: 40%;
		background-color: #FFFFFF;
		
	}
    .itemLeft {
		width: 192rpx;
		height: 100rpx;
		line-height: 80rpx;
		padding-left: 28rpx;
		padding-top: 30rpx;
		color: #333333;
		background-color: #FFFFFF;

	}   
    .itemLeftTwo {
        width: 100%;
        height: 100rpx;
        line-height: 80rpx;
        padding-left: 20rpx;
		padding-top: 30rpx;
        background-color: #f3f3f3;
        color: #000000;
        border-left: 6px solid #1296db;
		font-weight: bold;
    }    
    .rightScroll {
		display: flex;
		flex-direction: row;
        background-color: #FFFFFF;
        width: 100%;
		margin: 20rpx 20rpx 20rpx;
		border-radius: 20rpx;
	}
    .bigConScro {
        padding: 0 30rpx;
	}
    .topTitle {
        margin-top: 20rpx;
        font-size: 28rpx;
        font-weight: 400;
        color: #333333;
    }
        
                


</style>