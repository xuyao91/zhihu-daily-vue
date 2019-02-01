import routerview from '@/components/concerns/routerview'
import commentsIndex from '@/components/comments/index'

const commentsRouter = {
	path: "/comments",
	component: routerview,
	children:[
		{
			path: 'index',
			component: commentsIndex,
			name: 'index',
		}
	]  

}
export {commentsRouter}