import React from "react";
import "../App.css";

//stateless component to render preview results
const Ordersection = ({ produceData, keyword}) => {
  let findProduceItem = (produceItem, produceCode)=>{
    
        let found = false;
        let index = 0;
        let temp;
 

        let produceProducts = produceData.map(({produceItem, produceCode}, index)=>{

            if (keyword === produceItem) {

                console.log("produce code is " + produceCode);

                found = true;
            }

        })

        console.log("found is " + found);

        return found;
      };

  return (
    <div className="order_Section">
        {findProduceItem(keyword) === true ? `${keyword}=${keyword}` : "false"}
    </div>
  );
};

export default Ordersection;