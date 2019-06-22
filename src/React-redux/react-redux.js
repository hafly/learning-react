import React, {Component} from 'react'
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

// 高阶组件。Connect 会去 context 里面取出 store。现在要把 store 里面的数据取出来通过 props 传给 WrappedComponent。
export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object
        }

        constructor() {
            super()
            this.state = {allProps: {}}
        }

        componentWillMount() {
            const {store} = this.context
            this._updateProps()
            store.subscribe(() => this._updateProps())
        }

        // 给高阶组件增加监听数据变化重新渲染的逻辑
        _updateProps() {
            const {store} = this.context
            let stateProps = mapStateToProps
                ? mapStateToProps(store.getState(), this.props)
                : {} // 防止 mapStateToProps 没有传入
            let dispatchProps = mapDispatchToProps
                ? mapDispatchToProps(store.dispatch, this.props)
                : {} // 防止 mapDispatchToProps 没有传入
            this.setState({
                allProps: {
                    ...stateProps,
                    ...dispatchProps,
                    ...this.props
                }
            })
        }

        render() {
            return <WrappedComponent {...this.state.allProps} />
        }
    }

    return Connect
}