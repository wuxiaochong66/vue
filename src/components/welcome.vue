<template>
	<div class="left">
		<div id="head">
			<div class="one" @dblclick="toogle()" onselectstart="return false;">菜单栏</div>
			<div :class="activeClass == idx ? 'active':''" v-for="(i,idx) in arr" @click="getItme(idx)" v-show="isShow">{{i}}</div>
		</div>
		<component :is="con"></component>
		
	</div>

</template>

<script>
	import myone from './my-one'
	import mytwo from './my-two'
	import mythr from './my-three'
	export default {
		data() {
			return {
				con: '',
				active: 'active',
				arr:['老师','学生','家长'],
				arr1:['myone','mytwo','mythr'],
				activeClass: -1,
				isShow:false
			}    
		},
		components: {     
			myone,
			mytwo,
			mythr    
		},
		methods: {
			getItme(idx) {
		      this.activeClass = idx;  // 把当前点击元素的index，赋值给activeClass
		      this.con=this.arr1[idx]
		   },
		   toogle(){
		   	this.isShow = !this.isShow;
		   	if(this.isShow==false){
		   		this.activeClass=-1;
		   		this.con=''
//				console.log('ok')
//				console.log(this.activeClass=-1)
//				console.log(this.con='')
		   	}
		   }
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	.left{
		width: 100%;
		height: auto;
		float: left;
	}
	#head {
		width: 30%;
		height: auto;
		background: darkgray;
		float: left;
	}
	
	#head div {
		width: 100%;
		height: 80px;
		cursor: pointer;
		border-bottom: 3px solid red;
		line-height: 80px;
		text-align: center;
	}
	
	#head div:last-child {
		border: none;
	}
	
	.active {
		/*background: red;*/
		color: white;
	}
</style>