import React from "react";

 
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseItem from "./components/Expenses/ExpenseItem";

const App= () => {
  const expenses =[
    {
      id:'e1',
      title:'Toilet Paper',
      amount:37,
      date:new Date(2020,7,14),
    },
    {id:'e2',title:'new Tv',amount:564,date:new Date(2021,2,12)},
    {
      id:'e3',title:'car insurence',amount:564,date:new Date(2021,3,28),
    
    },
    {
      id:'e4',
      title:'new desk(wooden)',
      amount:456,
      date:new Date(2021,4,12),
    },
  ];
   const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
   };

  return (
  <div>
    <NewExpense onAddExpense={addExpenseHandler} />
  <NewExpense items={expenses} /> 

     <ExpenseItem
      title={expenses[1].title} 
     amount={expenses[1].amount}
      date={expenses[1].date}
        />
         
     <ExpenseItem
     title={expenses[2].title} 
     amount={expenses[2].amount}
      date={expenses[2].date}
      />

     <ExpenseItem
     title={expenses[3].title} 
     amount={expenses[3].amount}
      date={expenses[3].date}
      />
  
       
      
    </div>
  );
     
};

export default App;
