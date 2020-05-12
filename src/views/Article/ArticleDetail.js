import React, { Component } from 'react'
import { BackHome } from '../../components'

export default class ArticleDetail extends Component {
    render() {
        return (
            <div>
                ArticleDetail{this.props.match.params.id}
                <BackHome>回首页</BackHome>
            </div> 
        )
    }
}
