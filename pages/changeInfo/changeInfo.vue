<template>
	<view class="changeInfo">
		<view class="nav-box">
			<view class="title">
				编辑个人资料
			</view>
			<navigator open-type="switchTab" url="/pages/personal/personal" class="iconfont icon-fanhui icon-nav"></navigator>
		</view>
		<view class="box">
			<view class="img-box">
				<image class="img" 
				:src="src"
				@click="chooseImg"
				></image>
				<view class="text">
					点击更换头像
				</view>
			</view>
		</view>
		<view class="info-box">
			<navigator open-type="redirect" url="/pages/modify/modify?title=userName" class="text-box">
				<view class="left">
					昵称
				</view>
				<view class="iconfont icon-xiangyoujiantou icon-box"></view>
				<view class="right">
					{{user.userName}}
				</view>
			</navigator>
			<navigator open-type="redirect" url="/pages/modify/modify?title=douyinId" class="text-box">
				<view class="left">
					抖音号
				</view>
				<view class="iconfont icon-xiangyoujiantou icon-box"></view>
				<view class="right">
					{{user.userId}}
				</view>
				
			</navigator>
			<navigator open-type="redirect" url="/pages/modify/modify?title=introduction" class="text-box">
				<view class="left">
					简介
				</view>
				<view class="iconfont icon-xiangyoujiantou icon-box"></view>
				<view class="right">
					{{user.introduction}}
				</view>
				
			</navigator>
			
			<picker :range="school" @change="bindSchoolChange">
				<view class="text-box">
					<view class="left">
						学校
					</view>
					<view class="iconfont icon-xiangyoujiantou icon-box"></view>
					<view class="right">
						{{user.school}}
					</view>
				</view>
			</picker>
			<picker :range="sex" @change="bindSexChange">
				<view class="text-box">
					<view class="left">
						性别
					</view>
					<view class="iconfont icon-xiangyoujiantou icon-box"></view>
					<view class="right">
						{{user.sex}}
					</view>
					
				</view>
			</picker>
			<picker mode="date" :value="user.birthday"  @change="bindDateChange">
				<view class="text-box">
					<view class="left">
						生日
					</view>
					<view class="iconfont icon-xiangyoujiantou icon-box"></view>
					<view class="right">
						{{user.birthday}}
					</view>
					
				</view>
			</picker>
			<picker mode="region"   @change="bindCityChange">
				<view class="text-box">
					<view class="left">
						地区
					</view>
					<view class="iconfont icon-xiangyoujiantou icon-box"></view>
					<view class="right">
						{{user.city}}
					</view>
					
				</view>
			
			</picker>
			
	
		</view>
	</view>
</template>

<script>
	import '../../assets/css/iconcss/iconfont.css'
	export default {
		data() {
			return {
				src:'../../static/img/author.jpg',
				user:{
					userName:"张三",
					userId:"123435",
					introduction:"我爱睡觉",
					school:"",
					sex:"",
					birthday:'',
					city:""
				},
				school:['清华大学','北京大学','郑州航空工业管理学院','河南大学','天津商业大学','天津工业大学','浙江大学','杭州电子科技大学','电子科技大学'],
				sex:['男','女']
			}
		},
		methods: {
			chooseImg(){
				uni.chooseImage({
					count:1,
					sourceType:['album'],
					sizeType:['original','compressed'],
					success: (res) => {
						this.src=res.tempFilePaths
					}
				})
			},
			bindSchoolChange(e){
				this.user.school=this.school[e.target.value]
				uni.setStorage({
					key:"school",
					data:this.school[e.target.value],
				})
				
			},
			bindSexChange(e){
				this.user.sex=this.sex[e.target.value]
				uni.setStorage({
					key:"sex",
					data:this.sex[e.target.value],
				})
			},
			bindDateChange(e){
				this.user.birthday=e.target.value
				uni.setStorage({
					key:"birthday",
					data:e.target.value
				})
			},
			bindCityChange(e){
				this.user.city=e.target.value
				uni.setStorage({
					key:"city",
					data:e.target.value
				})
			}
		},
		onLoad() {
			uni.getStorage({
				key:'userName',
				success: (res) => {
					this.user.userName=res.data
				}
			}),
			uni.getStorage({
				key:'userId',
				success: (res) => {
					this.user.userId=res.data
				}
			}),
			uni.getStorage({
				key:'introduction',
				success: (res) => {
					this.user.introduction=res.data
				}
			}),
			uni.getStorage({
				key:'school',
				success: (res) => {
					this.user.school=res.data
				}
			})
			uni.getStorage({
				key:'sex',
				success: (res) => {
					this.user.sex=res.data
				}
			}),
			uni.getStorage({
				key:'birthday',
				success: (res) => {
					this.user.birthday=res.data
				}
			}),
			uni.getStorage({
				key:'city',
				success: (res) => {
					this.user.city=res.data
				}
			})
		}
	}
</script>

<style>
	.changeInfo{
		width: 100%;
		height: 100%;
		background: black;
	}
	.nav-box{
		height: 50px;
		position: relative;
		margin: 0 auto;
		padding-top: 30px;
	}
	.title{
		text-align: center;
		color: white;
		font-size: 15px;
		
	}
	.icon-nav{
		position: absolute;
		top: 30px;
		color: white;
		left: 10px;
	}
	.box{
		width: 100%;
		height: 150px;
		margin: 0 auto;
		border-top: 1px solid #333333;
		border-bottom: 1px solid #333333;
	}
	.img-box{
		text-align: center;
	}
	.img{
		margin-top: 20px;
		width: 70px;
		height: 70px;
		border-radius: 50%;
	}
	.text{
		margin-top: 13px;
		color: #999999;
		font-size: 12px;
	}
	.info-box{
		padding: 0 10px;
		
	}
	.text-box{
		width: 100%;
		height: 50px;
		line-height: 50px;
		
	}
	.left{
		float: left;
		font-size: 15px;
		color: white;
	}
	.right{
		float: right;
		font-size: 15px;
		margin-right: 7px;
		color: #999999;
	}
	.icon-box{
		float: right;
		font-size: 15px;
		color: #999999;
		width: 10px;
	}
</style>
