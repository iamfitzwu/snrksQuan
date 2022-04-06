import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		tz: [{
				username: 'zbjbbd',
				// img: 'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA9772bf9f871e16ad4d035b0cb20a4b7c.jpg',
				content: '这是air jordan 第一代这是air jordan 第一代这是air jordan 第一代这是air jordan 第一代这是air jordan 第一代',
				imglist:['https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA9772bf9f871e16ad4d035b0cb20a4b7c.jpg',
				'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA0ce0051c84fee73e38359bf1222392b4.jpg',
				'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aAa41652bb6f7828c15febdcb2b138663b.jpg',
				'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA63cba28c0f9633dd4a1c4a86f6dd782a.jpg']
			},
			{
				username: 'llllll',
				imglist: ['https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA36d1ef744e6220d77c9e97d36e796aec.jpg',
				'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aAfc5f17808ea1c702c66b07d1b70ec41a.jpg',
				'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aAd02258c197627ed73d365afbbfab2b1f.jpg',
				'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aAf44a479a0f2fe2dfecc20f7c8489cad5.jpg',
				'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA1308e0af8aa4b7a566de0a251fac933c.jpg',
				'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA2205e4a9fb264c695dcd838bc52c69d3.jpg'],
				content: '这是air jordan 第六代这是air jordan 第六代这是air jordan 第六代这是air jordan 第六代这是air jordan 第六代这是air jordan 第六代'
			},
			{
				username: '热热热',
				imglist: ['https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA1f33491c8c05fcc63a994deeaca9037c.jpg',],
				content: '今天买的新鞋大家来kkkkk今天买的新鞋大家来kkkkk今天买的新鞋大家来kkkkk今天买的新鞋大家来kkkkk今天买的新鞋大家来kkkkk'
			},
			{
				username: 'zzzz',
				imglist: ['https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA591c10f215742a1f6377d123299ebcd0.jpg',
				'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA36be017655661b023f802aa748af3b39.jpg',
				'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aAc5b19541acee65f7b39333029bd0612b.jpg',],
				content: '史上最好看的李宁篮球鞋，是大家都可以入手的价格'
			},
			{
				username: '球鞋玩家',
				imglist: ['https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA37b504556d42af5b49ffe19bb7cee602.jpg',
				'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aA7afd7a10e2ccae0799bdb10f96e72756.jpg',
				'https://b0.bdstatic.com/ugc/ldmIk_-6MctywU-vwEh5aAaeff25b167a6c098681e69aa913d5ecd.jpg',
				],
				content: '性价比不太高的一双球鞋，但是实战好到爆炸'
			},
			{
				username: 'aaa',
				imglist: ['https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170517%2F6a41e78e98d6489b9ea6e1d518fa2561_th.png&refer=http%3A%2F%2Fimg.mp.sohu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639146371&t=ac4de69ed3411e9b114991c47db38a95',],
				content: '性价比不太高的一双球鞋，但是实战好到爆炸'
			}
		]
	},
    mutations: {
		chageTz(state,obj) {
			state.tz.push(obj);
		}
	},
    actions: {}
})
export default store