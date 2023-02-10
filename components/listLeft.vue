<template>
	<view class="listLeft">
		<view class="author">
			{{item.author}}
		</view>
		<view class="title">
			{{item.title}}
		</view>
		<view class="box">
			<view class="music">
				@开心麻花，开心到家@
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props:['item'],
		name:"listLeft",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.listLeft{
		height: 150px;
		margin-left: 10px;
		color: white;
		width: 150px;
	}
	.author{
		height: 35px;
		line-height: 35px;
		font-size: 15px;
		
	}
	.title{
		width: 100%;
		line-height: 22px;
		font-size: 12px;
		word-wrap: break-word;
	}
	.music{
		height: 35px;
		line-height: 35px;
		font-size: 12px;
		width: 140px;
		animation: music 4s linear 0.2s infinite;
	}
	.box{
		width: 100px;
		overflow: hidden;
	}
	
	
	
	@keyframes music{
		0%{
			transform: translate3d(80%,0,0);
		}
		100%{
			transform: translate3d(-80%,0,0);
		}
	}
</style>