<template>
	<div>
		<section>
			<img :src="handleImg.attachImageUrl(story.image)" class="story-main-img" />
			<!-- <span v-text="story.image"></span> -->
		</section>
		<section>
			<div v-html="story.body" class="story-content"></div>
		</section>

	</div>
</template>
<script>
import {newsController} from '@/controllers/news'
import {handleImg} from '@/utils/handleImg'
export default {
    data(){
			return{
				handleImg: handleImg,
				story: {}
			}
			
		},
		methods: {
			show(){
				newsController.show({id: this.$route.params.id})
				.then(res => {
					if(res.status == 200 || res.status == 304) {
						this.story = res.data
						this.story.body = handleImg.attachBodyContent(this.story.body)
					}
				})
			},
		},
		created(){
			this.show()
		}    
}
</script>
<style>
.content img{width: 100%;height: 100%;}
.story-content{    
	padding: 5%;
	text-align: left;}
.avatar{    
	border-radius: 50%;
  margin-bottom: -3%;
  margin-right: 10px;}	
.author{font-weight: bold;}	
.story-main-img{width: 100%;}
.story-content .meta{margin: 30px 0}
</style>

