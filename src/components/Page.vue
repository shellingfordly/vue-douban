<!-- 组件的模板 -->
<template>
  <div class="filmspage">
		<ul>
			<li v-for="(page,index) in maxpage">
				<!-- 传数据 query:{page:index} -->
				<router-link :to='{path:"/",query:{page:index}}'>{{page}}</router-link>
			</li>
		</ul>
  </div>
</template>

<!-- 组件中的数据 -->
<script>
export default {
	props: ['maxpage'],
}
</script>

<!-- 组件模板的css -->
<style scoped="">
.filmspage ul {
	margin: 20px;
	text-align: center;
}
.filmspage ul li {
	display: inline-block;
	width: 30px;
	height: 30px;
	margin: 5px;
	line-height: 30px;
	background: #333;
	border: 1px solid #666;
	text-align: center;
	color: #fff;
	cursor: pointer;
}
a {
	display: block;
	height: 100%;
	color: #fff;
}
a.router-link-exact-active {
	background: #2AD487;
}
</style>
