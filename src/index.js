import React,{Component} from 'react'
import ReactDOM from 'react-dom'

class AutoFocusInput extends Component {
    componentDidMount () {
        this.input.focus()
    }

    render () {
        return (
            <input ref={(input) => this.input = input} />
        )
    }
}

ReactDOM.render(
    <AutoFocusInput />,
    document.getElementById('root')
)