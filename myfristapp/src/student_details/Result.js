import React from "react";

import{NavLink,BrowserRouter as Router,Routes,Route} from "react-router-dom";
import GetData from "./GetData";
import Student from "./Student";
import Update from "./Update";
import Delete from "./Delete";

 export default class Result extends React.Component{

    render(){
return(
        <div>
            <h1>Student Record</h1>
            <Router>
                <div>
                <NavLink to='/get'>Get </NavLink>
                </div>
                <div>
                <NavLink to='/insert'>Insert</NavLink>
                </div>
                <div>
                <NavLink to='/update'>Update</NavLink>
            
                </div>
                <div>
                <NavLink to='/delete'>Delete</NavLink>
                </div>
                
              <Routes>
               <Route path="/get" element={<GetData/>}></Route>
                <Route path="/insert" element={<Student/>}></Route>
                <Route path="/update" element={<Update/>}></Route>
                <Route path="/delete" element={<Delete/>}></Route>

              </Routes>
              

            </Router>
        </div>
)
    }
}

