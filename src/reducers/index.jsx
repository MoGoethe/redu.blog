import { combineReducers } from 'redux'
import ArticleListReducer from './ArticleListReducer'
import TimeLineReducer from './TimeLineReducer'
import InitReducer from './InitReducer'

const Reducers = combineReducers({
	ArticleListReducer,
	TimeLineReducer,
	InitReducer,
})

export default Reducers