<template>
	<view class="newsContent">
		<view class="box">
			<view class="icon" v-for="item in iconList" :key="item.id">
				<view class="box-img">
					<image class="img" :src="item.src"></image>
				</view>
				<view class="icon-text">
					{{item.text}}
				</view>
			</view>
			
		</view>
		<view class="newsList">
			<view class="item" v-for="item in newsList" :key="item.id">
				<view class="author-img-box">
					<image class="author-img" src="../static/img/1-1.jpeg"></image>
				</view>
				<view class="text">
					<view class="top">
						<view class="name">
							{{item.name}}
						</view>
						<view class="time">
							{{item.time}}
						</view>
					</view>
					<view class="content">
						{{item.content}}
					</view>
				</view>
			</view>
			<view class="more">
				无更多消息
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"newsContent",
		data() {
			return {
				newsList:[
					{
						id:1,
						name:"张三",
						time:'8-1',
						content:'你好，我是张三，很高兴认识你！'
					},
					{
						id:2,
						name:"李四",
						time:'3-1',
						content:'你好，我是李四，很高兴认识你！'
					},
					{
						id:3,
						name:"克里斯",
						time:'4-1',
						content:'你好，我是克里斯，很高兴认识你！'
					},
					{
						id:4,
						name:"库瑞丝",
						time:'2-1',
						content:'你好，我是库瑞丝，很高兴认识你！'
					},
					{
						id:5,
						name:"杰克",
						time:'9-1',
						content:'你好，我是杰克，很高兴认识你！'
					},
					{
						id:6,
						name:"法兰克",
						time:'8-6',
						content:'你好，我是法兰克，很高兴认识你！'
					}
				],
				iconList:[
					{
						id:1,
						src:'../static/img/fans.jpg',
						text:"粉丝"
					},
					{
						id:2,
						src:'../static/img/love.jpg',
						text:"点赞"
					},
					{
						id:3,
						src:'../static/img/comment.jpg',
						text:"评论和@"
					},
					{
						id:4,
						src:'../static/img/dong.jpg',
						text:"随拍互动"
					}
				]
			};
		}
	}
</script>

<style>
	.newsContent{
		width: 100%;
		background: #000000;
	}
	.box{
		width: 100%;
		height: 120px;
		
	}
	.icon{
		width: 25%;
		height: 100px;
		float: left;
		margin: 0 auto;
	}
	.box-img{
		text-align: center;
	}
	.img{
		width: 40px;
		height: 40px;
		border-radius: 5px;
		margin-top: 20px;
	}
	.icon-text{
		font-size: 13px;
		text-align: center;
		color: #eee;
		margin-top: 10px;
	}
	.newsList{
		background: #000000;
	}
	.item{
		height: 60px;
		padding: 15px 10px;
	}
	.author-img-box{
		float: left;
		margin-left: 10px;
		
	}
	.author-img{
		width: 45px;
		height: 45px;
		border-radius: 50%;
	}
	.text{
		float: left;
		margin-left: 15px;
		height: 50px;
		width: 75%;
		color: white;
	}
	.top{
		height: 25px;
		line-height: 25px;
	}
	.name{
		font-size: 15px;
		float: left;
		
	}
	.time{
		float: right;
		font-size: 11px;
		color: #AAAAAA;
	}
	.content{
		height: 25px;
		line-height: 25px;
		font-size: 13px;
		color: #AAAAAA;
	}
	.more{
		width: 100%;
		height: 50px;
		line-height: 50px;
		font-size: 10px;
		color: #AAAAAA;
		text-align: center;
	}
</style>