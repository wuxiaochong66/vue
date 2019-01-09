<template>
	<router-link to='/banner/text'>
		<div id="ban1">
			<p>
				{{msg}}
			</p>
			<router-view></router-view>
		</div>
	</router-link>
</template>

<script>
	export default{
		data(){
			return{
				msg:'banner列表'
			}
		}
	}
</script>

<style>
	#ban1{
		width: 100%;
		height: 30px;
		background: yellow;
		line-height: 30px;
		text-align: center;
	}
</style>