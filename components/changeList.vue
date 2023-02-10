<template>
	<view class="changeList">
		<scroll-view class="scrolly" scroll-y="true" :scroll-into-view="viewId">
			<view class="city-false">
				<view class="box">
					<view class="title">
						<icon class="iconfont icon-dingwei"></icon>自动定位
					</view>
					<view class="currentCity">{{tcity}}</view>
				</view>
				<view class="box">
					<view class="title">
						热门城市
					</view>
					<view class="hotList">
						<view class="item" v-for="(item,index) of list" :key="index">
							{{item}}
						</view>
						
					</view>
				</view>
				<view class="box-list" v-for="(cities,index) in city" :key="index">
					<view class="initial" :id="cities.initial">
						{{cities.initial}}
					</view>
					<view class="cityName" 
					v-for="item of cities.list" 
					:key="item.code"
					@click="click(item.name)"
					>
						{{item.name}}
					</view>
				</view>
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	import '../assets/css/iconcss/iconfont.css'
	export default {
		name:"changeList",
		props:['city','letter'],
		data() {
			return {
				list:['北京','深圳','郑州','贵州','广州','上海','新乡','石家庄','重庆','天津','西安','武汉','杭州','信阳','南京'],
				viewId:'',
				tcity:"北京"
			};
		},
		watch:{
			letter(){
				this.viewId=this.letter
				
			}
		},
		methods:{
			click(res){
				uni.setStorage({
					key:'city',
					data:res
					
				})
				uni.getStorage({
					key:'city',
					success :(res)=>{
						this.tcity=res.data
					}
				})
				uni.redirectTo({
					url:'/pages/city/city'
				})
			}
		}
	}
</script>

<style>
	.changeList{
		width: 100%;
		background: black;
		z-index: 19;
		height: 100%;
	}
	.box{
		background: #222222;
		margin-top: 10px;
		padding: 0 5px 20px 5px;
	}
	.title{
		height: 40px;
		line-height: 40px;
		margin-left: 15px;
		color: white;
		font-size: 14px;
	}
	.currentCity{
		color: white;
		font-size: 15px;
		margin-left: 15px;
		height: 30px;
		line-height: 30px;
	}
	.hotList{
		
		width: 100%;
		overflow: hidden;
		
	}
	.item{
		width: 30%;
		height: 28px;
		line-height: 25px;
		font-size: 13.5px;
		float: left;
		background: #333333;
		margin-left: 2.5%;
		margin-bottom: 10px;
		text-align: center;
		color: #AAAAAA;
	}
	.box-list{
		padding: 8px 5px;
		
	}
	.initial{
		height: 25px;
		line-height: 25px;
		background: black;
		padding-left: 10px;
		color: #666666;
		font-size: 12px;
	}
	.cityName{
		background: #222222;
		height: 40px;
		line-height: 40px;
		padding-left: 10px;
		color: #AAAAAA;
		font-size: 15px;
	}
	.scrolly{
		height: 100%;
	}
</style>