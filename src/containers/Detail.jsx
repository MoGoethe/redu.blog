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
import FriendlyLink from "../components/FriendlyLink"
			
class App extends Component{

	render(){
		const { articleList , contribtionsData , menuData , dispatch } = this.props
		return (<div>
				<Header />
				<Menu _dispatch={dispatch} menuListData={ menuData.get("menuListData").toJS() } currentMenuItem = {menuData.get("currentMenuItem")} />
				<Article>
					<ArticleDetail />
				</Article>
				<FriendlyLink />
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = state =>{
	return {
		articleList:state.ArticleListReducer,
		contribtionsData:state.TimeLineReducer,
		menuData:state.InitReducer,
	}
}

export default connect(mapStateToProps)(App)