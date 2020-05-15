import React, { Component } from 'react'

export default class TestTask extends Component {
    // constructor def
    constructor(props){
        super(props);
        this.state={
            data :[
                {
                    id: 1,
                    task_name:"some task name"
                },
                {
                    id: 2,
                    task_name:"another task name"
                }
            ]
        }
    }
    // 
    onCheck(){
        var check_data = this.state.data[0].task_name;
        alert(check_data);
    }
    // 
    render() {
        return (
            <div>
                {JSON.stringify(this.state.data)}
                
                <input type="text" name="" id="" />
                <textarea name="" id="" cols="30" rows="10">
                {(this.state.data[0].task_name)}
                
                </textarea>
                <button onClick={this.onCheck.bind(this)}>Check</button>
            </div>
        )
    }
}
