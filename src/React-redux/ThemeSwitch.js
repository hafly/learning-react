import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from "./react-redux";

class ThemeSwitch extends Component {
    static contextTypes = {
        store: PropTypes.object
    }

    // dispatch action 去改变颜色
    handleSwitchColor(color) {
        const {store} = this.context
        store.dispatch({
            type: 'CHANGE_COLOR',
            themeColor: color
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <button
                    style={{color: this.props.themeColor}}
                    onClick={this.handleSwitchColor.bind(this, 'red')}>Red
                </button>
                <button
                    style={{color: this.props.themeColor}}
                    onClick={this.handleSwitchColor.bind(this, 'blue')}>Blue
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}
export default connect(mapStateToProps)(ThemeSwitch)