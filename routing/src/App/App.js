import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Landing from '../Landing/Landing';
import Dashboard from '../Dashboard/Dashboard';


export default class App extends  React.Component {
  render() {
      const LANDING_ROUTE = '/';
    return(
        <main>
         <BrowserRouter>
             <nav>
                 <ul>
                     <li><Link to={LANDING_ROUTE}>Landing</Link></li>
                     <li><Link to="/dashboard">Dashboard</Link></li>
                 </ul>
             </nav>
             <Route exact path={LANDING_ROUTE} component={Landing}/>
             <Route exact path="/dashboard" component={Dashboard}/>
         </BrowserRouter>
        </main>
    )
  }
}
