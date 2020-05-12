import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

class BackHome extends Component {
    goHome = () =>{
        this.props.history.push({
            pathname: '/home',
            s:{
                id: this.props.match.params.id
            }
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.goHome}>{this.props.children}</button>
            </div>
        )
    }
}

export default withRouter(BackHome)
