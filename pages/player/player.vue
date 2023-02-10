<template>
	<view class="player">
			<view class="iconfont icon-fanhui iconfanhui">
			</view>
			<view class="footer">
				留下你的精彩评论吧
			</view>
		<video-list :list="list"></video-list>
	</view>
</template>

<script>
	import videoList from '../../components/videoList.vue'
	import '../../assets/css/iconcss/iconfont.css'
	export default {
		components:{
			videoList
		},
		data() {
			return {
				list:[]
			}
		},
		methods: {
			
		},
		onLoad() {
			uni.getStorage({
				key:'videoList',
				success: (res) => {
					this.list=res.data
				}
			})
		}
	}
</script>

<style>
	.player{
		height: 100%;
		width: 100%;
		background: black;
		position: relative;
	}

	.iconfanhui{
		z-index: 21;
		color: white;
		font-size: 17px;
		position: absolute;
		top: 30px;
		left: 10px;
		
	}
	.footer{
		z-index: 21;
		position: absolute;
		bottom: 20px;
		left: 10px;
		font-size: 16px;
		color: #444444;
	}
</style>
