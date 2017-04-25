import React from "react"
import TagItem from "./TagItem"
import uuid from "uuid"

const TagsView = ({tagsData}) =>{
	return(
		<div className="tags-view">
			<ul className="list">
				{
					tagsData.map(item=><TagItem tagName={item.tagName} idLink={ item.idLink } key={ uuid.v1() }  />)
				}
			</ul>
		</div>
	)
}

export default TagsView