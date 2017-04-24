import React from "react"
import { render } from "react-dom"
import Redux,{ createStore ,applyMiddleware } from "redux"
import thunk from "redux-thunk"
import {createLogger} from "redux-logger"
import { Provider } from "react-redux"
import Reducer from "./reducers/index"
import App from "./containers/Home"

const middleware = [ thunk ]
if(process.env.NODE_ENV !== 'production'){
	middleware.push(createLogger())
}

const store = createStore(Reducer,applyMiddleware(...middleware))

const APIConfig = {
	"timeLineDataUrl": "./TimeLineData.json",
	"articleListDataUrl":"./ArticleListData.json",
}

render(
	<Provider store={ store } >
		<App APIconfig = {APIConfig } />
	</Provider>,
	document.getElementById("root")
)

