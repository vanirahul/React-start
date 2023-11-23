 import "./ExpenseItem.css";
 import ExpenseDetails from "./ExpenseDetails";

function ExpenseItem(props) {
    const month=props.date.toLocaleString('en-US',{month:'long'});
    const day= props.date.toLocaleString('en-US',{day:'2-digit'});
    const year=props.date.getFullYear();
    return  (
        <div  className="expense-item">
            <div> 
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
              
        </div>
    );
}
export default ExpenseItem;
  