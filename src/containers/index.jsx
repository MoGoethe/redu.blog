import React,{ Component } from "react"
import { connect } from "react-redux"
import "../components/scss/base.css"
import "../components/scss/icon.css"
import "../components/scss/common.scss"
import "../components/scss/home.scss"
import TimeLineView from "../components/timeLineView"
import ArtcileList from "../components/ArticleList"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Menu from "../components/Menu"

const App = () =>{
	return (<div>
			<Header />
			<Menu />
			<div className="main">
				<div className="article-wrap">
					{/*<TimeLineView />*/}
					<ArtcileList />
				</div>
			</div>
			<Footer />
		</div>
	)
}

const mapStateToProps = state =>{
	return state
}

export default connect(mapStateToProps)(App)