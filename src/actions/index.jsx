export const GET_ARTICLE_LIST = 'GET_ARTICLE_LIST'  //获取文章列表
export const GET_CONTRIBTIONS = 'GET_CONTRIBTIONS'
export const TOGGLE_VIEW_TYPE = 'TOGGLE_VIEW_TYPE'
export const GET_TAGS_DATA = 'GET_TAGS_DATA'

export const  getInitData = (url,type) => dispatch =>{
	dispatch(fetchInitData( url , type ))
}

export const receiveData = (data , type ) => {
	return { type: type, data: data }
};

const fetchInitData = ( url , type ) => dispatch=>{
	return	fetch(url,{
			method: 'GET',
			headers : { 
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
   		})
		.then(response => response.json())
		.then(data=>dispatch(receiveData(data,type)))
}

export const toggleShowView = data => dispatch => {
	dispatch({
		type:TOGGLE_VIEW_TYPE,
		data:data,
	})
}

