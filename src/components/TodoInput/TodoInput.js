import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'

export default class TodoInput extends Component {
    constructor(){
        super();
        this.state = {
            inputValue : ''
        }
        this.inputDom = createRef()
    }

    static propTypes = {
        btnTxt : PropTypes.string.isRequired
    }

    static defaultProps = {
        btnTxt: '添加'
    }

    handleClick = (e) => {
        this.setState({
            inputValue : e.currentTarget.value
        })
    }

    handleKeyup = (e) => {
        if(e.keyCode === 13){
            this.handleAdd()
        }
    }

    handleAdd = (e) => {
        this.props.addTodo(this.state.inputValue);
        this.setState({
            inputValue : ''
        },() => {
            this.inputDom.current.focus()
        })
    }

    
    render() {
        return (
            <div>
                <input 
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleClick}
                    onKeyUp={this.handleKeyup}
                    ref = {this.inputDom}
                />
                <button onClick={this.handleAdd}>{this.props.btnTxt}</button>
            </div>
        )
    }
}
