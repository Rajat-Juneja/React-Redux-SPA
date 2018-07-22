import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FirstComp } from './Childs/Routes/first';
import Second from './Childs/Routes/second';
import {Third} from './Childs/Routes/third';
import {NavLink,Route} from 'react-router-dom';


class App extends Component {
  render(){
    return(
      <div className="container">
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Disabled</a>
              </li>
            </ul>
          </div>
        </nav> */}

        <ul>
          <li>
            <NavLink activeClassName="active" to="/" >Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/first">First</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/second">Second</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/third">Third</NavLink>
          </li>
        </ul>

         {/* <Switch> */}
          <Route path="/" exact component={App}></Route>
          <Route path="/first" exact component={FirstComp}></Route>
          <Route path="/second" exact component={Second}></Route>
          <Route path="/third" exact component={Third}></Route>


           <Route render={()=><h1>NO PAGE EXIST </h1>}/>
        {/* </Switch> */}


      {/* <FirstComp/>  */}
      {/* <Second/> */}
      </div>
    )
  }
}

export default App;
