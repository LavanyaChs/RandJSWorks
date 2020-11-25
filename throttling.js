//>Open html file in chrome
//Used for performance operation - for rate limiting , we do throttling.
//A btn- click....onClickMethod. User clicks continuously....we dont want to to onClickMethod API calls on every user click
//Throttling will hinder the call of onClickMethod
//Throttling will delay function calls.
// user clicks ----- | | | | | | | | | 
//With throttling ,if a function call happens the very first time of user click, next function call can happen only after Xms(delay).

const expensiveFunc = () => {
    console.log(" Expense!")
}
// window.addEventListener('resize', expensiveFunct);
// this expense function will be triggered on every resize event
//Lets have a better expensive function - a thrittled version.
  


//Lets define what to be done.
const throttle = (actualFunc, limit)=>{
    //we should return a function as this is to betterfy the actual method.
    let canIExecute = true;        
    return function () {
        let context = this;
        let args = arguments;
        if (canIExecute) { //All the calls which comes before the given time delay will be skipped
            canIExecute = false;
            actualFunc.apply(context, args);
            
        }
         setTimeout(() => {
            canIExecute = true;
        } , limit);

    }
}
var betterExpenseFunc = throttle(expensiveFunc, 20000);
//when resise events are happening, this expenseFunc will be called only after limit.

document.getElementById('mybtn').addEventListener('click', betterExpenseFunc);