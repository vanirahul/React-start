 import React  from "react";
 
 import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
 import "./ExpenseItem.css";
 //import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
    // function clickHandler() {}
    //  const [title,setTitle] = useState(props.title);
    //  const [amount,setAmount] = useState(props.amount);
 
    

    //  const clickHandler = ()=> {
    //      setTitle('Updated!'); 
    //      console.log(title);
    //  };
    //  const amountChangeHandler = ()=> {
    //      setAmount('100');

    // };
     
    return  (
        <Card  className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            
            {/* <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} /> */}
            </div> 
            {/* <button onClick={clickHandler}>Change Title </button>
            <button onClick={amountChangeHandler}>Change amount </button> */}
        </Card>
    );
};
export default ExpenseItem;
  