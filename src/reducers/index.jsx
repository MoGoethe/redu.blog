import { combineReducers } from 'redux'
import ArticleListReducer from './ArticleListReducer'
import TimeLineReducer from './TimeLineReducer'

const Reducers = combineReducers({
	ArticleListReducer,
	TimeLineReducer,
})

export default Reducers