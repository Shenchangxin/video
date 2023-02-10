<template>
	<view class="modify">
		<view class="nav-box">
			<navigator open-type="redirect" url="/pages/changeInfo/changeInfo" class="iconfont icon-fanhui icon-box"></navigator>
			<view class="title">
				{{title}}
			</view>
		</view>
		<view class="box">
			<view class="text">
				{{text}}
			</view>
			<view v-if="title==='修改昵称'" class="input-name">
				<input class="input" type="text" v-model="newName" maxlength="20" placeholder="记得填写昵称哦"/>
				<icon class="iconfont icon-shanchu delete" @click="deleteAll"></icon>
				<view class="number">
					{{newName.length}}/20
				</view>
				<view class="footer" @click="click(newName)">
					保存
				</view>
			</view>
			<view v-if="title==='修改抖音号'" class="input-name">
				<input class="input" type="text" v-model="newId" maxlength="16" />
				<icon class="iconfont icon-shanchu delete" @click="deleteAll"></icon>
				<view class="number">
					最多16个字符，只允许包含字母、数字、下划线和点，三十天内只能修改一次。
				</view>
				<view class="footer" @click="changeId(newId)">
					保存
				</view>
			</view>
			<view v-if="title==='修改简介'" class="input-name">
				<textarea v-model="introduction" class="text-area" placeholder="填写个人简介更容易获得别人的关注哦"></textarea>
				<view class="footer" @click="changeIntroduction(introduction)">
					保存
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import '../../assets/css/iconcss/iconfont.css'
	export default {
		//props:['title'],
		data() {
			return {
				newName:'张三',
				title:'',
				text:'',
				newId:'123456789',
				introduction:''
			}
		},
		methods: {
			deleteAll(){
				this.newName=''
			},
			deleteAll(){
				this.newId=''
			},
			click(res){
				uni.setStorage({
					key:'userName',
					data:res,
					success: () => {
						
					}
				})
			},
			changeId(res){
				uni.setStorage({
					key:'userId',
					data:res,
					success: () => {
						
					}
				})
			},
			changeIntroduction(res){
				uni.setStorage({
					key:'introduction',
					data:res
					
				})
			}
		},
		onLoad(res) {
			switch(res.title){
				case "userName":
				this.title="修改昵称"
				this.text="我的昵称"
				break;
				case "douyinId":
				this.title="修改抖音号"
				this.text="我的抖音号"
				break;
				case "introduction":
				this.title="修改简介"
				this.text="个人简介"
				break;
			}
		}
	}
</script>

<style>
	.modify{
		width: 100%;
		height: 100%;
		background: black;
	}
	.nav-box{
		height: 50px;
		position: relative;
		padding-top: 30px;
		margin: 0 auto;
	}
	.icon-box{
		position: absolute;
		top: 30px;
		left: 10px;
		font-size: 15px;
		color: white;
	}
	.title{
		text-align: center;
		font-size: 16px;
		color: white;
	}
	.box{
		padding: 15px;
	}
	.text{
		color: #999999;
		font-size: 13px;
		
	}
	.input-name{
		margin-top: 10px;
		font-size: 15px;
		position: relative;
	}
	.input{
		width: 95%;
		color: white;
	}
	.delete{
		position: absolute;
		right: 0;
		top: 0;
		width: 5%;
		height: 20px;
		font-size: 25px;
		color: #999999;
	}
	.number{
		color: #999999;
		font-size: 12px;
		margin-top: 5px;
	}
	.footer{
		
		height: 40px;
		line-height: 40px;
		text-align: center;
		margin: 50px 10px 0 10px;
		font-size: 18px;
		color: white;
		background: #333333;
		border-radius: 3px;
	}
	.text-area{
		background: #333333;
		color: white;
		width: 99%;
	}
</style>
