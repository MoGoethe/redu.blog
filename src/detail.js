import React from "react"
import { render } from "react-dom"
import Redux,{ createStore ,applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { createLogger } from "redux-logger"
import { Provider } from "react-redux"
import Reducer from "./reducers/index"
import App from "./containers/Detail"

const middleware = [ thunk ]
process.env.NODE_ENV !== 'production' ? middleware.push(createLogger()) : ''

const store = createStore(Reducer,applyMiddleware(...middleware))

render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById("root")
)

