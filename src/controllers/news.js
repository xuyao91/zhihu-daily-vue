import {httpService} from '@/utils/http'

const newsController = {
    baseUrl: "/api/4/news/",
    index() {
        return httpService({
            method: 'get',
            url: this.baseUrl + 'latest'
        })    
    },
    show(params){
        return httpService({
            method: 'get',
            url: this.baseUrl + params.id
        })
    }
}
export {newsController}