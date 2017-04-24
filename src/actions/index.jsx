export const GET_ARTICLE_LIST = 'GET_ARTICLE_LIST'  //获取文章列表
export const GET_CONTRIBTIONS = 'GET_CONTRIBTIONS'

export const  getInitData = (url,type) => dispatch =>{
	dispatch(fetchArticle( url , type ))
}

export const receiveData = (data , type ) => {
	console.log(type);
	return { type: type, data: data }
};

const fetchArticle = ( url , type ) => dispatch=>{
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

