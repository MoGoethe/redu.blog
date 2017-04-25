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
import { GET_ARTICLE_LIST , GET_CONTRIBTIONS , getInitData , GET_TAGS_DATA} from "../actions"

class App extends Component{

	componentDidMount(){
		const { dispatch , APIconfig } = this.props 
		dispatch(getInitData(APIconfig.timeLineDataUrl, GET_CONTRIBTIONS))
		dispatch(getInitData(APIconfig.articleListDataUrl, GET_ARTICLE_LIST))
		dispatch(getInitData(APIconfig.tagsDataUrl, GET_TAGS_DATA))
	}

	render(){
		const { articleList , contribtionsData , menuData , dispatch ,tagsData } = this.props
		return (<div>
				<Header />
				<Menu _dispatch={dispatch} menuListData={ menuData.get("menuListData").toJS() } currentMenuItem = {menuData.get("currentMenuItem")} />
				<div className="main">
					<div className="article-wrap">
						<div className="show-view">
							{
								menuData.get("showViewType")=== 0 ?
								<TimeLineView contribtionsData ={ contribtionsData } />
								:
								<TagsView tagsData ={ tagsData.getIn(["tagsData","tagsListData"]).toJS() } />
							}							
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
		tagsData:state.TagsReducer,
		menuData:state.InitReducer,
	}
}

export default connect(mapStateToProps)(App)