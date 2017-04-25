import { TOGGLE_VIEW_TYPE } from "../actions"
import { fromJS ,Map,toJS } from "immutable"

const INIT_STATE = fromJS({
	showViewType:0,
	currentMenuItem:0,
	menuListData:[
		{
			id:0,
			iconClass:'anticon-bars',
			iconName:'时间轴',
		},
		{
			id:1,
			iconClass:'anticon-tags',
			iconName:'标签',
		}
	]
})

const InitReducer = (state=INIT_STATE, action) =>{

	switch( action.type ){
		case TOGGLE_VIEW_TYPE :
			return state.set("showViewType",action.data).set("currentMenuItem",action.data)
			break;
		default : 
			return state
	}
	
}

export default InitReducer