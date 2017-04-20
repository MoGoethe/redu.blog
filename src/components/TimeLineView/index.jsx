import React from "react"
import Mock from "mockjs"

const timeLineView = () =>{

	const timeLineData = Mock.mock({
		"array|37":[0,1,2,3,4,5,6,7,8,9]
	})

	return (
		<div className="show-view">
			<div className="timeline-view" >
				<div className="tl-main">
					<div className="tl-left">
						<p className="tl-title">
							<span className="tl-item">Mon</span>
							<span className="tl-item">Wed</span>
							<span className="tl-item">Fri</span>
						</p>
					</div>
					<div className="tl-right">
					{	
						timeLineData.array.map(item=>{
							
						})
					}
					</div>
				</div>
			</div>
		</div>
	)
}


export default timeLineView