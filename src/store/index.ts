import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers, Store } from 'redux'
import { articleReducer } from 'store/state.article'

const rootReducer = combineReducers({
  articles: articleReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store: Store = createStore(rootReducer, applyMiddleware(thunk))
