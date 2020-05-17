//合并reducers
import { combineReducers } from 'redux-immutable'
import cart from './cart'
import blog from './blog'

export default combineReducers({
    cart,
    blog
})