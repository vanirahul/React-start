 import React from "react";
 
 import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
 import "./ExpenseItem.css";
 //import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
    // function clickHandler() {}

     const clickHandler = ()=> {
        console.log('Clicked!!!!');
     };
     
    return  (
        <Card  className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            
            {/* <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} /> */}
            </div> 
            <button onClick={clickHandler}>Change Title </button>
        </Card>
    );
}
export default ExpenseItem;
  