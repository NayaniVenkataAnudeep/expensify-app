import { createStore } from 'redux'

// Action Generators

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({ count }) => ({
    type: 'SET',
    count
})

// Reducer
// 1. Reducers are pure functions
// 2. Never change state & action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state
    }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

// Actions - an object that gets sent to the store

// I'd like to increment the count
/* store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
}) */

store.dispatch(incrementCount({ incrementBy: 5 }))

//unsubscribe()

store.dispatch(incrementCount())

store.dispatch(decrementCount({ decrementBy: 3 }))

// I'd like to reset the count
store.dispatch(resetCount())

// I'd like to decrement the count
store.dispatch(decrementCount())

store.dispatch(setCount({ count: 101 }))