<template>
	<view class="city">
		<change-header></change-header>
		<change-list :city="city" :letter="letter"></change-list>
		<change-alphabaet :city="city" @change="change"></change-alphabaet>
	</view>
</template>

<script>
	import changeHeader from '../../components/changeHeader.vue'
	import changeList from '../../components/changeList.vue'
	import changeAlphabaet from '../../components/changeAlphabet.vue'
	export default {
		components :{
			changeHeader,
			changeList,
			changeAlphabaet
		},
		data() {
			return {
				city:[],
				letter:[]
			}
		},
		methods: {
			getCityInfo(){
				uni.request({
					url:'http://localhost:8080/api/city.json',
					success: (res)=> {
						this.city=res.data.city
					}
				})
			},
			change(res){
				this.letter=res
				
			}
		},
		created() {
			this.getCityInfo()
		}
	}
</script>

<style>
	.city{
		width: 100%;
		background: black;
		height: 100%;
	}
</style>
