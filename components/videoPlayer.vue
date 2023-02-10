<template>
	<view class="videoPlayer">
		<video class="video" 
		id="myVideo"
		:src="'http://localhost:8080/video/'+video.src"
		@click="click"
		:loop="true" 
		:controls="false"
		:autoplay="autoplay"
		></video>
		
	</view>
	
</template>

<script>
	var timer=null
	export default {
		
		props : ['video','index'],
		data() {
			return {
				play:false,
				dblClick:false,
				autoplay:false
			};
		},
		onReady() {
			this.videoContext=uni.createVideoContext('myVideo',this)
		},
		methods:{
			click(){
				clearTimeout(timer)
				this.dblClick=!this.dblClick
				timer=setTimeout(()=>{
					if(this.dblClick){
						//单击
						if(this.play===false){
							this.playThis()
						}else{
							this.pause()
						}
					}else{
						//双击
						this.$emit('changeClick')
					}
					this.dblClick=false
				},300)
				
			},
			player(){
				if(this.play===false){
					this.videoContext.seek(0)
					this.videoContext.play()
					this.play=true
				}
				
			},
			pause(){
				if(this.play===true){
					this.videoContext.pause()
					this.play=false
				}
				
			},
			playThis(){
				if(this.play===false){
					this.videoContext.play()
					this.play=true
				}
			},
			auto(){
				if(this.index===0){
					this.autoplay=true
					this.play=true
				}
			}
		},
		created() {
			this.auto()
		}
		
	}
</script>

<style>
	.videoPlayer{
		width: 100%;
		height: 100%;
	}
	.video{
		width: 100%;
		height: 100%;
	}
</style>