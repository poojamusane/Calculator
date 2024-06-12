import axios from "axios";
import React from "react";

export default class Delete extends React.Component{

    constructor(){
        super()
        this.state={
            id:'',
        }

    }

deleteData = (e) => {

    

    let obj={
     id:e.target.id.value
    }
    

    axios.delete(`http://localhost:8111/${obj.id}`)
    .then((posRes)=>{

        console.log(posRes);

    },
    (errRes)=>{

        console.log(errRes);

    })
}

    render(){
        return(
            <div className="container " style={{width:500}}>
                <form onSubmit={this.deleteData}> 
                <h1 style={{color:"white"}}>Delete student data</h1>
               <label style={{color:"white"}}> Student:<input type="number" name="id" style={{backgroundColor:"gray"}}/></label>
                <br/>
                <button>submit </button>
                </form>
            </div>
        )
    }
}