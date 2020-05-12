import React, { Component } from 'react'
import { CounterConsumer } from '../../counterStore'
import { observer, inject } from "mobx-react";

@inject((store) => {
    console.log(store)
    return {
        count:store.counter.count,
        doubleCount:store.counter.doubleCount
    }
})
@observer
class Counter extends Component {
    render () {
        return(
            // <CounterConsumer> 
            //     {
            //         ({count}) => {
            //             return <span>{count}</span>
            //         }
            //     }
            // </CounterConsumer>

            <> 
                <span>{this.props.count}</span>
                <br />
                <span>{this.props.doubleCount}</span>
            </>
        )
    }
}

export default Counter