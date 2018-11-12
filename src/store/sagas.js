//可以接受action了
import {takeEvery,put} from 'redux-saga/effects'
import {GET_INIT_LIST} from './actionType'
import axios from 'axios'
import {initListAction} from './actionCreators'

function* getInitList(){
    //console.log('abc');
//    异步逻辑在这里
    try{
    const res = yield axios.get('/mydata');
    const action = initListAction(res.data)
        yield put(action);
    }catch{
        console.log('网络请求失败')
    }
    //yield takeEvery(GET_INIT_LIST,getInitList)
}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST,getInitList)
    //yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}
export default mySaga;

//export default InitList;