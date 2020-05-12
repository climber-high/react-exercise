import React, { Component } from 'react'
import { CounterConsumer } from '../../counterStore'

class CountBtn extends Component {
    
    render () {
        return(
            // <CounterConsumer>
            //     {
            //         ({onIncrement,onDecrement}) => {
            //             const handle = this.props.type === 'increment' ? onIncrement : onDecrement
            //             return <button onClick={handle}>{this.props.children}</button>
            //         }
            //     }
            // </CounterConsumer>

            <>
                <button onClick={this.props.onClick}>{this.props.children}</button>
            </>
        ) 
    }
}

export default CountBtn
