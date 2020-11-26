import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Timeline from "../projects/Timeline/Timeline";
export default function Homepage({project}) {
  
   return(
     <>
     <Router>     
       <div>
       <button>
        <Link to="/timeline">{project}</Link>
       </button>
     </div>

     <Switch>
       <Route path="/">
         <Homepage/>
       </Route>
       <Route path='/timeline'>
         <Timeline/>
       </Route>
     </Switch>
     </Router>

     </>
   )
    
    }
