<template>
	<view class="personal">
		<view @click="click" class="iconfont icon-fanhui iconfanhui">
		</view>
		<personal-info :pages="pages" @change="change"></personal-info>
		<view class="" v-show="show==='作品'">
			<personal-list ></personal-list>
		</view>
		<view class="" v-show="show==='喜欢'">
			<personal-list></personal-list>
		</view>
		<view class="" v-show="show==='动态'">
			<follow-list  :list="list"></follow-list>
		</view>
		
	</view>
</template>

<script>
	import '../../assets/css/iconcss/iconfont.css'
	import personalInfo from '../../components/personalInfo.vue'
	import personalList from '../../components/personalList.vue'
	import followList from '../../components/followList.vue'
	export default {
		components:{
			personalInfo,
			personalList,
			followList
		},
		data() {
			return {
				list:[],
				show:'作品',
				pages:"user"
			}
		},
		methods: {
			getVideoInfo(){
				uni.request({
					url:'http://localhost:8080/api/video.json',
					success: (res) => {
						this.list=res.data.list
					}
				})
			},
			change(res){
				this.show=res
			},
			click(){
				uni.navigateBack({
					delta:1
				})
			}
		},
		created() {
			this.getVideoInfo()
		}
	}
</script>

<style>
	.personal{
		width: 100%;
		height: 100%;
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
</style>

