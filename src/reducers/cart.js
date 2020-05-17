import actionType from '../actions/actionType'
import { fromJS } from 'immutable'

const initState = fromJS([{
    id: 1,
    title: 'Apple',
    price: 8888,
    amount: 10
},{
    id: 2,
    title: 'Orange',
    price: 6666,
    amount: 12
}])

export default (state = initState, action) => {
    switch (action.type) {
        case actionType.CART_AMOUNT_INCREMENT:
            return state.map(item => {
                if(item.getIn(['id']) === action.payload.id) {
                    return item.update('amount',(v) => v+1)
                }
                return item

            })
        case actionType.CART_AMOUNT_DECREMENT:
            return state.map(item => {
                if(item.getIn(['id']) === action.payload.id) {
                    return item.update('amount',v => v - 1)
                }
                return item
            })
        default:
            return state
    }
}
