import routerview from '@/components/concerns/routerview'
import index from '@/components/news/index'
import show from '@/components/news/show'

const newsRouter = {
	path: "/news",
	component: routerview,
	children:[
		{
			path: 'index',
			component: index,
			name: 'index',
			meta: {title: '新闻首页'}
		},
		{
			path: ":id",
			component: show,
		}
	]  

}
export {newsRouter}