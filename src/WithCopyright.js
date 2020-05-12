import React, { Component } from 'react'

const withCopyright = (YourComponent) => {
    return class WithCopyright extends Component {
        render() {
            return (
                <div>
                    <YourComponent {...this.props}/>
                    这是高阶组件的内容
                </div>
            )
        }
    }
}

export default withCopyright
