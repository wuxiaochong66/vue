<template>
	<router-link to='/banner'>
		<div class="banner">
			<p>
				Banner
			</p>
		</div>
	</router-link>
</template>

<script>
	export default{
		
	}
</script>

<style>
	.banner{
		width: 100%;
		height: 100px;
		float: left;
		cursor: pointer;
	}
	.banner p{
		font-size: 32px;
		color: greenyellow;
		text-align: center;
		line-height: 100px;
		background: red;
	}
	.banner p a{
		text-decoration: none;
		color: greenyellow;
	}
</style>