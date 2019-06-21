import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LikeButton extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Tom',
            isLiked: false
        };
        // 在 constructor 中绑定
        // this.handleClickOnLikeButton = this.handleClickOnLikeButton.bind(this);
    }

    handleClickOnLikeButton() {
        console.log(this.state.isLiked)
        // 当我们要改变组件的状态的时候，不能直接用 this.state = xxx 这种方式来修改，如果这样做 React.js 就没办法知道你修改了组件的状态，它也就没有办法更新页面。
        this.setState({
            isLiked: !this.state.isLiked
        });
        // React.js 并不会马上修改 state。
        console.log(this.state.isLiked)

        // 接受函数参数
        this.setState((prevState) => {
            console.log(prevState);
            return {name: prevState.name + 1}
        });
    }

    render() {
        // 多个 setState 只渲染一次
        // 消息队列的同一个消息中的 setState 会自动合并，只会渲染一次
        console.log('渲染一次');
        return (
            // onClick={(e) => this.handleClick(e)}
            // 也可以使用箭头函数绑定每次都会创建不同的回调函数，大多情况下没问题。但如果该回调函数作为prop传入子组件时，这些组件可能会进行额外的重新渲染。
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? '取消' : '点赞'} 👍
            </button>
        )
    }
}

class Index extends Component {
    render() {
        return (
            <div>
                <LikeButton/>
            </div>
        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
)