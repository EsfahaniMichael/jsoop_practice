
class Calculator{
    constructor(){
        this.operator = null;
        this.number = {

        }

        //takes in nothing
        //make storage for the operator and the numbers
    }
    loadOperator(  operator){
        if (operator === '+' || '-' || '*' || '/'){
            this.operator = operator;
            return true;
        }
        else{
            return false;
        }
        //adds the operator to the next calculation----------***
        //takes in the operator
        //checks if it is a valid operation (+-*/)
        //save the op to the constructor storage
        //return true
        //or return false if not the right operator
    }
    loadNumber( number ){

        if (typeof(number ) === 'string'){
            return false;
        }
        else if(typeof(number) === 'number' && (!this.number.numberOne)){
            this.number.numberOne = number;
            var numLength = Object.keys(this.number);
            return numLength.length;
        }
        else if (typeof(number) === 'number' && (!this.number.numberTwo)){
            this.number.numberTwo = number;
            numLength = Object.keys(this.number);
            return numLength.length;
        }
        else if ((this.number.numberOne) && (this.number.numberTwo)){
            return false;
        }


        //takes in a number and stores it as one of the numbers to perform math on
        //takes in 1 number
        //checks if it is actually a number and if we have fewer than 2 numbers
        //if it is a number, and we have 2 or fewer numbers, store it
        //return the number of numbers stored
        //otherwise return false (too many numbers stored)
    }
    calculate(){
        var answer = null;
        var num1 = parseInt(this.number.numberOne);
        var num2 = parseInt(this.number.numberTwo);
        if (this.operator == '+'){
            answer = num1 + num2;
        }
        else if (this.operator == '-'){
            answer = num1 - num2;
        }
        else if (this.operator == '*'){
            answer = num1 * num2;
        }
        else if (this.operator == "/"){
            answer = (num1 / num2);
        }

        this.number = {};
        return answer;

        //calculate the result of the stored numbers and operator
        //takes in nothing
        //calculates with the operator and 2 numbers
        //clears out the stored numbers
        //returns the calculated result
    }
}
