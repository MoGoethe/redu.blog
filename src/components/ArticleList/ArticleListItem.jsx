import React from "react"

const ArticleListItem = ({ type , title , url , time }) =>{
	return ( 
		type ? <li className="classify-item classify-item-sec"><p className="classify-item-title"><span className="time">{time}</span><a href={ url }>{title}</a></p></li> : <li className="classify-item classify-item-fir"><p className="classify-item-title"><span className="time"><i className="anticon anticon-arrow-left"></i><span>{title}</span></span></p></li>
	)
}

export default ArticleListItem