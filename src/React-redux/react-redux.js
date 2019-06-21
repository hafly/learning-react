import React, { Component } from 'react'
import PropTypes from 'prop-types'

// export default Connect = (WrappedComponent) => {
//     class Connect extends Component {
//         static contextTypes = {
//             store: PropTypes.object
//         }
//
//         // TODO: 如何从 store 取数据？
//
//         render () {
//             return <WrappedComponent />
//         }
//     }
//
//     return Connect
// }

export const connect = (mapStateToProps) => (WrappedComponent) => {
    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object
        }

        constructor () {
            super()
            this.state = { allProps: {} }
        }

        componentWillMount () {
            const { store } = this.context
            this._updateProps()
            store.subscribe(() => this._updateProps())
        }

        // 给高阶组件增加监听数据变化重新渲染的逻辑
        _updateProps () {
            const { store } = this.context
            let stateProps = mapStateToProps(store.getState(), this.props) // 额外传入 props，让获取数据更加灵活方便
            this.setState({
                allProps: { // 整合普通的 props 和从 state 生成的 props，更新所有
                    ...stateProps,
                    ...this.props
                }
            })
        }

        render () {
            const { store } = this.context
            let stateProps = mapStateToProps(store.getState())
            // {...stateProps} 意思是把这个对象里面的属性全部通过 `props` 方式传递进去
            return <WrappedComponent {...stateProps} />
        }
    }

    return Connect
}