<template>
	<view class="content">
		<first-nav></first-nav>
		<video-list :list="list"></video-list>
		<tab></tab>
	</view>
</template>

<script>
	import tab from "../../components/tab.vue"
	import firstNav from "../../components/first-nav.vue"
	import videoList from "../../components/videoList.vue"
	export default {
		components :{
			tab,
			firstNav,
			videoList,
			
		},
		data() {
			return{
				list : [],
			}
		},
		onLoad() {
			this.getVideos()
		},
		methods : {
			getVideos(){
				uni.request({
					url:"http://localhost:8080/api/video.json",
					success :(res)=> {
						this.list = res.data.list
						
					}
				})
			}
		}
	}
</script>

<style>
	.content{
		width: 100%;
		height: 100%;
		
	}
</style>
