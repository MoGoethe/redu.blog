import React from "react"

const TimeLineItem = ({oneWeekData}) =>{
	const dataBGColor = ['#ddd','#C4E3FA','#93CCF5','#56AFEF','#108EE9','#ddd','#ddd','#ddd','#ddd','#ddd']
	return (
		<span className="react">
			{
				oneWeekData.map(item=><i className="react-item" style={{ background: dataBGColor[item] }}>
					<div className="today-contribtions">
						<strong>{item} contribtions</strong> on Oct 20,2017
					</div>
				</i>)
			}
		</span>
	)
}

export default TimeLineItem