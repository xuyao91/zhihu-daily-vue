import {httpService} from '@/utils/http'

const commentsController = {
    baseUrl: "/api/4/story/",
    short(params) {
        return httpService({
            method: 'get',
            url: this.baseUrl + params.story_id + '/short-comments'
        })    
    },
    long(params){
        return httpService({
            method: 'get',
            url: this.baseUrl + params.story_id + '/long-comments'
        })
    }
}
export {commentsController}