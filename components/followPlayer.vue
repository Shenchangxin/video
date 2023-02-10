<template>
	<view class="followPlayer">
		<video id="myVideo" class="video" 
		objectFit="cover" 
		:src="'http://localhost:8080/video/'+item.src" 
		loop="true"
		:controls="false"
		@click="PlayerTo(list)"
		>
		<cover-view  class="iconfont icon-bofang icon" @click="click">播放</cover-view>
		</video>
	</view>
</template>

<script>
	import '../assets/css/iconcss/iconfont.css'
	
	export default {
		props:['item','index','list'],
		name:"followPlayer",
		data() {
			return {
				Play:false
			};
		},
		methods:{
			play(){
				if(this.Play===false){
					this.videoContext.play()
				}
				this.Play=true
			},
			pause(){
				if(this.Play===true){
					this.videoContext.pause()
				}
				this.Play=false
			},
			click(){
				if(this.Play===true){
					this.videoContext.pause()
					this.Play=false
				}else{
					this.videoContext.play()
					this.Play=true
				}
			},
			PlayerTo(res){
				uni.setStorage({
					key:'videoList',
					data:res
				})
				uni.navigateTo({
					
					url:'/pages/player/player'
				})
				
			}
		},
		onReady() {
			this.videoContext=uni.createVideoContext('myVideo',this)
			if(this.index===0){
				this.play()
			}
		}
	}
</script>

<style>
	.followPlayer{
		width: 100%;
		height: 100%;
	}
	.video{
		width: 80%;
		height: 100%;
		z-index: 19;
		position: relative;
	}
	.icon{
		position: absolute;
		bottom: 10px;
		right: 10px;
		color: #FFFFFF;
		font-size: 20px;
	}
</style>