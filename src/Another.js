import React, { Component } from 'react'
import withCopyright from './WithCopyright'

@withCopyright
class Another extends Component {
    render() {
        return (
            <div>
                另外一个组件{this.props.name}
            </div>
        )
    }
}

export default Another