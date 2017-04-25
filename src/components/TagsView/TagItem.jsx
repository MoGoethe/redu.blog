import React from "react";

const TagItem = ({tagName,idLink}) =>(
	<li className="list-item"><a href={'#'+idLink}><i className="anticon anticon-pushpin-o"></i>{ tagName }</a></li>
)

export default TagItem 