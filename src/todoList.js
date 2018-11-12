import React from 'react'

import 'antd/dist/antd.css'
import store from './store'
import TodoListUI from './todoListUI'
import {ListDataAction,getInputChangeAction,getSubmitValueAction,getDeleteItemAction} from './store/actionCreators'





export default class TodoList extends React.Component{
    constructor(props){
        super(props)
        //数据源
        this.state = store.getState()
        console.log(this.state);
        store.subscribe(this.handleStoreChange);
    }

    handleStoreChange = () => {
        this.setState(store.getState());
    }

    handleInputChange = (e) => {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }

    handleSubmitValue = () => {
        const action = getSubmitValueAction(this.state.inputValue)
        store.dispatch(action)

    }

    handleItemDelete = (index) => {
        const action = getDeleteItemAction(index)
        store.dispatch(action)
    }

    componentDidMount(){
        // axios.get('/mydata').then((res) => {
        //     const data = res.data
        //     const action = getInitListAction(data)
        //     store.dispatch(action)
        // })
        const action = ListDataAction();
        store.dispatch(action)  //此时action是函数，  redux-thunk 才能使用函数
    }

    render(){
        return (
           <TodoListUI
               handleInputChange={this.handleInputChange}
               handleSubmitValue={this.handleSubmitValue}
               value={this.state.inputValue}
               list={this.state.list}
               handleItemDelete={this.handleItemDelete}
           />
        )
    }
}