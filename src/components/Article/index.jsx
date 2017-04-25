import React from "react"

const Article = ({children}) =>(

	<div className="main article-main">
		{children}
		<div className="article-action">
			<div className="action-list">
				<a href=""><i className="anticon anticon-heart-o"></i>|<span>喜欢</span></a>
				<a href=""><i className="anticon anticon-heart-o"></i></a>
				<a href=""><i className="anticon anticon-heart-o"></i></a>
				<a href=""><i className="anticon anticon-heart-o"></i></a>
			</div>
		</div>
	</div>
)

export default Article