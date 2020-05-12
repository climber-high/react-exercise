import React, { useState, useEffect, Component } from 'react'
import {render} from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { observer, Provider, inject } from "mobx-react";
// import { CounterProvider } from './counterStore'
import {
    CountBtn,
    Counter
} from './components'


// import App from './App'

// const Counter = () => {

//     const [count, setCount] = useState(20)
//     const [title, setTitle] = useState('abc')

//     useEffect(() => {
//         console.log('更新了')
//         document.title = `当前的数量为${count}`
//     })

//     return (
//       <div>
//         <p>当前的数量为{count}</p>
//         <button onClick = {() => { setCount(count-1) }}>-</button>
//         <span>{count}</span>
//         <button onClick = {() => { setCount(count+1) }}>+</button>
//       </div>
//     )
//   }

import counterStore from './store'
import Counter2 from './store/Counter2'

@inject('counter')
@observer
class App extends Component {
    render(){
        console.log(this.props)
        return (
            <>
                <CountBtn onClick={this.props.counter.decrement} type="decrement">-</CountBtn>
                <Counter />
                <CountBtn onClick={this.props.counter.increment} type="increment">+</CountBtn>
            </>
        )
    }
}

// import { Map, List, fromJS, updateIn, is } from 'immutable'
// const state = {
//     name: 'zs',
//     courses: ['h5','java']
// }
// const newState = Map(state)
// const newName = newState.set('name','ls');
// console.log(newName.get('name'))

// const list1 = List([1,2]);
// const list2 = list1.push(3,4,5);
// console.log(list1.get(4),list2.get(4))

// const imState = fromJS(state)
// console.log(imState.get('courses').get(0))
// console.log(imState.getIn(['courses',0]))

// const newImState = imState.setIn(['sexy'],'nan');
// console.log(newImState.getIn(['sexy']));

render(
    // <Router>
    //     <Route component={App} />
    // </Router>,
    // <Counter />,
    // <CounterProvider>
       // <App />
    // </CounterProvider>,

    <Provider counter={counterStore} Counter2={Counter2}>
        <App />
    </Provider>,
    document.querySelector('#root')
)

