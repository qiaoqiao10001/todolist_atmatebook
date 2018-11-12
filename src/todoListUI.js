import {Button,Input,List} from 'antd'
import React from "react";

const TodoListUI = (props) => {
    return (
        <div>
            <Input type="text" onChange={props.handleInputChange} value={props.value} style={{width:'400px',margin:'20px 20px 0 20px'}}/>
            <Button type="primary" onClick={props.handleSubmitValue}>提1交</Button>
            <List
                style={{width:'400px',marginLeft:'20px'}}
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (<List.Item onClick={props.handleItemDelete.bind(this,index)}>{item}</List.Item>)}
            />
        </div>
    )
}
export default TodoListUI;