<template>
	<view class="listRight">
		<view class="author-img">
			<image class="img" src="../static/img/author.jpg" @click="click"></image>
			<view class="iconfont icon-jiahao add" v-show="show" @click="hide"></view>
		</view>
		<view class="iconfont icon-heart-fill right-box" :style="color" @click="changeColor">
			
		</view>
		<view class="number">
			{{item.loveNumber}}
		</view>
		<view class="iconfont icon-tubiaozhizuo- right-box" @click="openComment">
			
		</view>
		<view class="number">
			{{item.commentNumber}}
		</view>
		<view class="iconfont icon-zhuanfa right-box">
			
		</view>
		<view class="number">
			{{item.shareNumber}}
		</view>
		<view class="around">
			<image class="img" src="../static/img/2-1.jpg"></image>
		</view>
	</view>
</template>

<script>
	import '../assets/css/iconcss/iconfont.css'
	export default {
		props:['item'],
		name:"listRight",
		data() {
			return {
				show:true,
				color:''
			};
		},
		methods:{
			hide(){
				this.show=false
			},
			changeColor(){
				this.color=this.color==='' ? "color:red;":''
			},
			change(){
				this.color="color:red;"
			},
			click(){
				uni.navigateTo({
					url:'/pages/user/user'
				})
			},
			openComment(){
				
				this.$emit('open')
			}
		}
	}
</script>

<style>
	.listRight{
		width: 50px;
		margin: 0 auto;
	}
	.author-img{
		height: 50px;
		width: 50px;
		border-radius: 50%;
		border: 2px solid #FFFFFF;
		position: relative;
	}
	.img{
		height: 50px;
		width: 50px;
		border-radius: 50%;
	}
	.right-box{
		width: 50px;
		height: 40px;
		margin-top: 13px;
		text-align: center;
		line-height: 40px;
		color: #FFFFFF;
		font-size: 33px;
	}
	.number{
		font-size: 10px;
		text-align: center;
		color: #FFFFFF;
		
	}
	.around{
		height: 50px;
		width: 50px;
		margin-top: 15px;
		animation: rotate 1.5s linear 0.2s infinite;
	}
	.add{
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background:red;
		position: absolute;
		bottom: -9px;
		left: 16px;
		text-align: center;
		line-height: 18px;
		color: #FFFFFF;
		font-size: 10px;
	}
	
	
	
	@keyframes rotate{
		0%{
			transform: rotate(0deg);
		}
		100%{
			transform: rotate(360deg);
		}
	}
</style>