import React,{ Component } from "react"
import { connect } from "react-redux"
import "../components/scss/base.css"
import "../components/scss/icon.css"
import "../components/scss/common.scss"
import "../components/scss/article.scss"
import TimeLineView from "../components/timeLineView"
import Article from "../components/Article"
import ArticleDetail from "../components/Article/ArticleDetail"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Menu from "../components/Menu"

const App = () =>{
	return (<div>
			<Header />
			<Menu />
			<Article>
				<ArticleDetail />
			</Article>
			<Footer />
		</div>
	)
}

const mapStateToProps = state =>{
	return state
}

export default connect(mapStateToProps)(App)