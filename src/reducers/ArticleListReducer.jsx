import { GET_ARTICLE_LIST } from "../actions"
import { fromJS ,Map,toJS } from "immutable"

const INITIAL_STATE = fromJS({
	articleList : {
		"code":0,
		"articleLength":0,
		"articleListData":[]
	}
})

const reducer = (state = INITIAL_STATE , action ) =>{
	switch(action.type){
		case GET_ARTICLE_LIST :
			return state.update("articleList",()=>fromJS(action.data));
			break;
		default : 
			return state;
	}
}

export default reducer