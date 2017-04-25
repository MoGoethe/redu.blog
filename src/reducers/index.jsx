import { combineReducers } from 'redux'
import ArticleListReducer from './ArticleListReducer'
import TimeLineReducer from './TimeLineReducer'
import InitReducer from './InitReducer'
import TagsReducer from './TagsReducer'

const Reducers = combineReducers({
	ArticleListReducer,
	TimeLineReducer,
	InitReducer,
	TagsReducer,
})

export default Reducers