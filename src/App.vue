<!-- 组件的模板 -->
<template>
	<!-- 根组件 -->
  <div id="app">
		<!-- 主页  所有电影信息  标题 -->
    <home-title :title="title" v-if="show" />
		<!-- 将home-content渲染到这里 -->
		<router-view />
		<!-- <home-content></home-content> -->
  </div>
</template>

<!-- 组件中的数据 -->
<script>
// 导入 HomeTitle组件 @表示当前目录
import HomeTitle from '@/components/HomeTitle.vue'
import HomeContent from '@/components/HomeContent.vue'

export default {
  name: 'App',
	data(){
		return {
			title: "豆瓣电影Top250",
			show: true
		}
	},
	components: {
		HomeTitle,
		HomeContent
	},
	watch: {
		$route: {
			async handler(){
				// 监控路由变会 根 的时候将原标题显示
				this.show = true;
			}
		}
	},
	// 直接写死，不获取了
	// async created(){
	// 	let {data:{title}} = await this.$axios.get('/api/v2/movie/top250?count=20&&start=0');
	// 	this.title = title;
	// }
}
</script>

<!-- 组件模板的css -->
<style>
*	{
	margin: 0;
	padding: 0;
}
body {
	background: #222;
}
</style>
