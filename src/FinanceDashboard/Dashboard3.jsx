import React from 'react';
import '../Dashboard/dashboard.css'
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";


const Dashboard3 = () => {
    return (
        <>
        <Router>
           <Topbar />
           <div className="container">
               
           <Sidebar />
           <Switch>
               <Route exact path ='/finance/'>
                    <Home />
               </Route>
           </Switch>
           </div>

        </Router>  
        </>
    )
}

export default Dashboard3;
