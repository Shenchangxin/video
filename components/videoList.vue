<template>
	<view class="videoList">
		<view class="swiper-box">
			<swiper class="swiper" 
			:vertical="true" 
			@change="change"
			@touchstart="touchStart"
			@touchend="touchEnd"
			
			>
				<swiper-item v-for="(item,index) of videos" :key="item.id">
					<view class="swiper-item" style="color: #000000;">
						<video-player 
						@changeClick="changeClick" 
						ref="player" 
						:video="item"
						:index="index"
						></video-player>
					</view>
					<view class="left-box">
						<list-left :item="item"></list-left>
					</view>
					<view class="right-box">
						<list-right @open="openComment" :item="item" ref="right"></list-right>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view v-show="show" class="comment-box">
			<comment @close="close"></comment>
		</view>
		
	</view>
</template>

<script>
	import videoPlayer from "./videoPlayer.vue"
	import listLeft from "./listLeft.vue"
	import listRight from "./listRight.vue"
	import comment from "./comment.vue"
	var time=null
	export default {
		props:['list'],
		components : {
			videoPlayer,
			listLeft,
			listRight,
			comment
		},
		name:"videoList",
		data() {
			return {
				videos:[],
				pageStartY:0,
				pageEndY:0,
				page:0,
				show:false
			};
		},
		watch:{
			list(){
				this.videos=this.list
				
			}
		},
		methods:{
			changeClick(){
				//双击点赞操作,调用listRight内的方法
				this.$refs.right[0].change()
			},
			change(res){
				clearTimeout(time)
				this.page=res.detail.current
				time=setTimeout(()=>{
					if(this.pageStartY<this.pageEndY){
						
						this.$refs.player[this.page].player()
						this.$refs.player[this.page+1].pause()
						this.pageStartY=0
						this.pageEndY=0
					}else{
						
						this.$refs.player[this.page].player()
						this.$refs.player[this.page-1].pause()
						this.pageStartY=0
						this.pageEndY=0
					}
				},1)
				
			},
			touchStart(res){
				this.pageStartY=res.changedTouches[0].pageY
				
			},
			touchEnd(res){
				this.pageEndY=res.changedTouches[0].pageY
				
			},
			openComment(){
				if(this.show===false){
					this.show=true
				}
			},
			close() {
				if(this.show===true){
					this.show=false
				}
			}
		}
	}
</script>

<style>
	.videoList{
		width: 100%;
		height: 100%;
		
	}
	.swiper-box{
		width: 100%;
		height: 100%;
	}
	.swiper{
		width: 100%;
		height: 100%;
	}
	.swiper-item{
		width: 100%;
		height: 100%;
		z-index: 19;
	}
	.left-box{
		z-index: 20;
		position: absolute;
		bottom: 50px;
		left: 10px;
	}
	.right-box{
		z-index: 20;
		position: absolute;
		bottom: 50px;
		right: 10px;
	}
	.comment-box{
		z-index: 22;
		position: fixed;
		bottom:0;
		left: 0;
		height: 500px;
		width: 100%;
	}
</style>