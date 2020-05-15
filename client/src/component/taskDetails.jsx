import React, { Component } from 'react'
import './taskDetails.css'

export default class TaskDetails extends Component {
    // constructor def
    constructor(props){
        super(props);
        this.state={
            // state variable
            task_info : [
                {
                    task_id: 1,
                    task_name :"some task",
                    task_details :" task details",
                    task_status : "completed",
                    created_date : "12/03/2018",
                    updated_date : "12/03/2019"
                },
                {
                    task_id: 2,
                    task_name :"some task",
                    task_details :" task details",
                    task_status : "completed",
                    created_date : "12/03/2018",
                    updated_date : "12/03/2019"
                }
            ]
        }
    }
    // 
    
    // button def
    fetchAllTask(){
        fetch('/all-task')
            .then(res =>res.json())
            .then(task_info => this.setState({task_info},() => {
                console.log("Task Details:",task_info);
            }))
    }
    // 
    btn_on_save(e){
        e.preventDefault();
        // console.log("You have clicked save button");
        // fetch user form data 
        var form_data = {
            task_name : this.refs.txt_task_name.value,
            task_details : this.refs.txt_task_details.value,
            task_status : this.refs.txt_task_status.value,
            created_date: this.refs.txt_task_created_date.value
        }
        // call to the backend post api 
        var request = new Request('/new-task',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(form_data)
        })
        fetch(request)
            .then(res => res.json())
            .then(json =>{
                if(json.success){
                    alert("Successfully Created Task");
                    this.fetchAllTask();
                }
                else{
                    alert(json.message);
                }
            })

        console.log(form_data);

    }
    // 
    onDelete(task_id){
        console.log("You have clicked the delete button");
        console.log(task_id);
        // fetch backend api to delete from database
        fetch(`/delete/${task_id}`)
            .then( res => res.json())
            .then(json => {
                if(json.success){
                    alert("Successfully Deleted");
                    this.fetchAllTask();
                }
                else{
                    alert(json.message);
                }
            })

    }

    // 
    onEdit(task_id){
        console.log("you have clicked update button",task_id);
        // make call to the backend api
        // fetch(`/update/${task_id}`)
        //     .then(res => res.json(),(res) => { console.log(res.json)})
        //     .then(json =>{
        //         if(json.success){
        //             alert(json.message);
        //             // redirect to the next page
        //             // window.location.href="/#/task-update";
        //         }
        //         else{
        //             alert(json.message);
        //         }
        //     })


        // this.props.history.push({
        //     pathname:"/task-update",             
        //     state: {task_id:task_id, }
        //     });


        window.location.href=`/#/task-update/${task_id}`




    }

    // end of button def

    // component did mount
    componentDidMount(){
        // 
        this.fetchAllTask();
        // 
    }
    // end of component didmount

    render() {
        return (
            <div>
                <h3 className="task_header">Task Details</h3>
                <h3 className="new_task_header">Create New Task</h3>
                {/* task details section */}
                <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-8 task_inner_body table-responsive">
                        <table className="table table-bordered table_inner_body">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Task Name</th>
                                    <th>Task Details</th>
                                    <th>Task Status</th>
                                    <th>Created Date</th>
                                    <th>Event</th>    
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.task_info.map(task_info =>
                                <tr key={task_info.task_id}>
                                    <td>{task_info.task_id}</td>
                                    <td>{task_info.task_name}</td>
                                    <td>{task_info.task_details}</td>
                                    <td>{task_info.task_status}</td>
                                    <td>{task_info.created_date}</td>
                                    <td>
                                        <button className="btn" onClick ={this.onDelete.bind(this,task_info.task_id)}>X</button>
                                        <button className="btn" onClick = {this.onEdit.bind(this,task_info.task_id)}>Edit</button>
                                    </td>
                                </tr>
                                )}
                            </tbody>
                        </table>                    
                    </div>
                    {/* create new task section */}
                    <div className="col-sm-4 new_task_section">
                        <form name="new_task_form">
                        <input 
                        type="text" 
                        name="txt_task_name" 
                        id="txt_task_name" 
                        ref="txt_task_name" 
                        placeholder="Task Name"
                        className="txt_input"/>
                        
                        <textarea 
                        name="txt_task_details" 
                        id="txt_task_details" 
                        ref="txt_task_details" 
                        className="txt_input"
                        placeholder="  Task Details"
                        cols="10" rows="5">
                      
                        </textarea>    

                        <input 
                        type="text" 
                        name="txt_task_status" 
                        id="txt_task_status" 
                        ref="txt_task_status" 
                        placeholder="Task Status"
                        className="txt_input"/>

                        <input 
                        type="Date" 
                        name="txt_task_created_date" 
                        id="txt_task_created_date" 
                        ref="txt_task_created_date" 
                        placeholder="Created Date"
                        className="txt_input"/>
                        
                        <button 
                        onClick={this.btn_on_save.bind(this)}
                        className="btn btn-outline-secondary  btn_task_save">
                        Save
                        </button>           

                        </form>           
                    </div>
                    {/* end of new task section */}
                    </div>
                </div>
                {/* end of  task details section */}
            </div>
        )
    }
}
