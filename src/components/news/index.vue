<template>
	<div>
		<div class="block">
				<el-carousel height="350px" :trigger="click">
					<el-carousel-item v-for="item in top_stories" :key="item.id" @click="viewDetail(item)">
						<!-- <router-link to="/news/"> -->
							<img v-bind:src="handleImg.attachImageUrl(item.image)" height="100%" width="100%"  @click="viewDetail(item)" />
							<!-- </router-link> -->
						<div v-text="item.title" class="top-story-title"></div>
					</el-carousel-item>
				</el-carousel>
		</div>
		<el-row>
			<el-col :span="24" v-for="story in stories" :key="story.id" >
				<router-link :to=" '/news/' + story.id">
				<el-card :body-style="{ padding: '0px' }">
					<div style="padding: 10px 5px;">
						<div class="story-title"><span v-text="story.title"></span></div>
						<div class="story-img">
							<img v-bind:src="handleImg.attachImageUrl(story.images[0])" class="image">
							<!-- <span v-if="story.multipic">多图</span> -->
						</div>
					</div>
				</el-card>
				</router-link>	
			</el-col>
		</el-row>
	</div>
    
</template>
<script>
import {newsController} from '@/controllers/news'
import {handleImg} from '@/utils/handleImg'
export default {
    data(){
			return {
				handleImg: handleImg,
				stories: [],
				date: '',
				top_stories: [],
				currentDate: new Date()
			}
        
    },
    methods: {
			getLatest(){
				newsController.index({

				})
				.then(res => {
					if(res.status == 200) {
						this.date = res.data.date
						this.stories = res.data.stories
						this.top_stories = res.data.top_stories
					}
				})
			},
			viewDetail(item){
				console.log(item, 'item')
				this.$router.push({
          path: "/news/" + item.id
        });
			}
    },
    created(){
			this.getLatest()
    }
}
</script>
<!-- <style lang="sass" scoped>
   @import "../../assets/news.sass"
</style> -->
<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .top-story-title{
        margin-top: -18%;
        color: #fff;
        font-size: 18px;
        font-weight: bold;
  }
	.story-title{
		display: inline-block;
		width: 70%;
		vertical-align: top;
		text-align: left;
	}
	.story-img{
		display: inline-block;
		width: 28%;
	}
	.image {
			width: auto;
			height: 80px;
	}
	a{color: #303133}
	a:hover{color: #303133}
    a:visited{color: #303133}
    
    
</style>
	

