import React,{ Component } from "react"
import { connect } from "react-redux"
import "../components/scss/base.css"
import "../components/scss/icon.css"
import "../components/scss/common.scss"
import "../components/scss/home.scss"
import TimeLineView from "../components/timeLineView"
import ArtcileList from "../components/ArticleList"
import Header from "../components/Header"
import FriendlyLink from "../components/FriendlyLink"
import Footer from "../components/Footer"
import Menu from "../components/Menu"
import TagsView from "../components/TagsView"
import { toJS } from "immutable"
import { getInitData } from "../actions"
import { GET_ARTICLE_LIST , GET_CONTRIBTIONS } from "../actions"

class App extends Component{

	componentDidMount(){
		const { dispatch , APIconfig } = this.props 
		dispatch(getInitData(APIconfig.timeLineDataUrl, GET_CONTRIBTIONS))
		dispatch(getInitData(APIconfig.articleListDataUrl, GET_ARTICLE_LIST))
	}

	render(){
		const { articleList , contribtionsData } = this.props

		return (<div>
				<Header />
				<Menu />
				<div className="main">
					<div className="article-wrap">
						<div className="show-view">
							<TimeLineView contribtionsData ={ contribtionsData } />
							{/*<TagsView />*/}
						</div>
						<ArtcileList listData={ articleList } />
					</div>
				</div>
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
	}
}

export default connect(mapStateToProps)(App)