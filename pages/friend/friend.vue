<template>
	<view class="friend">
		<follow-nav :page="page"></follow-nav>
		<follow-list :list="list"></follow-list>
		<tab></tab>
		
	</view>
</template>

<script>
	import followNav from '../../components/followNav.vue'
	import tab from '../../components/tab.vue'
	import followList from '../../components/followList.vue'
	export default {
		components:{
			followNav,
			tab,
			followList
		},
		data() {
			return {
				page:"friend",
				list:[]
			}
		},
		methods: {
			getVideo(){
				uni.request({
					url:'http://localhost:8080/api/video.json',
					success: (res) => {
						this.list=res.data.list.slice(0,4)
						
					}
				})
			}
		},
		created() {
			this.getVideo()
		}
	}
</script>

<style>
	.friend{
		width: 100%;
		height: 100%;
		background: black;
	}
</style>
