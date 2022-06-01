import React, { Component } from 'react'
import { withRouter, Link } from "react-router-dom";
import form from './Form.js'
import Container from './Container';

class CurrentOrderEdit extends Component {
    constructor(props){
        super(props);

        this.state ={
            orderLength: 0,
        }

        this.state.produceOrder = {...this.props.location.state}

    }//end of constructor

    handleCheckBox=(e)=>{
        // console.log(this.props.location.state.produceOrder);

        // console.log(this.state.produceOrder.produceOrder);

        let index = 0;
        
        console.log("inside function handlecheckbox...");

        // console.log(this.props.state);

        let checkBoxArray = this.props.state.produceOrder;

        // console.log(checkBoxArray);

        // console.log("inside function handleCheckBox " + e.target.value);

        // console.log("e.target.checked is from " + e.target.value + "-" + e.target.checked);

        // console.log(checkBoxArray);

        checkBoxArray.forEach(value =>{


     
            // console.log("value of checkbox is " + value.checkBox);

            if(value.produce === e.target.value){
                if (value.checkBox === false) {

                    value.checkBox = e.target.checked;

                    // console.log("e.target.checked is from " + e.target.value + "-" + e.target.checked);

                    
                }
                else{
                    // console.log("---->alfredo is testing e.target.checked");
                    
                    // console.log(e.target.checked);

                    value.checkBox = e.target.checked;
                }

            }


         index++;

        })//end of loop
     
            // console.log(checkBoxArray);
            
    }

    removeItems=(myProduceItem)=>{
        // console.log(this.state);
        
        // console.log(myProduceItem);

        // console.log(this.props.location.state.produceOrder);

        // console.log(this.state.produceOrder.produceOrder);

        const produce_Item = this.state.produceOrder.produceOrder.filter(item=>item.checkBox !== true);

        this.setState({produceOrder: produce_Item});

        // console.log("alfredo is testing...");
      
    //   console.log(produce_Item);

      return produce_Item;
    }

    getId=(i, produce)=>{


    }

    getSortedOrder=()=>{
        let myId;
        // console.log(this.props.location.state.produceOrder);
 
        // console.log(this.state.produceOrder.produceOrder);

        // console.log(this.props.state);


        //TODO: THIS WILL SORT THE PRODUCE ARRAY AND WILL DISPLAY ALL PRODUCE ITEMS
        const myData = [].concat(this.props.state.produceOrder).sort((a,b)=> a.produce > b.produce ? 1 : -1).map((item,i)=>
    
        <li key={item.id}>
            {i === 0 ? <div> 
                {/* <button className="removeSelected" onClick={()=>this.props.editDelete()}>Remove Items</button> */}

                </div>: <div className="check">
                    {/* {console.log(item.check)} */}
                    <input 
                        onChange={(e)=>this.handleCheckBox(e)} 
                        type="checkbox"
                        // checked={item.check}
                        value = {item.produce}
                    />
                </div>}
            {item.produce}

        </li>)
        
        // console.log(myData);
        
        return myData;

    }   

    backToMainOrder=()=>{

        // console.log("inside function backToMainOrder");

        this.props.history.push(`/confirmOrder/${this.props.state}`)
    }

    // clearCheckBox=(length1,length2, arrayOrder)=>{
    //     let index = 0;

    //     console.log(length1 + ", " + length2);

    //     console.log(arrayOrder);

    //     if (length1 !== length2) {
    //         console.log("lengths are not matching");

    //         arrayOrder.forEach(value=>{
         

    //             <input 
    //             onChange={this.clearAllCheckBoxes(arrayOrder, value.produce)} 
             
    //             type="checkbox"
    //             checked={true}
    //             value = {value.produce}
    //         />
                
    //         })

    //     }
    //     else{
    //         console.log("lengths do match");
    //     }

    //     index++;
    // }


    clearAllCheckBoxes=(arrayOrder)=>{

        let index = 0;
  
        console.log("inside function clearAllCheckBoxes....");

        // console.log(arrayOrder);
   
        const myData = [].concat(this.props.state.produceOrder).sort((a,b)=> a.produce > b.produce ? 1 : -1).map((item,i)=>
        <li key={i}>
            {i === 0 ? <div> 
                {/* <button className="removeSelected" onClick={()=>this.props.editDelete()}>Remove Items</button> */}

                </div>: <div className="check">
                    {/* {console.log(item.check)} */}
                    <input 
                   
                        onChange={(e)=>this.handleCheckBox(e)} 
                        type="checkbox"
                        checked={false}
                        value = {item.produce}
                    />
                </div>}
            {item.produce}

        </li>)
         

        //  console.log(myData);

         return myData;
    }

    onSubmit =(e)=>{

        let email = "johnDoe@gmail.com"
        console.log("inside function sendEmail function");

        // console.log(value.produce);

        console.log(email);
    }



    render(){

        let sortedOrder;
        let triggerText= 'Open form';

        return (
        
        <div>
        
            <div className="currentConfirmOrder">

            {/* <button className="btnPrevious" onClick={this.props.backToMain}>Main Page</button> */}

            {/* <button className="btnPrevious" onClick={this.backToMain}>Main Page</button> */}

            {/* {console.log("....testing this.props.state....")}
            {console.log(this.props.state)} */}

                    <ul>
                        {/* {this.clearAllCheckBoxes(this.props.state.produceOrder)} */}
                        {sortedOrder = this.getSortedOrder()}


                        {/* {console.log("ok...testing again...")}
                        {console.log(this.props.state)}
                        {console.log(sortedOrder)} */}

                    </ul>

            </div>

            <div className="buttonSection">

                <div className="backButton">
                    <Link to={{ pathname: `/confirmOrder/editOrderInfo`, currentState: this.props.state}}>Back To Main</Link>
                </div>
                {/* {console.log(this.props.location.state.produceOrder.length)} */}

                {/* {this.state.orderLength = this.props.location.state.produceOrder.length} */}
                    <button className="removeSelected" onClick={()=>this.props.editDelete()}>Remove Items</button>

                    {/* {console.log(this.props.state.produceOrder.length)} */}

                    {/* {this.clearCheckBox(this.state.orderLength, this.props.state.produceOrder.length, this.props.state.produceOrder)} */}
                    {/* <button className="btnSend" onSubmit={(e)=>this.sendEmail(e)}>Send</button> */}

{/* {console.log(this.props.location.state.produceOrder)} */}

                    <Container triggerText ={triggerText} 
                    onSubmit={this.onSubmit} 
                    produceOrderInfo = {this.props.location.state.produceOrder}
                    />
            </div>


        </div>
        )
    }

}

export default withRouter(CurrentOrderEdit);
