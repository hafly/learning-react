import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';

// 第一层
class Index extends Component {
    static childContextTypes = {
        themeColor: PropTypes.string
    }

    constructor () {
        super()
        this.state = { themeColor: 'red' }
    }

    componentWillMount () {
        this.setState({ themeColor: 'green' })
    }

    getChildContext () {
        return { themeColor: this.state.themeColor }
    }

    render () {
        return (
            <div>
                <Header />
                <Main />
            </div>
        )
    }
}

// 第二层
class Header extends Component {
    render () {
        return (
            <div>
                <h2>This is header</h2>
                <Title />
            </div>
        )
    }
}

class Main extends Component {
    render () {
        return (
            <div>
                <h2>This is main</h2>
                <Content />
            </div>
        )
    }
}

// 第三层
class Title extends Component {
    // 任意深度的子组件都可以通过 contextTypes 来声明你想要的 context 里面的哪些状态，然后可以通过 this.context 访问到那些状态
    static contextTypes = {
        themeColor: PropTypes.string
    }

    render () {
        return (
            <h1 style={{ color: this.context.themeColor }}>React.js 小书标题</h1>
        )
    }
}

class Content extends Component {
    render () {
        return (
            <div>
                <h2>React.js 小书内容</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('root')
)