import React from "react";

import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = props =>{
    const length = props.items.length;
    
    return(
        <div>
            {length>1 && 
        <ul className="expenses-list">

            {props.items.map((expense) => (
                <ExpenseItem 
                key ={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}
                />
            ))}
            </ul> }

              { length ===0 &&
             <div> Found no expenses.</div>   }
 { length === 1 &&
             <div> Only one Expenses found add more.....</div>   }


            

        </div>
    )

};


export default ExpensesList;