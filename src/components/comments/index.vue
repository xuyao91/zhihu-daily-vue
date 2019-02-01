<template>
	<div>
		<section>
			<h3>热门评论</h3>
			<el-radio-group v-model="currentComment" :stretch=true>
				<el-radio-button label="short">短评(  {{shortComments.length}} )</el-radio-button>
				<el-radio-button label="long">长评({{longComments.length}})</el-radio-button>
			</el-radio-group>
		</section>
		<div v-if="currentComment == 'short'">
			<ul>
				<li v-for="short_comment in shortComments" :key="short_comment.id">
					<div class="author-info">
						<img :src="handleImg.attachImageUrl(short_comment.avatar)" class="avatar" />
						<span class="name" v-text="short_comment.author"></span>
						<span class="like-content">
							<span style="color: #515151;" v-text="short_comment.likes"></span>
							<img class="like" src="../../assets/like.png" /></span>
					</div>	
					<div class="comment-content">
						<span v-text="short_comment.content"></span>
					</div>
					<div style="text-align: left;margin-left: 10%;">
						<span class="comment-time" v-text="formatUnixtimestamp(short_comment.time)"></span>	
					</div>	
				</li>
			</ul>
		</div>

		<div v-if="currentComment == 'long'">
			<ul>
				<li v-for="long_comment in longComments" :key="long_comment.id">
					<div class="author-info">
						<img :src="handleImg.attachImageUrl(long_comment.avatar)" class="avatar" />
						<span class="name" v-text="long_comment.author"></span>
						<span class="like-content">
							<span style="color: #515151;" v-text="long_comment.likes"></span>
							<img class="like" src="../../assets/like.png" /></span>
					</div>	
					<div class="comment-content">
						<span v-text="long_comment.content"></span>
					</div>
					<div style="text-align: left;margin-left: 10%;">
						<span class="comment-time" v-text="formatUnixtimestamp(long_comment.time)"></span>	
					</div>	
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import {commentsController} from '@/controllers/comments'
import {handleImg} from '@/utils/handleImg'
export default {
    data(){
		return {
			handleImg: handleImg,
			currentComment: 'short',
			shortComments: [],
			longComments: []
		}
	},
	methods: {
		getShortCommentsList(){
			commentsController.short({story_id: this.$route.query.story_id})
			.then(res => {
				if(res.status == 200) {
						this.shortComments = res.data.comments
					}
			})
		},
		getLongCommentsList(){
			commentsController.long({story_id: this.$route.query.story_id})
			.then(res => {
				if(res.status == 200) {
						this.longComments = res.data.comments
					}
			})
		},
		formatUnixtimestamp (unixtimestamp){
			var unixtimestamp = new Date(unixtimestamp*1000);
			var year = 1900 + unixtimestamp.getYear();
			var month = "0" + (unixtimestamp.getMonth() + 1);
			var date = "0" + unixtimestamp.getDate();
			var hour = "0" + unixtimestamp.getHours();
			var minute = "0" + unixtimestamp.getMinutes();
			var second = "0" + unixtimestamp.getSeconds();
			return year + "-" + month.substring(month.length-2, month.length)  + "-" + date.substring(date.length-2, date.length)
				+ " " + hour.substring(hour.length-2, hour.length) + ":"
				+ minute.substring(minute.length-2, minute.length) + ":"
				+ second.substring(second.length-2, second.length);
			},
		},	
	created(){
		this.getShortCommentsList()
		this.getLongCommentsList()
	}
}
</script>
<style>
.author-info{
	text-align: left;
}
.author-info .avatar{
	height: 38px;
	border-radius: 50%;
	display: inline-block;
}
.author-info .name{
	  vertical-align: top;
    display: inline-block;
    font-weight: bold;
		width: 70%
}
.author-info .like-content{
	display: inline-block;
  vertical-align: top;
	width: 10%;
	text-align: right;
}
.author-info .like{
	height: 16px;
	display: inline-block;
}
.comment-time{
	  font-size: 14px;
    color: #8a8a8a;
}
ul{margin-left: -8%;}
ul li{
	list-style: none;
	margin: 10% 0;
}
.comment-content{
	margin-left: 10%;
	text-align: left;
	margin-right: 10px;
}
</style>

