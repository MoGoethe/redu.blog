import { TOGGLE_VIEW_TYPE } from "../actions"
import { fromJS ,Map,toJS } from "immutable"

const INIT_STATE = fromJS({
	showViewType:0
})

const InitReducer = (state=INIT_STATE, action) =>{
	if(action.type === TOGGLE_VIEW_TYPE)return  state.set("showViewType",action.data)
	return state 
}

export default InitReducer