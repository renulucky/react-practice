import './App.css';
import React from 'react'
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import User from './User'
function App() {
    let users = [
    { id: 1, name: 'anil', email: 'anil@test.com' },
    { id: 2, name: 'sam', email: 'sam@test.com' },
    { id: 3, name: 'peter', email: 'peter@test.com' },
    { id: 4, name: 'burce', email: 'bruce@test.com' },
    { id: 5, name: 'tony', email: 'tony@test.com' },
    ]
    return (
        <div className="App">
            
            <h1>React Dynamic Routing</h1>
            {
                users.map((item)=>
                <div> <Link to={"/user/"+item.id} ><h3>{item.name}</h3></Link></div>)
            }
          <Routes>  <Route path="/user/:id" element={<User/>}/></Routes>
        </div>
    );
}


export default App;