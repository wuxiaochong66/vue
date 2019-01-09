<template>
	<div class="ban2">
		<p @click="one()">
			Banner列表里面的内容
		</p>
	</div>
</template>

<script>
	export default{
		methods:{
			one(){
				alert('ok')
			}
		}
	}
</script>

<style>
	.ban2{
		width: 100%;
		height: 30px;
		line-height: 30px;
		text-align: center;
		background: green;
	}
</style>