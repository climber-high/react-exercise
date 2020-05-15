import React, { Component, Fragment } from 'react'
import {TodoHeader, TodoInput, TodoList } from './components'
import {Route, Link, Redirect, Switch} from 'react-router-dom'
import { Button } from 'antd'
import './App.scss'

import withCopyright from './WithCopyright'
import Another from './Another'

import { getTodos } from './services'

import { Home, Article, Users, NotFound, ArticleDetail } from './views'

import { CartList, BlogList } from './components'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            title : '待办事项',
            article : '<div>123</div>',
            todos:[{
                id: 1,
                title: '吃饭',
                isCompleted: true
            },{
                id: 2,
                title: '睡觉',
                isCompleted: false
            }]
        }
    }

    componentDidMount () {
        // getTodos().then((res) => {
        //     console.log(res)
        // })
    }

    addTodo = (todoTitle) => {
        this.setState({
            todos:this.state.todos.concat({
                id:Math.random(),
                title:todoTitle,
                isCompleted: true
            })
        },() => {
            console.log(this.state.todos)
        })
    }

    render() {
        return ( 
            <Fragment> 
                {/* <Button type="primary">123</Button> */}
                {/* {
                    <div dangerouslySetInnerHTML={{__html: this.state.article}} />
                }
                <TodoHeader title={this.state.title} x={1}>
                    <div>123</div>
                </TodoHeader>
                <TodoInput addTodo={this.addTodo} btnTxt="add"/>
                <TodoList todos={this.state.todos} /> */}

                {/* <ul>
                    <li><Link to="/home">首页</Link></li>
                    <li><Link to="/article">文章</Link></li>
                    <li><Link to="/users">用户</Link></li>
                </ul>
                <Switch>
                    <Route component={Home} path="/home" /> */}
                    {/* <Route  path="/home" render={(routeProps) => {
                        return <Home {...routeProps} title={123}/>
                    }} /> */}
                    {/* <Route component={Article} path="/article" exact />
                    <Route component={ArticleDetail} path="/article/:id" />
                    <Route component={Users} path="/users" />
                    <Route component={NotFound} path="/404" />
                    <Redirect to="/home" from="/" exact/>
                    <Redirect to="/404" />
                </Switch>
                
                <br />
                <Another name="666"/>
                <br /> */}

                {/* <BlogList /> */}
                <CartList />
            </Fragment>
        )
    }
}

export default App

