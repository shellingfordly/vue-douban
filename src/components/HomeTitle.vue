<!-- 组件的模板 -->
<template>
	<div class="title">
		<h1>
			{{title}}
		</h1>
	</div>
</template>

<!-- 组件中的数据 -->
<script>
export default {
	props: ["title"],
}
</script>

<!-- 组件模板的css -->
<style scoped>
	h1 {
		width: 1200px;
		color: #2ad487;
		line-height: 80px;
		border-bottom: 3px solid #2ad487;
		background-color: #222;
		text-indent: 20px;
		margin: 0 auto 20px;
	}
</style>
