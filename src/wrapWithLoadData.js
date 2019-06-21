import React, { Component } from 'react'

// 高阶组件就是一个函数，传给它一个组件，它返回一个新的组件。
export default (WrappedComponent, name) => {
    class NewComponent extends Component {
        constructor () {
            super()
            this.state = { data: null }
        }

        componentWillMount () {
            let data = localStorage.getItem(name)
            this.setState({ data })
        }

        render () {
            return <WrappedComponent data={this.state.data} />
        }
    }
    return NewComponent
}