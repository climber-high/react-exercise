import React, { Component } from 'react'

export default class TodoList extends Component {
    render() {
        const data = this.props.todos
        return (
            <ul>
                {data.map((item,index) => {
                    return <li key={item.id}>{item.title}</li>
                })}
            </ul>
        )
    }
}
