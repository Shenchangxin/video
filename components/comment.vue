<template>
	<view class="comment">
		<view class="comment-header">
			<view class="header-number">
				2.5w条评论
			</view>
			<view class="iconfont icon-chahao icon-close" @click="close">
				
			</view>
		</view>
		<scroll-view scroll-y="true" class="comment-list">
			<view class="item">
				<view class="img-box">
					<image src="../static/img/1-1.jpeg" class="img"></image>
					
				</view>
				<view class="comment-content">
					<view class="name">
						张三
					</view>
					<view class="content">
						这个视频很真是
					</view>
				</view>
				<view class="icon-box">
					<view class="iconfont icon-heart-fill icon-love">
						
					</view>
					<view class="love-number">
						520
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="comment-footer">
			留下你的精彩评论吧
		</view>
	</view>
</template>

<script>
	import '../assets/css/iconcss/iconfont.css'
	export default {
		name:"comment",
		data() {
			return {
				
			};
		},
		methods:{
			close(){
				this.$emit('close')
			}
		}
	}
</script>

<style>
	.comment{
		background: white;
		height: 500px;
		border-radius: 15px 15px 0 0;
		width: 100%;
		
	}
	.comment-header{
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		height: 25px;
		line-height: 25px;
		
	}
	.header-number{
		width: 100%;
		text-align: center;
		font-size: 15px;
		color: black;
		
	}
	.icon-close{
		position: absolute;
		top: 0;
		right: 15px;
		font-size: 20px;
	}
	.comment-list{
		height: 425px;
		width: 100%;
		
	}
	.item{
		height: 100px;
		width: 100%;
		
	}
	.img-box{
		float: left;
		padding: 5px 15px;
	}
	.img{
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
	.comment-content{
		float: left;
		width: 70%;
		height: 50px;
		margin-top: 10px;
		
	}
	.name{
		width: 100%;
		height: 25px;
		line-height: 25px;
		font-size: 17px;
	}
	.content{
		width: 100%;
		height: 25px;
		line-height: 25px;
		font-size: 14px;
	}
	.icon-box{
		float: right;
		width: 10%;
		height: 50px;
		margin-top: 10px;
	}
	.icon-love{
		width: 100%;
		height: 25px;
		line-height: 25px;
		font-size: 15px;
	}
	.love-number{
		width: 100%;
		height: 25px;
		line-height: 25px;
		font-size: 15px;
	}
	.comment-footer{
		height: 50px;
		width: 100%;
		line-height: 50px;
		color: #666666;
		font-size: 20px;
		padding-left: 10px;
	}
</style>