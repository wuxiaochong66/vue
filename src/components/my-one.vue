<template>
	<div class="my-one">
		<ul class="hed">
			<li v-for="til in title">{{til}}</li>
		</ul>
		<ul class="bot">
			<li v-for="(con,index) in content">
				<router-link :to=con.path>
					{{con.name}}
					<p>-------</p>
				</router-link>
			</li>
			<!--<li v-for="con in content">{{con.age}}</li>
			<li v-for="con in content">{{con.jibie}}</li>-->
		</ul>
		<ul class="age">
			<li v-for="con in content">
				{{con.age}}
				<p>--------</p>
			</li>
		</ul>
		<ul class="jibie">
			<li v-for="con in content">
				{{con.jibie}}
				<p>------</p>
			</li>
			
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				title:{
					'name':'姓名',
					'age':'年龄',
					'jibie':'级别'
				},
				content:[
					{name:'张三',age:'25',jibie:'初级',path:'/banner'},
					{name:'李四',age:'25',jibie:'中级',path:'/banner/text'},
					{name:'王五',age:'25',jibie:'高级',path:'/banner'}
				]
			}
		}
	}
</script>

<style>
	.my-one{
		color: red;
		text-align: center;
		width: 70%;
		float: left;
		height: 329px;
		line-height: 30px;
	}
	.my-one .hed{
		width: 100%;
		height: 39px;
		list-style: none;
	}
	.my-one .hed li{
		float: left;
		width: 30%;
		border: 1px solid darkgray;
		border-right: none;
	}
	.my-one .hed li:last-child{
		border-right: 1px solid darkgrey;
	}
	.my-one .bot,.age,.jibie{
		width: 30.2%;
		height: 300px;
		list-style: none;
		float: left;
		margin-top: -10px;
		margin-left: -0.5px;
	}
	.my-one .bot li,.age li,.jibie li{
		border: 1px solid darkgray;
		border-top: none;
	}
	.my-one .bot li,.age li{
		border-right: none;
	}
	.bot a{
		text-decoration: none;
		color: red;
	}
</style>