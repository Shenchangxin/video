<template>
	<view class="">
		<view class="followNav">
			<view class="iconfont icon-xiangji icon">
				<text class="icon-text">随拍</text>
			</view>
			<view class="middle">
				<navigator 
				open-type="switchTab" 
				class="text" 
				url="/pages/follow/follow"
				:style="follow"
				>
					关注
				</navigator> 
				<navigator 
				open-type="switchTab" 
				class="text" 
				:style="friend"
				url="/pages/friend/friend"
				>
					好友
				</navigator> 
			</view>
		</view>
		<view class="ground">
			
		</view>
	</view>
	
</template>

<script>
	import '../assets/css/iconcss/iconfont.css'
	export default {
		props :['page'],
		name:"followNav",
		data() {
			return {
				follow:'',
				friend:''
			};
		},
		mounted() {
			if(this.page==="friend"){
				this.friend="border-bottom: 2px solid #F0AD4E;"
			}else{
				this.follow="border-bottom: 2px solid #F0AD4E;"
			}
		}
	}
</script>

<style>
	.followNav{
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
		top: 0px;
		left: 5px;
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
		font-size: 15px;
	}
	.icon-text{
		font-size: 15px;
		margin-left: 5px;
	}
	.ground{
		width: 100%;
		height: 60px;
		
	}
</style>