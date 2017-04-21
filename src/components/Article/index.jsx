import React from "react"

const Article = ({children}) =>(

	<div className="article-main">
		<div className="main markdown">
			{children}
			<div></div>
		</div>
	</div>
)

export default Article