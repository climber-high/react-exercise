import React, { Component, createContext } from 'react'

const {
    Provider,
    Consumer: CounterConsumer
} = createContext()

class CounterProvider extends Component{
    constructor(){
        super()
        this.state = {
            count:100
        }
    }

    increment = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    decrement = () => {
        this.setState({
            count : this.state.count - 1
        })
    }


    render () {
        return (
            <Provider value={{
                count:this.state.count,
                onIncrement: this.increment,
                onDecrement: this.decrement
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {
    CounterProvider,
    CounterConsumer
}
