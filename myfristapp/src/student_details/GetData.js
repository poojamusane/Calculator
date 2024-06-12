import axios from "axios";
import React from "react";

export default class GetData extends React.Component{

    constructor(){
        super();
        this.state={
            student_list:[],
            status:"Loading"
        }
    }

componentDidMount(){

    axios.get(`http://localhost:8111/`).then((posRes)=>{
        this.setState({
            student_list:posRes.data,
            status:''
        })
    },(errRes)=>{
        console.log(errRes);
    })
}

    render(){
        return(
            <div className="container mt-10" style={{marginTop:`100px`,marginLeft:`100px`,width:500}}>
 <h1 className="text-warning w-10">Student List</h1>
 <table className="table table-info table-hover table-striped table-borderd w-50
 mx-auto margin-top 500px ">
 <thead>
 <tr >
 <th>id </th>
 <th>name </th>
 <th>city </th>
 </tr>
 </thead>
 <tbody>
 {this.state.student_list.map((e, i)=>(
 <tr>
 <td>{e.id} </td>
 <td>{e.name} </td>
 <td>{e.city} </td>
 </tr>
 ))}
 </tbody>
 </table>
 <h1 className="text-info">{this.state.status} </h1>
 </div>
        )
    }
}