import React, { Component } from 'react'

export default class TaskUpdate extends Component {
    // constructor def
    constructor(props){
        super(props);
        this.state={
            // update_task_info :[
            //     {
            //         task_id : 1,
            //         task_name: "task name",
            //         task_details: "task details",
            //         task_status: "task status",
            //         created_date:"12/10/2019",
            //         updated_date:"03/05/2019"
            //     }
               
            // ]
            update_task_info :[{}]
          
        }
    }

    // button def
    onUpdate(e){
        e.preventDefault();
        // fetch form data
        var task_id = this.props.match.params.task_id;
        var form_data = {
            task_name : this.refs.txt_task_name.value,
            task_details : this.refs.txt_task_details.value,
            task_status : this.refs.txt_task_status.value,
            created_date : this.refs.txt_created_date.value,
            task_id
        }

        console.log(form_data);
        // make a post request and call backend api
        var request = new Request('/savetask',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(form_data)
        })
        fetch(request)
            .then(res => res.json())
            .then(json => {
                if(json.success){
                    alert(json.message);
                    window.location.href="http://localhost:3000/#/"
                }
                else{
                   alert("Cannot Updated")
                }
            })
    }

    // 
    onFetchUpdateData(){
        var task_id = (this.props.match.params.task_id);
        console.log(task_id);
        fetch(`/update/${task_id}`)
            .then( res => res.json())
            .then(update_task_info => this.setState({update_task_info},() => {
                console.log("Update Task Details:",update_task_info);
            }))
        
    }
    // end of button def

    componentDidMount(){
        console.log("Update task component has mounted");
        this.onFetchUpdateData();

    }

    // 
    render() {
        var update_info = this.state.update_task_info[0];
        return (
            <div>
                {/* {JSON.stringify(update_info)} */}
                 <h3 className="task_header">Update Details</h3>
                 <div className="container">
                    <div className="row">
                        <div className="col-sm-6 sm-offset-3">
                            <form>
                                <input 
                                type="text" 
                                name="txt_task_name" 
                                id="txt_task_name" 
                                className="txt_input"
                                defaultValue={(update_info.task_name)}
                                ref="txt_task_name"/>

                                <input 
                                type="text" 
                                name="txt_task_details" 
                                id="txt_task_details" 
                                ref="txt_task_details" 
                                defaultValue={(update_info.task_details)}
                                className="txt_input"/>    


                                <input 
                                type="text" 
                                name="txt_task_status" 
                                id="txt_task_status" 
                                ref="txt_task_status" 
                                defaultValue={(update_info.task_status)}
                                className="txt_input"/>


                                <input 
                                type="date" 
                                name="txt_created_date" 
                                id="txt_created_date" 
                                ref="txt_created_date"
                                defaultValue ={(update_info.created_date)}
                                className="txt_input"/>

                                <button 
                                onClick={this.onUpdate.bind(this)}
                                className="btn btn-outline-secondary  btn_task_save">
                                Update
                                </button>

                            </form>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}
