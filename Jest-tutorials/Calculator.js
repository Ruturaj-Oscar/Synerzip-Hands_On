
const addition = (num1, num2) => {
    if((num1==undefined) || (num2==undefined))
        return undefined;
    else
        return num1 + num2 };
const substraction = (num1, num2) => {
    if((num1==undefined) || (num2==undefined))
        return undefined;
    if(num1<num2)
        {
            let result=num2-num1;
            return result*-1;
        }
    else
        return num1 - num2 };
const multiplication = (num1, num2) => { 
    if((num1==undefined) || (num2==undefined))
        return undefined;
        
        return num1 * num2 };
const division = (num1, num2) => { 
    if((num1==undefined) || (num2==undefined))
        return undefined;
    else    
        return num1 / num2 };

module.exports={addition,substraction,multiplication,division}
