import React, { Component } from 'react'
import { increment, decrement, incrementAsync, decrementAsync } from '../../actions/cart'
import { connect } from 'react-redux'


class CartList extends Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         cartList: []
    //     }
    // }
    // getState = () => {
    //     this.setState({
    //         cartList:this.props.store.getState().cart
    //     })
    // }
    // componentDidMount () {
    //     this.getState()
    //     this.props.store.subscribe(this.getState)
    // }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>商品名称</th>
                        <th>价格</th>
                        <th>数量</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.cartList.map(item => {
                            return (
                                <tr key={item.getIn(['id'])}>
                                    <td>{item.getIn(['id'])}</td>
                                    <td>{item.getIn(['title'])}</td>
                                    <td>{item.getIn(['price'])}</td>
                                    <td>
                                        <button onClick={this.props.decrementAsync.bind(this,item.getIn(['id']))}>等一下减</button>
                                        <button onClick={this.props.decrement.bind(this,item.getIn(['id']))}>-</button>
                                        <span>{item.getIn(['amount'])}</span>
                                        <button onClick={this.props.increment.bind(this,item.getIn(['id']))}>+</button>
                                    </td>
                                    <td></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        cartList: state.getIn(['cart'])
    }
}

export default connect(mapStateToProps,{ increment, decrement, incrementAsync, decrementAsync })(CartList)

