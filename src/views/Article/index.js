import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import ArticleDetail from './ArticleDetail'

export default class ArticleList extends Component {
    render() {
        return (
            <div>
                <Link to="/article/1">文章一</Link>
                <Link to={{
                    pathname:"/article/2",
                    state:{
                        'form':'article'
                    }
                }}>文章二</Link>
            </div>
        )
    }
}
