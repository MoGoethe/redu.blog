import React from "react"
import Mock from "mockjs"
import TimeLineItem from "./TimeLineItem"

const timeLineView = () =>{

	const timeLineData = [
		[0,0,2,0,0,0,3],
		[0,3,3,1,5,0,0],
		[0,3,1,0,0,1,0],
		[0,0,0,1,0,0,0],
		[4,2,0,5,0,0,0],
		[0,0,2,3,0,0,0],
		[1,0,1,4,0,3,0],
		[0,4,2,0,1,0,0],
		[0,0,0,5,0,0,3],
		[0,0,0,2,0,0,2],
		[4,0,3,0,4,0,0],
		[0,2,0,0,2,0,1],
		[0,0,2,2,0,0,1],
		[4,0,0,3,0,0,0],
		[0,0,4,3,4,0,2],
		[3,0,4,0,0,0,1],
		[3,0,0,0,0,0,4],
		[0,0,0,4,0,0,1],
		[4,0,3,0,3,2,0],
		[2,0,0,1,3,0,0],
		[5,0,0,4,0,4,2],
		[0,0,0,0,2,0,2],
		[0,3,0,0,2,2,0],
		[2,4,0,0,0,3,1],
		[3,4,2,0,0,4,0],
		[2,0,0,0,2,3,0],
		[0,0,0,0,1,0,4],
		[4,0,0,3,3,0,0],
		[0,0,1,0,0,0,2],
		[0,0,0,0,3,3,0],
		[0,0,0,0,0,5,0],
		[0,4,4,3,0,5,0],
		[0,0,1,0,3,0,0],
		[1,0,0,0,0,0,0],
		[0,0,0,4,0,4,0],
		[0,1,0,1,2,0,3],
		[3,0,0,3,3,0,0],
		[0,0,0,0,3,3,0],
		[1,0,0,0,0,5,1],
		[3,5,0,3,0,4,0],
		[0,3,0,0,0,0,5],
		[1,4,0,1,0,0,4],
		[0,1,0,2,2,0,0],
		[0,4,3,0,0,4,4],
		[0,2,0,4,0,0,2],
		[0,2,0,0,2,1,3],
		[2,0,2,0,5,4,3],
		[0,2,4,0,0,0,0],
		[0,0,0,4,0,3,2],
		[4,0,2,4,2,0,0],
		[0,0,0,4,0,3,2],
		[0,0,3,0,0,0,0],
		[0,3,1,4,0,3,2]
	]

	const getMonthPos = () =>{
		let  d1 = new Date()
		let  d2 = new Date()
		d2.setMonth(0)
		d2.setDate(1)
		let  rq = d1-d2
		let  s1 = Math.ceil(rq/(24*60*60*1000))
		return '-' +(Math.ceil(s1/7) * 688 / 53).toFixed(2) +'px'
	}

	return (
		<div className="show-view">
			<div className="timeline-view" >
				<div className="tl-head">
					<p className="tl-month" style={{marginLeft:getMonthPos()}}>
						<span className="tl-month-title">Jan</span>
						<span className="tl-month-title">Feb</span>
						<span className="tl-month-title">Mar</span>
						<span className="tl-month-title">Apr</span>
						<span className="tl-month-title">May</span>
						<span className="tl-month-title">Jun</span>
						<span className="tl-month-title">Jul</span>
						<span className="tl-month-title">Aug</span>
						<span className="tl-month-title">Sep</span>
						<span className="tl-month-title">Oct</span>
						<span className="tl-month-title">Nov</span>
						<span className="tl-month-title">Dec</span>
						<span className="tl-month-title">Jan</span>
						<span className="tl-month-title">Feb</span>
						<span className="tl-month-title">Mar</span>
						<span className="tl-month-title">Apr</span>
						<span className="tl-month-title">May</span>
						<span className="tl-month-title">Jun</span>
						<span className="tl-month-title">Jul</span>
						<span className="tl-month-title">Aug</span>
						<span className="tl-month-title">Sep</span>
						<span className="tl-month-title">Oct</span>
						<span className="tl-month-title">Nov</span>
						<span className="tl-month-title">Dec</span>
					</p>
				</div>
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
						timeLineData.map(item=><TimeLineItem oneWeekData = { item }  />)
					}
					</div>
				</div>
				<div className="tl-footer">
					<p className="info-main">Total：108 Contributions 
						<span className="lable">
							<em>Less </em>
							<i className="react-item" style={{backgroundColor:'#ddd'}}></i>
							<i className="react-item" style={{backgroundColor:'#C4E3FA'}}></i>
							<i className="react-item" style={{backgroundColor:'#93CCF5'}}></i>
							<i className="react-item" style={{backgroundColor:'#56AFEF'}}></i>
							<i className="react-item" style={{backgroundColor:'#108EE9'}}></i>
							<em>More</em>
						</span>
					</p>
				</div>
			</div>
		</div>
	)
}


export default timeLineView