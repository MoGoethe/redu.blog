import React from "react"
import { connect } from "react-redux"
import TimeLineItem from "./TimeLineItem"
import uuid from "uuid"

const timeLineView = ({contribtionsData}) =>{

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
						contribtionsData.getIn(["contribtionsData","oneDayData"]).map(item=><TimeLineItem oneWeekData = { item } key={uuid.v1()}  />)
					}
					</div>
				</div>
				<div className="tl-footer">
					<p className="info-main">Total：{ contribtionsData.getIn(["contribtionsData","total"]) } Contributions 
						<span className="lable">
							<em>Less </em>
							<i className="react-item" style={{backgroundColor:'#DDDDDD'}}></i>
							<i className="react-item" style={{backgroundColor:'#C4E3FA'}}></i>
							<i className="react-item" style={{backgroundColor:'#93CCF5'}}></i>
							<i className="react-item" style={{backgroundColor:'#56AFEF'}}></i>
							<i className="react-item" style={{backgroundColor:'#108EE9'}}></i>
							<em>More</em>
						</span>
					</p>
				</div>
			</div>
	)
}

export default timeLineView