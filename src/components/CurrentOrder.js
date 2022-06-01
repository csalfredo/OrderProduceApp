import React, { Component } from 'react'
import {Route, Switch, Link, Router, withRouter} from "react-router-dom";
import CurrentOrderEdit from './CurrentOrderEdit';


class CurrentOrder extends Component {
    constructor(props){
        super(props);

        this.state ={
   
        }

        this.state.produceOrder = {...this.props.location.state}

    }//end of constructor

    handleCheckBox2=()=>{

        console.log("Inside function handleCheckBox2...");

        console.log(this.state);

        let temp = this.state.produceOrder;

        const produce_Item = temp.produceOrder.filter(item=>item.checkBox !== true);

        this.setState({produceOrder:{produceOrder: produce_Item}});

        console.log("alfredo is testing...");
      
      console.log(produce_Item);


      }

    findCheckItem=()=>{
      
      let produceCheckBox;
      let index = 0;
      let size = this.state.produceOrder.produceOrder.length;
      let produceItems = this.state.produceOrder.produceOrder;
      let foundItem;
      console.log(produceItems);

      console.log(`size is ${size}`);

      while (index < size) {
          
        produceCheckBox = produceItems[index].checkBox;

        console.log(produceCheckBox);

        if (produceCheckBox===true) {

            foundItem = produceItems[index].produce;
        }

        index++;
      }//end of while loop

      return foundItem;
    }

    backMain=()=>{

        console.log("Inside backMain function");
      
        console.log(this.state.produceOrder);

        // this.props = {...this.state.produceOrder}

        this.props.location.state.produceOrder = {...this.state.produceOrder}

        this.props.history.goBack();
      


        console.log(this.props)
      }

      getDate(){
        let value;
    
        let currentDate = new Date();
        let month = currentDate.getMonth();
        let day = currentDate.getDate();
    
        let m = parseInt(month) + 1;
        let mnth = m.toString();
    
        value = mnth + "-" + day + "-" + currentDate.getFullYear();
    
        return value;
    
      }

    render() {

        return (

    <div className="App3">
      <div className="confirmTitle">
        <h2>Confirm Order</h2>
      </div>
      <div className="currentDate2">
              {this.getDate()}
      </div>
        <div className="confirmOrder">

            {/* {console.log("Alfredo is testing props...")}
              {console.log(this.props)} */}

              <CurrentOrderEdit 
                  state={this.state.produceOrder}
                  editDelete={this.handleCheckBox2}
                  backToMain={this.backMain}
              />
        </div>
            

        </div>
        )
    }
}

export default withRouter(CurrentOrder);
