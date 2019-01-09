<template>
  <div class="index">
	    <welcome></welcome>
	    <banner></banner>
  </div>
</template>

<script>

import welcome from '../components/welcome';
import banner from '../components/banner'
export default {
	methods:{
		
	},
	components: {
		welcome,
		banner
	}
}
  
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	.index{
		width: 100%;
		height: auto;
		float: left;
	}
</style>
