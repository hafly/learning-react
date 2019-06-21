import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class LikeButton extends Component {
    // 传入默认配置，render中将不用判断
    // static defaultProps = {
    //     likedText: '取消',
    //     unlikedText: '点赞'
    // }

    constructor() {
        super();
        this.state = {
            isLiked: false
        };
    }

    handleClickOnLikeButton() {
        this.setState({
            isLiked: !this.state.isLiked
        });

        // 触发props传进来的事件
        if (this.props.onClick) {
            this.props.onClick()
        }
    }

    render() {
        // 让组件能适应不同场景下的需求，我们就要让组件具有一定的“可配置”性。
        // React.js 的 props 就可以帮助我们达到这个效果。
        const likedText = this.props.likedText || '取消';
        const unlikedText = this.props.unlikedText || '点赞';

        // const wordings = this.props.wordings || {
        //     likedText: '取消',
        //     unlikedText: '点赞'
        // }
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? likedText : unlikedText} 👍
            </button>
        )
    }
}

class Index extends Component {
    render() {
        // 那么怎么把 props 传进去呢？在使用一个组件的时候，可以把参数放在标签的属性当中，所有的属性都会作为 props 对象的键值
        return (
            <div>
                <LikeButton likedText='已赞' unlikedText='赞'
                            onClick={() => console.log('Click on like button!')}/>
                {/*<LikeButton wordings={{likedText: '已赞', unlikedText: '赞'}} />*/}
            </div>
        )
    }
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
);