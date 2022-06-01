import React, { Component } from 'react';
import SearchBar from "../components/Searchbar";
import NumberPicker from "../components/Numpicker";
import {withRouter} from "react-router-dom";
import '../App.css'



class Orderlist extends Component{

  // constructor() {
  //   super();
  // }


changePickerPlus=()=>{


  console.log("inside function changePicker");

  console.log(this.props);

  this.props.numPickerPlus();

}

display(value){

// console.log(this.props.produce.produceOrder);

return(
  <div className="orderItemSection">



         <div className="produceName">
            { value.produce }
         </div>

              <div className="deleteBtn">
                  <button onClick={()=>this.props.onDelete(value.produce)}>X</button>
              </div>
       
            <div className="orderInfo">
                {/* <p className="vendorName">{value.vendor}</p> */}
                <p className="codeName">{value.code}</p>

            </div>


          {/* <p className="codeName">{value.code}<p>{value.vendor}</p></p> */}
          {/* <p className="vendorName">{value.vendor}</p> */}
          <NumberPicker 
            onNumberPickerPlus = {this.props.numPickerPlus}
            numPickerState = {this.props.produce}
            desProduceItem = {this.props.desProd}
            name = {value.produce}
          />
  </div>
)
}

  render(){

    return (
    <div className="order_Section">
    
    {console.log("Alfredo is inside file Orderlist")}
    
{console.log(this.props)}

      <ul>
        {/* {console.log(this.props.produce.produceOrder)} */}
        
        {this.props.produce.produceOrder.map((value,index)=><li key={index}>
        {index > 0 ? this.display(value) : ""}

        </li>)}
    
      </ul>
   
    </div>
    );
  }

}

export default withRouter(Orderlist);
