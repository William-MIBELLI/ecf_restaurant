import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './root-reducer'
import logger from 'redux-logger'

const middleWares = [logger]

const composeEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined, composeEnhancers)