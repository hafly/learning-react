import React, {Component} from 'react'
import {Provider} from './react-redux'
import Header from './Header'
import Content from './Content'

function createStore(reducer) {
    let state = null
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }
    dispatch({}) // 初始化 state，state为null，action为{}
    return {getState, dispatch, subscribe}
}

const themeReducer = (state, action) => {
    if (!state) return {
        themeColor: 'red'
    }
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {...state, themeColor: action.themeColor}
        default:
            return state
    }
}

const store = createStore(themeReducer)

export default class Index extends Component {
    render() {
        return (
            <Provider store={store}>
                <Header/>
                <Content/>
            </Provider>
        )
    }
}

