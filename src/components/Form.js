import React, { Component } from 'react';
// import React from 'react';
import emailjs from 'emailjs-com';

class Form extends Component{
  constructor(props){
  
    super(props);

    this.state ={
      textAreaValue: "",
    }

    console.log(this.props.order);

    // this.getProduceOrder();

}//end of constructor

  onSubmit=(e)=> {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_cn4u2bm', e.target, 'user_KD4qg7Toe0JjVIPUUhr70')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

  }

  getProduceOrder=()=>{

    let index = 0;

    this.props.order.forEach(item => {
      
      if (index > 0) {

        console.log(item);

        this.state.textAreaValue = this.state.textAreaValue + this.printItem(index);
      }
      
      index++;

    });//end of while loop
    
  }

  getTabs=()=>{

    return("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t");
  }

  getLines=()=>{
    return("------------------------------------------------------------------------------------------------------------------------------------------------------>");
  }

  printItem=(location)=>{
    
    let produceItem;

      produceItem = "     " + this.props.order[location].produce + "--------->" + this.props.order[location].quantity + '\n\n'

      return produceItem;

  }

  displayTextArea=()=>{

   return (console.log("displayTextArea"));

  }

  render(){

  return (
  <div>
    {this.getProduceOrder()}

    <form className="contact-form" onSubmit={this.onSubmit}>
      <div className ="nameInput">
        <label>Name</label>
        <input className="name" type="text" name="name"/>
      </div>

      <div className="emailInput">
        <label>Email</label>
        <input className="email" type="email" name="email"/>
      </div>

      <div className="subjectInput">
        <label>Subject</label>
        <input type="subject" name="subject"/>
      </div>

      <label className="message">Message</label>

      <textarea 
      value={this.state.textAreaValue}
      onChange={this.getProduceOrder}
      // value={"testing"}
      row={10}
      cols={30}
      name="message" />
      <input type="submit" value="message" />
    </form>
  </div>
  )
  }
}

export default Form;

