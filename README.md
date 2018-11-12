##使用redux做todolistdemo

要想使用redux先需要引入安装redux
yarn add redux

然后在src里面创建一个store文件夹
包含
``js
    index.js   //封装store
    reducer.js   //处理所有的数据
    actionType.js    //封装所有的 actionType 类型
    actionCreators.js   //封装所有的action
    ``js

需要在constructor函数中定义初始的state，可以作为统一数据源
    this.state = store.getState()

定义好action 之后
然后再在事件处理函数里面分发action
    const action = getSubmitValueAction(this.state.inputValue)
    store.dispatch(action)

然后在reducer里面处理新分发的action来更新state
一般的套路是
    判断action.type的值，处理对应事件分发的state
    深拷贝一份state给newState
    然后对newState进行处理
    返回newState
    如下：
    if(action.type==="change_input_value"){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

newState返回之后然后再在组件中使用store更新state
    首先需要做的是

    更新状态
    handleStoreChange = () => {
            this.setState(store.getState());
        }
    组件订阅更新的状态
        store.subscribe(this.handleStoreChange);
