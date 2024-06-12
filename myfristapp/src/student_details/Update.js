import axios from "axios";
import React from "react";


export default class Update extends React.Component{

    constructor(){

        super();
        this.state={

            id:" ",
            name:" ",
            city:" "
        }
    }


    updateData = (e) => {

        let obj={
            id: e.target.id.value,
            name: e.target.name.value,
            city: e.target.city.value
        }

        axios.put(`http://localhost:8111`,obj).then( (posRes)=>{
            console.log(posRes);
        },(errRes)=>{

            console.log(errRes);
        })
    }

    render(){

        return(
            <div className="container container-bordered container-primary" style={{width:500,marginTop:100}}>
<h1 style={{color:"white"}}>Update Student Data</h1>
                <form onSubmit= {this.updateData}>
                <label style={{color:"white"}}>Id:<input type="number" name="id" style={{backgroundColor:"gray"}} ></input></label>
                   <br/>

                   <label style={{color:"white"}}> Name:<input type="text" name="name" style={{backgroundColor:"gray"}}></input></label>
                   <br/>

                   <label style={{color:"white"}}> City:<input type="text" name="city" style={{backgroundColor:"gray"}}></input></label>
                   <br/>
                   <button>Submit</button>
                </form>
            </div>
        )
    }
}