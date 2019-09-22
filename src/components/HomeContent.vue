<!-- 组件的模板 -->
<template>
  <div class="content">
		<films-list></films-list>
		<page :maxpage="maxpage"></page>
  </div>
</template>

<!-- 组件中的数据 -->
<script>
import FilmsList from '@/components/FilmsList.vue'
import Page from '@/components/Page.vue'
	
export default {
	data() {
		return {
			maxpage: 13,
		}
	},
	components: {
		FilmsList,
		Page
	},
	// 直接写死，不获取了
	// async created(){
	// 	let {data:{count},data:{total}} = await this.$axios.get('/api/v2/movie/top250?count=20&&start=0');
	// 	this.maxpage = Math.ceil(total/count);
	// }
}
</script>

<!-- 组件模板的css -->
<style scoped="">
.content {
	width: 1200px;
	margin: auto;
	background: lightblue;
}
</style>
