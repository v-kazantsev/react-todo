import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import rootReducer from 'reducers/rootReducer'

const configureStore = (initialState) => {
	const middlewares = []
	const middlewareEnhancer = applyMiddleware(...middlewares)
	const storeEnhancers = [middlewareEnhancer]
	const composedEnhancer = composeWithDevTools(...storeEnhancers)
	const store = createStore(rootReducer, initialState, composedEnhancer)
	return store
}

export default configureStore
