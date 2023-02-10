<template>
	<view class="firstNav">
		<view class="iconfont icon-sousuo icon"></view>
		<view class="middle">
			<navigator open-type="switchTab" class="text" url="/pages/index/index">推荐</navigator> 
			<navigator open-type="navigate" class="text" url="/pages/city/city">同城</navigator> 
		</view>
	</view>
</template>

<script>
	import "../assets/css/iconcss/iconfont.css"
	export default {
		name:"first-nav",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.firstNav{
		width: 100%;
		height: 35px;
		position: fixed;
		top: 25px;
		left: 0;
		margin: 0 auto;
		line-height: 35px;
		
		z-index: 20;
	}
	.icon{
		position: absolute;
		top: 0;
		left: 0;
		color: #FFFFFF;
		width: 20%;
		text-align: center;
		font-size: 20px;
	}
	.middle{
		text-align: center;
	}
	.text{
		display: inline;
		color: #FFFFFF;
		margin: 0 10px;
	}
</style>