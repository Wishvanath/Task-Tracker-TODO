var client = require('../connection');





// first method
// exports.allTask = function(req, res){
//     client.query('SELECT * from task_info', (err, result) => {
//         if (err) {
//           console.log(err.stack)
//         } else {
//           res.json(result.rows)
//         }
//       })
// }


// second method
exports.allTask = function(req, res){
    var task_info = [];
    // write query
    const all_task_query = {
        text : "select * from task_info  order by task_id asc"
    }
    // run query
    client.query(all_task_query, function(err,result){
        if(err){
            res.send({
                success: false,
                message: "Cannot fetch the data from database"
            })
        }
        else{
            // task_info = result.rows[0].task_status;
            // console.log(task_info);
            // result.rows[0].task_status='finish';
            // console.log(result.rows);
            
            // res.send({
            //     success: true,
            //     message: "Fetch data successfully",
            //     data
            // })

            res.json(result.rows)
        }
    })
}








// new task 
exports.newTask = function(req, res){
    // fetch form data 
    const {body} = req;
    const {
        task_name,
        task_details,
        task_status,
        created_date
    } = body;

    console.log(task_name);

    // console.log(form_data);

    if(!task_name){
        return res.send({
            success: false,
            message:"Task Name is Empty"
        })
    }
    else if(!task_details)
    {
        return res.send({
            success:false,
            message:"Task details is empty"
        })
    }
    else if(!task_status)
    {
        return res.send({
            success:false,
            message:"Task Status is empty"
        })
    }
    else if(!created_date)
    {
        return res.send({
            success:false,
            message:"Created Date is empty"
        })
    }
    else{
        const new_task_query ={
            text:`INSERT INTO public.task_info(task_name, task_details, task_status, created_date)	VALUES ('${task_name}','${task_details}','${task_status}' ,'${created_date}')`
        }
        client.query(new_task_query,function(err, result){
            if(err){
                return res.send({
                    success: false,
                    message:"Cannot created new task"
                })
            }
            else{
                return res.send({
                    success: true,
                    message:"Successfully Created"
                })
            }
        })
    }

}










// delete individual task
exports.taskDelete = function(req, res){
   var task_id = req.params.task_id;
   
   const delete_task_query = {
       text:`delete from task_info where task_id = '${task_id}'`
   }

   client.query(delete_task_query, function(err, result){
       if(err){
           return res.send({
               success:false,
               message:"Database Error"
           })
       }
       else{
           return res.send({
               success: true,
               message:"Successfully Deleted"
           })
       }
   })


}



// update task route
exports.taskUpdate = function(req, res){
    var task_id = req.params.task_id;
    console.log(task_id);
    // res.send(task_id);
    var update_data = [];
    const update_id_data = {
        text:`select * from task_info where task_id = '${task_id}'`
    }
    client.query(update_id_data, function(err, result){
        if(err){
            return res.send({
                success: false,
                message:"Cannot fetch the data"
            })
        }
        else{
            // update_data = result.rows;
            // return res.send({
            //     success: true,
            //     message:"Updated Data fetched",
            //     update_data
            // })
            return res.json(result.rows);
        }
    })
}


// save updated task
exports.saveTask = function(req,res){
    const {body} = req;
    const data = {
        task_name,
        task_details,
        task_status,
        created_date,
        task_id
    } = body;

    console.log(data);


    const update_task_query =  `UPDATE public.task_info SET task_name='${data.task_name}', task_details='${data.task_details}', task_status='${data.task_status}', created_date='${data.created_date}' WHERE task_id = ${data.task_id}`
        
    client.query(update_task_query, function(err, result){
        if(err){
            return res.send({
                success:false,
                message:"Cannot update the data"
            })
        }
        else{
            return res.send({
                success:true,
                message:"Updated Successfully"
            })
        }
    })

 

}

