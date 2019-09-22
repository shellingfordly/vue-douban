<!-- 组件的模板 -->
<template>
  <div class="filimslist">
		<ul>
			<!-- 
				绑定:key="index"
				给route传递动态路由 	params:{id:}
				点击时 访问路由/film/:id 到route中去找组件
			-->
			<router-link :to="{name:'SingleFilm',params:{id:subject.id}}" :key="index" tag="li" v-for="(subject,index) in subjects">
				<img :src="subject.images.medium" alt="">
				<p>{{subject.title}}</p>
				<p>
					<span v-for="genre in subject.genres">{{genre}}</span>
				</p>
			</router-link>
		</ul>
  </div>
</template>

<!-- 组件中的数据 -->
<script>
export default {
	data() {
		return {
			subjects: []
		}
	},
	async created(){
		let {data:{subjects}} = await this.$axios.get('/api/v2/movie/top250?count=20&&start=0');
		this.subjects = subjects;
		// console.log(subjects)
	},
	watch: {
		$route: {
			// 点击 page li 换页 时会触发路由变化进入此函数
			// 但是点击 图片信息 li 无法监控到路由变化  则无法触发此函数
			// 为什么？？？？？？？
			async handler(){
				// 路由发送变化时，获取新的电影数据
				let {data:{subjects}} = await this.$axios.get('/api/v2/movie/top250?count=20&&start='+this.$route.query.page*20);
				this.subjects = subjects;
			}
		}
	}
}
</script>

<!-- 组件模板的css -->
<style scoped="">
.filimslist ul {
	display: flex;
	flex-wrap: wrap;
	list-style-type: none;
}
.filimslist ul li {
	width: 22%;
	margin: 10px auto;
	background: #222;
	cursor: pointer;
}
.filimslist ul li img{
	width: 100%;
}
.filimslist ul li h4{
	color: #ccc;
}
.filimslist ul li p{
	color: #666;
}
</style>
