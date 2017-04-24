import React from "react"
import { toJSJS } from "immutable"
import ArticleListItem from "./ArticleListItem"

const ArtcileList = ({listData})=>(
	<div className="classify-wrap article-dispaly-type">
		<ul className="article-list">
			{
				listData.getIn(["articleList","articleListData"]).map(item=><ArticleListItem 
					key={ item.get("id") } 
					type={ item.get("type") } 
					title={ item.get("title")  }
					url={ item.get("url") } 
					time={ item.get("time") } 
				/>)
			}
		</ul>
	</div>
)

export default ArtcileList