import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Title extends Component {
    handleClickOnTitle (e) {
        console.log(e.target.innerHTML);
        // 如果你想在事件函数当中使用当前的实例，你需要手动地将实例方法 bind 到当前实例上再传入给 React.js
        console.log(this);
    }

    render () {
        return (
            // 最好在 constructor 中绑定事件
            <h1 onClick={this.handleClickOnTitle.bind(this)}>React 小书</h1>
        )
    }
}

class Header extends Component {
    render () {
        return (
            <div>
                <Title />
                <h2>This is Header</h2>
            </div>
        )
    }
}

class Main extends Component {
    render () {
        return (
            <div>
                <h2>This is main content</h2>
            </div>
        )
    }
}

class Footer extends Component {
    render () {
        return (
            <div>
                <h2>This is footer</h2>
            </div>
        )
    }
}

class Index extends Component {
    render () {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
)