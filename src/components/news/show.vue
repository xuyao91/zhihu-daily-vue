<template>
	<div>
		<section>
			<img :src="handleImg.attachImageUrl(story.image)" class="story-main-img" />
			<!-- <span v-text="story.image"></span> -->
		</section>
			<h2 v-text="story.title" style="margin: 5%;text-margin: left;"></h2>
			<div v-html="story.body" class="story-content"></div>
			<div class="bottom-nav">
				<router-link :to="'/comments/index?story_id=' + this.$route.params.id ">
					<div class="bottom-nav-icon" >
						<el-badge :value="commentsCount" class="item" >
							<img src="../../assets/comment.png" />
						</el-badge>
					</div>
				</router-link>
				<div class="bottom-nav-icon">
					<el-badge  class="item">
						<img src="../../assets/share.png" />
					</el-badge>	
				</div>
			</div>
	</div>
</template>
<script>
import {newsController} from '@/controllers/news'
import {commentsController} from '@/controllers/comments'
import {handleImg} from '@/utils/handleImg'
export default {
    data(){
			return{
				handleImg: handleImg,
				story: {},
				commentsCount: 0
			}
		},
		methods: {
			init(){
				this.show()
				this.getShortCommentsList()
				this.getLongCommentsList()
			},
			getShortCommentsList(){
				commentsController.short({story_id: this.$route.params.id})
				.then(res => {
					if(res.status == 200) {
						console.log(res.data.comments, 'shortcomments')
						this.commentsCount += res.data.comments.length
					}
				})
			},
			getLongCommentsList(){
				commentsController.long({story_id: this.$route.params.id})
				.then(res => {
					if(res.status == 200) {
						console.log(res.data.comments, 'longcomments')
						this.commentsCount += res.data.comments.length
					}
				})
			},
			show(){
				newsController.show({id: this.$route.params.id})
				.then(res => {
					if(res.status == 200 || res.status == 304) {
						this.story = res.data
						this.story.body = handleImg.attachBodyContent(this.story.body)
					}
				})
			},
			viewComment(){
				this.$router.push({
          path: "/comments/index?story_id" + this.$route.params.id
        });
			}
		},
		created(){
			this.init()
		}    
}
</script>
<style>
.content img{width: 100%;height: 100%;}
.story-content{    
	padding: 0 5% 5% 5%;
	text-align: left;}
.avatar{    
	border-radius: 50%;
  margin-bottom: -3%;
  margin-right: 10px;}	
.author{font-weight: bold;}	
.story-main-img{width: 100%;}
.story-content .meta{margin: 30px 0;margin-bottom: 50px;}
.bottom-nav{
	  height: 45px;
    position: fixed;
    z-index: 9999;
    /* margin-bottom: 20px; */
    bottom: 0px;
    text-align: center;
    background-color: #fff;
    width: 100%;
}
.bottom-nav img{height: 25px;}
.bottom-nav-icon{display: inline-block; width: 33%;margin-top: 3%;}
</style>

