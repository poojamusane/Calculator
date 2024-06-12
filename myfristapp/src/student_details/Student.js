import React from "react";
import Axios from "axios"
import axios from "axios";


export default class Student extends React.Component{

constructor()
{
    super()
    this.state = {

        name:" ",
        city:" "
    }
}

register = (e) => {

    let obj = {
        name:e.target.name.value,
        city:e.target.city.value

    }

    axios.post(`http://localhost:8111/`, obj)
    .then((posRes) =>
         {
    console.log(posRes)
   
   }, 
   (errRes) => 
    {
    console.log(errRes)
    }
    )

    }




    render(){

        return(
            <div className="container container-bordered secondary" style={{marginTop:100,width:500}}>
                <form onSubmit={this.register}>
                 <h1 style={{color:"blueviolet"}}>Registration form</h1>
                <label style={{color:"white"}}> Name:<input type="text" name="name" style={{backgroundColor:"gray"}}/></label>
                 <br/>
                 <br/>
                 <label style={{color:"white"}}> City :<input type="text" name="city" style={{backgroundColor:"gray"}}/></label>
                 <br/>
                 <button>submit</button>
                </form>
            </div>
        )
    }
}