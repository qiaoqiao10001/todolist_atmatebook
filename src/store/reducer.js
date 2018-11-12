import {CHANGE_INPUT_VALUE,SUBMIT_VALUE,DELETE_ITEM,INIT_LIST} from './actionType'
const defaultState = {
    inputValue :'',
    list:[]
}
export default (state = defaultState,action) => {
    if(action.type===CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === SUBMIT_VALUE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(action.value)
        newState.inputValue = ''
        return newState
    }
    if(action.type === DELETE_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        console.log(action);
        newState.list.splice(action.index,1)
        return newState
    }
    if(action.type===INIT_LIST){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.value
        return newState
    }
    return state;
}