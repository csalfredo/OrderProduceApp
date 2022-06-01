import React, { Component } from 'react';
import {Route, Switch, Link, Router, withRouter} from "react-router-dom";
import SearchBar from "./components/Searchbar";
// import OrderList from './components/Ordersection';
import OrderList from './components/Orderlist';
import './App.css';
import Myuserinput from './Myuserinput';
import currentOrder from './components/CurrentOrder';
import { Button } from 'semantic-ui-react';
import CurrentOrder from './components/CurrentOrder';


class MainRouting extends Component{

  // constructor(props){
  //   super(props)

  //   this.handleCheckBox2 = this.handleCheckBox2.bind(this)
  // }

constructor(){
  super()
  this.state = {
    data: [
      { id: 1, produceItem: "Asparagus", produceCode: 136, vendor: "FreshKo" },
      { id: 2, produceItem: "Artichokes", produceCode: 132, vendor: "FreshKo" },
      { id: 3, produceItem: "Green Beans", produceCode: 150, vendor: "FreshKo" },
      { id: 4, produceItem: "Beets", produceCode: 156, vendor: "FreshKo" },
      { id: 5, produceItem: "Broccoli Crown", produceCode: 174, vendor: "FreshKo" },
      { id: 6, produceItem: "Cactus Leaves", produceCode: 318, vendor: "FreshKo" },
      { id: 7, produceItem: "Cactus Diced", produceCode: 319, vendor: "FreshKo" },
      { id: 8, produceItem: "Cabbage", produceCode: 174, vendor: "FreshKo" },
      { id: 9, produceItem: "Avocadoes 60cnt", produceCode: 141, vendor: "FreshKo" },
      { id: 10, produceItem: "Avocadoes 70cnt", produceCode: 140, vendor: "FreshKo" },
      { id: 11, produceItem: "Avocadoes 36cnt", produceCode: 139, vendor: "FreshKo" },
      { id: 12, produceItem: "Pinto Beans", produceCode: 152, vendor: "FreshKo" },
      { id: 13, produceItem: "Peruano Beans", produceCode: 151, vendor: "FreshKo" },
      { id: 14, produceItem: "Bananas", produceCode: 142, vendor: "FreshKo" },
      { id: 15, produceItem: "Green Bell Pepper", produceCode: 382, vendor: "FreshKo" },
      { id: 16, produceItem: "Red Bell Pepper", produceCode: 384, vendor: "FreshKo" },
      { id: 17, produceItem: "Cantaloupe", produceCode: 284, vendor: "FreshKo" },
      { id: 18, produceItem: "Cauliflower", produceCode: 190, vendor: "FreshKo" },
      { id: 19, produceItem: "Celery", produceCode: 194, vendor: "FreshKo" },
      { id: 20, produceItem: "Cucumber", produceCode: 216, vendor: "FreshKo" },
      { id: 21, produceItem: "Cilantro", produceCode: 192, vendor: "FreshKo" },
      { id: 22, produceItem: "Carrots Loose", produceCode: 184, vendor: "FreshKo" },
      { id: 23, produceItem: "Chayote", produceCode: 458, vendor: "FreshKo" },
      { id: 24, produceItem: "Cherries", produceCode: 204, vendor: "FreshKo" },
      { id: 25, produceItem: "Coconuts", produceCode: 300, vendor: "FreshKo" },
      { id: 26, produceItem: "Garlic", produceCode: 230, vendor: "FreshKo" },
      { id: 27, produceItem: "Apple Fuji", produceCode: 108, vendor: "FreshKo" },
      { id: 28, produceItem: "Apple Gala", produceCode: 110, vendor: "FreshKo" },
      { id: 29, produceItem: "Apple Gold", produceCode: 112, vendor: "FreshKo" },
      { id: 30, produceItem: "Apple Granny Smith", produceCode: 114, vendor: "FreshKo" },
      { id: 31, produceItem: "Mini Bananas", produceCode: 144, vendor: "FreshKo" },
      { id: 32, produceItem: "Plantain Banana", produceCode: 146, vendor: "FreshKo" },
      { id: 33, produceItem: "Strawberries", produceCode: 166, vendor: "FreshKo" },
      { id: 34, produceItem: "Cabbage Red", produceCode: 178, vendor: "FreshKo" },
      { id: 35, produceItem: "Corn Yellow", produceCode: 212, vendor: "FreshKo" },
      { id: 36, produceItem: "Corn White", produceCode: 214, vendor: "FreshKo" },
      { id: 37, produceItem: "Egg Plant", produceCode: 224, vendor: "FreshKo" },
      { id: 38, produceItem: "Garlic", produceCode: 230, vendor: "FreshKo" },
      { id: 39, produceItem: "Ginger", produceCode: 232, vendor: "FreshKo" },
      { id: 40, produceItem: "Grape Fruit", produceCode: 238, vendor: "FreshKo" },
      { id: 41, produceItem: "Red Grapes", produceCode: 250, vendor: "FreshKo" },
      { id: 42, produceItem: "Green Grapes", produceCode: 248, vendor: "FreshKo" },
      { id: 43, produceItem: "Jicama", produceCode: 258, vendor: "FreshKo" },
      { id: 44, produceItem: "Kiwi", produceCode: 262, vendor: "FreshKo" },
      { id: 45, produceItem: "Lemon", produceCode: 266, vendor: "FreshKo" },
      { id: 46, produceItem: "Lettuce", produceCode: 268, vendor: "FreshKo" },
      { id: 47, produceItem: "Red Lettuce", produceCode: 274, vendor: "FreshKo" },
      { id: 48, produceItem: "Leaf Lettuce", produceCode: 272, vendor: "FreshKo" },
      { id: 49, produceItem: "Romaine Lettuce", produceCode: 276, vendor: "FreshKo" },
      { id: 50, produceItem: "Lime", produceCode: 278, vendor: "FreshKo" },
      { id: 51, produceItem: "Mango", produceCode: 280, vendor: "FreshKo" },
      { id: 52, produceItem: "Honeydew Melon", produceCode: 300, vendor: "FreshKo" },
      { id: 53, produceItem: "Seedless Watermelon", produceCode: 304, vendor: "FreshKo" },
      { id: 54, produceItem: "Watermelon Seeded", produceCode: 306, vendor: "FreshKo" },
      { id: 55, produceItem: "Mushrooms Loose", produceCode: 230, vendor: "FreshKo" },
      { id: 56, produceItem: "Nectarines", produceCode: 320, vendor: "FreshKo" },
      { id: 57, produceItem: "Green Onions", produceCode: 342, vendor: "FreshKo" },
      { id: 58, produceItem: "Mexican Green Onions", produceCode: 341, vendor: "FreshKo" },
      { id: 59, produceItem: "Red Onion", produceCode: 344, vendor: "FreshKo" },
      { id: 60, produceItem: "Yellow Onion", produceCode: 346, vendor: "FreshKo" },
      { id: 61, produceItem: "White Onion", produceCode: 348, vendor: "FreshKo" },
      { id: 62, produceItem: "Oranges", produceCode: 350, vendor: "FreshKo" },
      { id: 63, produceItem: "Parsley", produceCode: 354, vendor: "FreshKo" },
      { id: 64, produceItem: "Papaya", produceCode: 356, vendor: "FreshKo" },
      { id: 65, produceItem: "Peaches", produceCode: 360, vendor: "FreshKo" },
      { id: 66, produceItem: "Bartlett Pear", produceCode: 264, vendor: "FreshKo" },
      { id: 67, produceItem: "Bosco Pear", produceCode: 366, vendor: "FreshKo" },
      { id: 68, produceItem: "Dijion Pear", produceCode: 370, vendor: "FreshKo" },
      { id: 69, produceItem: "Manzano Pepper", produceCode: 230, vendor: "FreshKo" },
      { id: 70, produceItem: "Jalapeno Pepper", produceCode: 388, vendor: "FreshKo" },
      { id: 71, produceItem: "Green Long Pepper", produceCode: 390, vendor: "FreshKo" },
      { id: 72, produceItem: "Yellow Pepper", produceCode: 400, vendor: "FreshKo" },
      { id: 73, produceItem: "Serrano Pepper", produceCode: 402, vendor: "FreshKo" },
      { id: 74, produceItem: "Pasilla Pepper", produceCode: 404, vendor: "FreshKo" },
      { id: 75, produceItem: "Persimmons", produceCode: 411, vendor: "FreshKo" },
      { id: 76, produceItem: "Pineapple", produceCode: 406, vendor: "FreshKo" },
      { id: 77, produceItem: "Plums", produceCode: 410, vendor: "FreshKo" },
      { id: 78, produceItem: "Pomegranates", produceCode: 412, vendor: "FreshKo" },
      { id: 79, produceItem: "Red Potatoes Loose", produceCode: 416, vendor: "FreshKo" },
      { id: 80, produceItem: "Russet Potatoes Loose", produceCode: 424, vendor: "FreshKo" },
      { id: 81, produceItem: "Russet Potatoes 5lb Bag", produceCode: 426, vendor: "FreshKo" },
      { id: 82, produceItem: "Russet Potatoes 10lb Bag", produceCode: 428, vendor: "FreshKo" },
      { id: 83, produceItem: "Russet Potatoes 15lb Bag", produceCode: 430, vendor: "FreshKo" },
      { id: 84, produceItem: "Radishes", produceCode: 438, vendor: "FreshKo" },
      { id: 85, produceItem: "Spinach", produceCode: 450, vendor: "FreshKo" },
      { id: 86, produceItem: "Italian Squash", produceCode: 460, vendor: "FreshKo" },
      { id: 87, produceItem: "Mexican Squash", produceCode: 461, vendor: "FreshKo" },
      { id: 88, produceItem: "Yellow Squash", produceCode: 464, vendor: "FreshKo" },
      { id: 89, produceItem: "Tangerine", produceCode: 468, vendor: "FreshKo" },
      { id: 90, produceItem: "Tomato", produceCode: 478, vendor: "FreshKo" },
      { id: 91, produceItem: "Roma", produceCode: 482, vendor: "FreshKo" },
      { id: 92, produceItem: "Yams", produceCode: 488, vendor: "FreshKo" },

    ],
    keyword: "",
    results: [],
 
      produceOrder: [
        {id: "",produce:"",code:"",vendor:"",checkBox:"", quantity:""}
      ],

    codeOrder: [],
    vendors: [],
    produceItemNum: 0,
    newPage: 'currentOrder',
    setting: false,
    foundItem: false,
    editproduceOrder:[],
    Displayed: false,
    count: 0,
    location: "",
    currentItemProduce: 1,
    DisplayOrderSection: false,
    path: "",
    itemExist: false,

  };

  


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


  matchName = (produceItem, keyword) => {
    var keyLen = keyword.length;
    produceItem = produceItem.toLowerCase().substring(0, keyLen);
    //returns true only if we have a match and keyword isn't empty
    return produceItem === keyword && keyLen !== 0;
  };

  onSearch = text => {
    let { data } = this.state;
    //check to see if we found a match, if so, add it to results
    var results = data.filter(item => true === this.matchName(item.produceItem, text));
    //update state changes
    this.setState({ results });
    
  };

  updateField = (field, value, update = true) => {
    console.log("TRYING TO FIND THE INPUT.........");

    this.setState({itemExist: false});
    
    if (update) this.onSearch(value);
    this.setState({ [field]: value });
  };

  myfindProduceItem = (e)=>{
    e.preventDefault();

    let index = 0;
    let TempValue;
    let found = false;
    let list;
    let newItem = "orange";
    let produce = this.state.keyword;
    let locationFound;
    let tempCode;
    let tempVendor;
    let tempId;
    let newProduceArray;
    let newArrayCounter = 0;
    let tempOrder = this.state;
    let itemExist = false;

  
   console.log("produce is " + produce);
   
   console.log(this.state.produceOrder);
   
   itemExist = this.checkProduceItemExist(produce);

   if (itemExist) {
     
      console.log("Item Exist");

      this.setState({itemExist: true});
   }
   else{
    while (index < this.state.data.length) {
      
      if (produce.length !== 0) {
     

        if (produce === this.state.data[index].produceItem) {

          found =  true;
          
          locationFound = index;
  
          index = this.state.data.length;

          this.setState({foundItem: true});
        }
      }
      else{
        console.log("the length is equal zero");
      }
      
      index++;
    }//end of while loop
    

    
    if (found === true) {
      tempCode = this.state.data[locationFound].produceCode;
      tempVendor = this.state.data[locationFound].vendor;
      tempId =  this.state.data[locationFound].id;

      // console.log("tempCode is " + tempCode + ", and temVendor is " + tempVendor);
      
      // this.setState({order: {produceOrder: [{produce: produce}]}});

      let temp = this.state;
      temp.produceOrder.push({id: tempId, produce:produce, code:tempCode, vendor: tempVendor, checkBox: false, quantity: 1});
      this.setState({order:temp});

      // temp.produceOrder.push({code:tempCode});
      // this.setState({order:temp})

      // console.log("value is " + this.state.produceOrder.length);
      // console.log("value is " + this.state.order.produceOrder[0].code);
      // console.log("value is " + this.state.order.produceOrder[0].vendor);


    }//end of if statement where it's checking if the item exist

    console.log(this.state.produceOrder);
   }


  }

  checkProduceItemExist=(produce)=>{

    let index = 0;
    let tempProduceItem;
    let match = false;

    console.log(this.state.produceOrder.length);

    while (index <= this.state.produceOrder.length-1) {

          console.log("index = " + index);

     
          tempProduceItem = this.state.produceOrder[index].produce;

            console.log(tempProduceItem.length);

            console.log(produce.length);

          if(tempProduceItem.normalize() === produce.normalize()){
             match = true;

             break
          }
          else{
 
            console.log("this means index is " + index);
            
            console.log(this.state.produceOrder);
            match = false;
          }
        

      index++;
    }//end of while loop

    console.log(index + "=" + tempProduceItem + ", " + produce);

    if(this.state.produceOrder.length === 0){//WHEN PRODUCEORDER ARRAY IS EMPTY
      match = false;
    }
    return match;
  }

handleDelete=(myproduceItem)=>{

  let temp;

  // console.log("Y0U HAVE CLICKED ON HANDLE DELETE--- BUTTON, and produce item is " + myproduceItem);
  
  // console.log(this.props.location);

  // console.log(this.state.produceOrder);

  if (this.props.location.pathname !== '/') {
    
    console.log("this is not the root");

      temp = this.props.location.currentState;

      const produce_Item = temp.produceOrder.filter(item=>item.produce !== myproduceItem);

      console.log(produce_Item);
    
      // this.setState({produceOrder: [...this.state.order.produceOrder.filter(item=> item.produce !== myproduceItem)]});
    
      console.log("alfredo is testing...");
    
      console.log(produce_Item);

     
      this.setState({produceOrder: [...produce_Item]});

      // console.log(this.state.produceOrder);

       this.props.location.currentState.produceOrder = [...produce_Item];

      // console.log(this.props.location.currentState);

      // console.log(this.state.produceOrder);
  }
  else{
    temp = this.state;

    const produce_Item = temp.produceOrder.filter(item=>item.produce !== myproduceItem);

    // console.log(produce_Item);
  
    // this.setState({produceOrder: [...this.state.order.produceOrder.filter(item=> item.produce !== myproduceItem)]});
  
    // console.log("AGAIN...alfredo is testing...");
  
    this.setState({produceOrder: produce_Item});
  }

  // console.log(this.state.produceOrder);

}

handleCheckBox2=()=>{

  // console.log("Testing function handleCheckBox2");
}

displayOrderList=(order)=>{

  console.log(order);

if (this.state.produceOrder.length > 1) {
  let cnt = this.state.produceOrder.quantity;

  let produceDesLength = this.state.produceOrder.length;

  let produceDesLenght2 = order.produceOrder.length;

  let descProduce = this.state.produceOrder[produceDesLength-1].produce;

  let descProduce2 = order.produceOrder[produceDesLenght2-1].produce;

  console.log("produceDesLength2 is " + produceDesLenght2);

  console.log("this is from produceDes");
  
  console.log(descProduce);

  console.log(descProduce2);

  console.log(cnt);


  if (this.state.foundItem === true) {
      
          console.log("DISPLAYING ORDERLIST...THIS.STATE.FOUNDITEM IS ... " + this.state.foundItem);

          console.log(order);

          return(<OrderList
            produce = {this.state}
            onDelete={this.handleDelete}
            numPickerPlus={this.nPickerPlus}
            desProd = {descProduce}
          /> )
     
    }
  else{

        console.log("DISPLAYING ORDERLIST...THIS.STATE.FOUNDITEM IS====> " + this.state.foundItem + "==>");

        console.log(order);

        return(<OrderList
          produce = {order}
          onDelete={this.handleDelete}
          numPickerPlus={this.nPickerPlus}
          desProd = {descProduce2}
    
        /> )
    }

  }

}

updateStateProduceOrder=(order)=>{

  console.log("inside function updateStateProduceOrder");

  console.log(order);

  
  console.log(this.state.produceOrder);

    

}

displayedOrder=()=>{

  this.state.path = this.props.location.pathname;


  console.log("---empty----");

  console.log("AND AT THIS POINT PRODUCEORDER HAS ");

  console.log(this.props.location.currentState);

  this.state.location = this.props.location.pathname;

  this.state.produceOrder = [...this.props.location.currentState.produceOrder];

  console.log(this.state);

  this.props.location.pathname = '/';

  console.log(this.props.location.pathname);


  return (this.currentOrder_Section());

}

updateProduceOrder=()=>{

  this.state.produceOrder = [...this.props.location.currentState.produceOrder];


  return (this.displayOrderList(this.state));

}

nPickerPlus=(cnt)=>{
  console.log("INISDE NPICKER------------>")

  cnt++;

  console.log(this.state.produceOrder);

  let produceItems = [...this.state.produceOrder];

  let produceItem ={...produceItems[3]};


console.log(produceItem);

  produceItem.quantity = cnt;

  produceItems[4] = produceItem;

  // this.setState({produceItems});


  console.log(produceItem);
}

currentOrder_Section=()=>{


      this.state.DisplayOrderSection = true;

        return(  <div className = "currentOrderSection">

            <div className="order_Section">
                

                  {console.log("==>this.state.foundItem is==> " + this.state.foundItem)}

                  {console.log(this.props)}

                  {console.log(this.props.location.pathname)}

                  {this.props.location.pathname === '/' ? this.displayOrderList(this.state): this.updateStateProduceOrder(this.state)}
            

            </div>
        </div>);
}

display_CompleteOrder_Button=()=>{

  return(

    <Link className="CompleteOrderButton" to={{
      
      pathname: '/confirmOrder',
     
        state: this.state,
      

    }}>Complete Order</Link>

  );

}

  render(){

    let { results, keyword } = this.state;

    return (
  
      <div className="App2">

          <div className="currentDate">
              {this.getDate()}
          </div>


        <div className="Head">
       
            <h3>PRODUCE LIST</h3>
        </div>

          <div className="autocomplete">

            <div className="myInput">
              <SearchBar
                results={results}
                keyword={keyword}
                updateField={this.updateField}
              />

            </div>
          </div>
          
      
        <button onClick={(e)=>this.myfindProduceItem(e)} className="enterBtn">ADD ITEM</button>

        {/* <div className="messageExist">
            <h4>Item Exist</h4>
        </div> */}

        {console.log("testing itemExist ..." + this.state.itemExist)}

        {/* <div className= "messageExist">
           {this.state.itemExist === true ? <h4>Item Exist</h4>  : "hidden"}
        </div> */}

<div className="messageExist" style={{display: this.state.itemExist ?  "block" : "none"}}><h4>ITEM EXIST</h4></div>
          {this.props.location.pathname === '/' ? this.currentOrder_Section() : console.log("the root path")}

        <div>

        <Link to='/'></Link>

          {console.log(this.state.DisplayOrderSection)}

          {this.props.location.pathname === '/' ? this.display_CompleteOrder_Button() : console.log("did not call display_CompleteOrder_Button")}

 
          {console.log(this.props)}

          {console.log("---->THIS.STATE.FOUNDITEM IS <----" + this.state.foundItem)}

          {console.log(this.props)}
          
          {console.log(this.props.location.pathname)}


          {
             this.props.location.pathname === '/confirmOrder/editOrderInfo' ? this.displayedOrder() : console.log(this.props.location.pathname)
             //this.displayOrderList(this.props.location.currentState)
          }

          { 
             this.state.path === '/confirmOrder/editOrderInfo' ? this.display_CompleteOrder_Button() : console.log(this.props.location.pathname)
        
          }

          {  this.state.path = '/'}
        </div>
      </div>
    );
  }

}

export default withRouter(MainRouting);
