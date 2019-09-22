<!-- 组件的模板 -->
<template>
  <div class="singlefilm">
		<!-- 单个电影的标题 -->
		<home-title :title="title"/>
		<img src="film.images.medium" alt="">
		<div class="right">
			<h2>{{film.title}}</h2>
			<p>{{film.original_title}}</p>
			<p>分类
				<span v-for="genre in film.genres">
					{{genre}}/
				</span>
			</p>
			<p>主演
				<span v-for="cast in film.casts">
					{{cast.name}}/ 
				</span>
			</p>
			<p style="">
				喜欢：<span>{{film.wish_count}}</span>
				人气：<span>{{film.ratings_count}}</span>
			</p>
			<div class="description">
				{{film.summary}}
			</div>
			<a :href="film.alt" target="_blank" class="play">
				立即播放
			</a>
		</div>
  </div>
</template>

<!-- 组件中的数据 -->
<script>
// 引入了但是没有注册
import HomeTitle from '@/components/HomeTitle.vue'

export default {
	data() {
		return {
			title: "电影详情",
			film: {}
		}
	},
	async created(){
		// 当单个电影信息组件创建时，改变原标题的show值，使其隐藏
		// this.$root.$children[0]获取此组件的根组件的第一个孩子，即home-title，使其show=false
		this.$root.$children[0].show = false;

		// 获取单个电影的信息 this.$route.params.id 由filimslist传过过来的 电影id
		let {data} = await this.$axios.get('/api/v2/movie/subject/'+this.$route.params.id);
		this.film = data;
	},
	
	watch: {
		// 在这里并 不能 监控到路由的变化
		// $route: {
		// 	async handler(){
		// 		console.log("这里是singlefilm 我监控到路由变化了")
		// 	}
		// }
	},
	components: {
		HomeTitle
	}
}
</script>

<!-- 组件模板的css -->
<style scoped="">
.singlefilm {
	overflow: hidden;
	width: 1200px;
	margin: auto;
}
.singlefilm img {
	float: left;
}
.right {
	float: right;
	width: 800px;
	color: #fff;
}
.right p {
	color: #ccc;
	line-height: 36px;
}
.description {
	height: 200px;
	overflow: auto;
	color: #ccc;
}
.play {
	display: block;
	widows: 200px;
	height: 50px;
	line-height: 50px;
	background: #009451;
	color: #fff;
	border-radius: 5px;
	text-align: center;
	cursor: pointer;
	margin-top: 20px;
}
</style>
