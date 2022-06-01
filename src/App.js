import React, { Component } from 'react'
import {Route, Switch, Link} from "react-router-dom";
import SearchBar from "./components/Searchbar";
import OrderList from './components/Orderlist';
import './App.css';
import Myuserinput from './Myuserinput';
import CurrentOrder from './components/CurrentOrder';
// import CurrentOrderEdit from './components/CurrentOrderEdit';
import MainRouting from './MainRouting';


class App extends Component {


  render() {

    return (
      <div className="App">

          {/* <h2 className="confirmTitle">Confirm Order</h2> */}


      <Switch>

      <Route 
          exact 
          path='/confirmOrder/:editOrderInfo' 
          render={routeProps=><MainRouting {...routeProps}/>} 
          // render={routeProps=><CurrentOrder state={routeProps.match.params.state.produceOrder} />}
        />

    <Route 
          exact 
          path='/confirmOrder' 
          render={routeProps=><CurrentOrder {...routeProps}/>} 
          // render={routeProps=><CurrentOrder state={routeProps.match.params.state.produceOrder} />}
        />

    {/* <Route 
          exact 
          path='/confirmOrderEdit' 
          render={routeProps=><CurrentOrderEdit {...routeProps}/>} 
          // render={routeProps=><CurrentOrder state={routeProps.match.params.state.produceOrder} />}
        /> */}

    <Route exact path='/' component={MainRouting} />
    </Switch>

      </div>
    )
  }
}

export default App;
