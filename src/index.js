import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import wrapWithLoadData from './wrapWithLoadData'

// 高阶组件其实就是为了组件之间的代码复用，它通过装饰者模式实现
// 高阶组件内部的包装组件和被包装组件之间通过 props 传递数据。
class InputWithUserName extends Component {
    render () {
        return <input value={this.props.data} readOnly/>
    }
}

InputWithUserName = wrapWithLoadData(InputWithUserName, 'username')

ReactDOM.render(
    <InputWithUserName/>,
    document.getElementById('root')
)