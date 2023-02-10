<template>
	<view class="">
		<view class="personalList">
			<view class="item">
				<video 
				class="video" 
				src="http://localhost:8080/video/1-1.mp4"
				objectFit="cover"
				loop="true"
				autoplay="true"
				:controls="false"
				>
				</video>
				<view class="love-box">
					<text class="iconfont icon-heart-fill love-icon">12w</text>
				</view>
			</view>
		</view>
		<view class="more">
			没有更多了
		</view>
		<view class="ground"></view>
	</view>
</template>

<script>
	import '../assets/css/iconcss/iconfont.css'
	export default {
		name:"personalList",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.ground{
		width: 100%;
		height: 50px;
		background: black;
	}
	.personalList{
		
		width: 100%;
		overflow: hidden;
		background: black;
		padding: 0 0.5%;
	}
	.item{
		width: 33%;
		height: 120px;
		float: left;
		position: relative;
		
	}
	.love-box{
		position: absolute;
		bottom: 5px;
		left: 10px;
		
	}
	.love-icon{
		font-size: 14px;
		color: white;
	}
	.video{
		width: 100%;
		height: 100%;
		
	}
	.more{
		width: 100%;
		height: 30px;
		line-height: 30px;
		text-align: center;
		font-size: 12px;
		color: #999999;
		background: black;
	}
</style>