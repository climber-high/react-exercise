import actionType from './actionType'

export const increment = (id) => {
    return {
        type: actionType.CART_AMOUNT_INCREMENT,
        payload: {
            id
        }
    }
}

export const decrement = (id) => {
    return {
        type: actionType.CART_AMOUNT_DECREMENT,
        payload: {
            id
        }
    }
}

export const incrementAsync = (id) => {
    setTimeout(() => {
        return {
            type: actionType.CART_AMOUNT_INCREMENT,
            payload: {
                id
            }
        }
    },2000)
}

export const decrementAsync = (id) => {
    setTimeout(() => {
        return {
            type: actionType.CART_AMOUNT_DECREMENT,
            payload: {
                id
            }
        }
    },2000)
}