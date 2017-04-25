import { GET_TAGS_DATA } from "../actions"
import { fromJS ,Map,toJS } from "immutable"

const INITIAL_STATE = fromJS({
	tagsData : {
		"code":0,
		"tagsLength":0,
		"tagsListData":[]
	}
})

const reducer = (state = INITIAL_STATE , action ) =>{
	switch(action.type){
		case GET_TAGS_DATA :
			return state.update("tagsData",()=>fromJS(action.data));
			break;
		default : 
			return state;
	}
}

export default reducer