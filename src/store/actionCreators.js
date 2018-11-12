//统一派发action
import {GET_INIT_LIST,CHANGE_INPUT_VALUE, DELETE_ITEM, SUBMIT_VALUE,INIT_LIST} from "./actionType";



export const getInputChangeAction = (value) => ({
    type:CHANGE_INPUT_VALUE,
    value
})

export const getSubmitValueAction = (value) => ({
    type:SUBMIT_VALUE,
    value
})
export const getDeleteItemAction = (index) => ({
    type:DELETE_ITEM,
    index
})

export const getInitListAction = (value) => ({
    type:INIT_LIST,
    value
})

export const initListAction = (value) => ({
    type:INIT_LIST,
    value
})



export const getInitList = () => ({
    type:GET_INIT_LIST
})

// export const getInitList = () => ({
//     type:GET_INIT_LIST
// })

// export const ListDataAction = () => {  //获取数据的函数
//     return (dispatch) => {
//         axios.get('/mydata').then((res) => {
//             const data = res.data
//             const action = getInitListAction(data)
//             dispatch(action)
//         })
//     }
// }