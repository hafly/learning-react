import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class HelloWorld extends Component {
//     constructor() {
//         super()
//     }
//
//     sayHi () {
//         alert('Hello World')
//     }
//
//     render () {
//         return (
//             <div onClick={this.sayHi.bind(this)}>Hello World</div>
//         )
//     }
// }

// 函数式组件只能接受 props 而无法像跟类组件一样可以在 constructor 里面初始化 state。
// 你可以理解函数式组件就是一种只能接受 props 和提供 render 方法的类组件。
const HelloWorld = (props) => {
    console.log(props);
    const sayHi = (event) => alert('Hello World')
    return (
        <div onClick={sayHi}>Hello World</div>
    )
}

ReactDOM.render(
    <HelloWorld msg={'Hello World'}/>,
    document.getElementById('root')
);