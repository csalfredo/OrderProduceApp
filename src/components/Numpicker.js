import React, { Component } from 'react'
import '../App.css'

class Numpicker extends Component {

    constructor(props){
        super(props);
        
    

        this.state = {
            value: 1,
            counter: 1,
            quantity: 0,
        };

        this.handleChange();
        // console.log(this.props.numPickerState);


        this.state.produceOrder = {...this.props.numPickerState}


        // this.displayQuantity();
    }

handleChange(){

    // console.log("inside function handleChange..." + this.props.desProduceItem);

    let tempCounter;
    let tempValue;
    let location = 0;

    console.log(this.props.name);

    if (this.props.numPickerState.location === "/confirmOrder/editOrderInfo") {
    
        // console.log(this.state);

                // console.log(this.props.numPickerState.location);


    
            //    console.log("counter is " + this.state.counter + ", and value is " + this.state.value);
    
                tempCounter = this.state.counter;
                tempValue = this.state.value;

                //1ST: FIND THE THE LOCATION
                location = this.getLocation(this.props.name);

                // console.log("found location, and it's value is " + location);

                //2ND: GET THE QUANTITY
                this.state.counter = this.props.numPickerState.produceOrder[location].quantity;
                this.state.value = this.props.numPickerState.produceOrder[location].quantity;              
                //3RD: RETURN QUANTITY
    }


}


getLocation=(produce)=>{

    let index = 0;
    let location;

    let currentProduceOrder = this.props.numPickerState.produceOrder;

    currentProduceOrder.forEach(item=>{
        if(produce === item.produce){

            location = index;
            
        }

        index++;

    })//end of while loop

    return location;
}

changeQuantityMinus(e){
    console.log("inside function changeQuantityMinus " + this.state.value);



        let currentProduce;
    let produce_Item;
    let index = 0;
    let locationFound;
    let MainRoute = false;



    let cnt = this.state.counter;


    if (this.state.produceOrder.location === '/confirmOrder/editOrderInfo') {

        MainRoute = true;
    }


    currentProduce = this.state.produceOrder.keyword;


    let produceArray = this.state.produceOrder.produceOrder;


    if (currentProduce.length === 0) {
        

        currentProduce = this.props.name;

    }
    else{
        
        console.log("this string is not empty");

    }

    //TODO: find the the item location
   produceArray.forEach(produceItem => {
        if (currentProduce === produceItem.produce) {


            locationFound = index;

        }

        index++;
    });

 console.log("outside loop, and index is " + locationFound);

//TODO: getting the quantity for this specific produce item
  let cnt2 = this.state.produceOrder.produceOrder[locationFound].quantity;

    console.log("cnt2 is " + cnt2);

  produceArray.forEach(produceItem =>{
      if (currentProduce === produceItem.produce) {

          cnt2--;

        console.log("After decrement, the counter is now " + cnt2);

          if(cnt2 <= 1){
              console.log("You only have one quantity, please delete if you do not want this produce item");
              cnt2 = 1;
          }
          else{
            
            produceItem.quantity = cnt2;

            produce_Item = produceItem;
          }
      }
  })

    console.log("cnt2 is " + cnt);

     console.log(produce_Item);

    this.setState({produce_Item});

    console.log(this.state);

    this.setState({counter: cnt2});
    this.setState({value: cnt2});

    return this.state;

}


changeQuantityPlus(e){

    let currentProduce;
    let produce_Item;
    let index = 0;
    let locationFound;
    let MainRoute = false;

    console.log("inside function changeQuantityPlus " + this.state.value);

    // console.log(this.props.name);

    // console.log(this.state);

    let cnt = this.state.counter;

    // console.log("cnt is " + cnt);

    // console.log(this.state.produceOrder.location);

    if (this.state.produceOrder.location === '/confirmOrder/editOrderInfo') {

        // console.log("Saving state...");

        // this.setState({counter: cnt});

        MainRoute = true;
    }

    // console.log(this.state.produceOrder.keyword);

    currentProduce = this.state.produceOrder.keyword;

    // console.log(this.state.produceOrder);

    let produceArray = this.state.produceOrder.produceOrder;

    // console.log(produceArray); 

    if (currentProduce.length === 0) {
        
        // console.log("this means ths string is empty");

        currentProduce = this.props.name;

        // console.log(currentProduce);
    }
    else{
        
        console.log("this string is not empty");

    }

    //TODO: find the the item location
   produceArray.forEach(produceItem => {
        if (currentProduce === produceItem.produce) {
            
            // console.log(produceItem.produce);

            // console.log("found item==>" + produceItem.quantity + " index=" + index);

            locationFound = index;

        }

        index++;
    });

 console.log("outside loop, and index is " + locationFound);

//TODO: getting the quantity for this specific produce item
  let cnt2 = this.state.produceOrder.produceOrder[locationFound].quantity;

  produceArray.forEach(produceItem =>{
      if (currentProduce === produceItem.produce) {

        // cnt2 = produceItem.quantity;

        // console.log(currentProduce);

        //   console.log("cnt2 is " + cnt2);

          cnt2++;

          produceItem.quantity = cnt2;

          produce_Item = produceItem;
      }
  })

    // console.log(produce_Item);

    this.setState({produce_Item});

    // console.log(this.state);

    this.setState({counter: cnt2});
    this.setState({value: cnt2});

    return this.state;
}

displayQuantity=(e)=>{

    let numberQ;
    let arrayOrders;

    console.log("inside function displayQuantity");

    // console.log(this.state.produceOrder.produceOrder.length);

    // console.log(this.state);

    arrayOrders = {...this.state};

    console.log(this.props.name);

    arrayOrders.produceOrder.produceOrder.forEach(produceItem=>{

        if (this.props.name === produceItem.produce) {

            // console.log("FOUND A MATCH");

            numberQ = produceItem.quantity;

            console.log(numberQ);

            this.state.counter = numberQ;
            this.state.value = numberQ;

        }



    })

}

    render() {
        return (
            <div className="numberPicker">
                <div className="minusBtn">
                    <button onClick={(e)=>this.changeQuantityMinus(e)}>-</button>
                    {/* <button onClick={()=>this.props.onNumberPickerPlus()}>+</button> */}
                </div>

                <input className="textBoxPicker" type = "button" value = {this.state.value}/>
               
                <div className="plusBtn">
                    <button 
                        onClick={(e)=>this.changeQuantityPlus(e)} value= {this.displayQuantity()}>+</button>
                </div>

            {this.props.numPickerState.location === "/confirmOrder/editOrderInfo" ? this.displayQuantity() : console.log(this.props.numPickerState.location)}
            </div>
        )
    }
}

export default Numpicker;
