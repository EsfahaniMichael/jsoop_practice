
class Account{
    constructor(){
        this.money = null;
        //store the amount of money in the account
    }
    add( amount ){
        this.money += amount;
        return this.money;
        //add money to the amount stored in the account
        //takes in an amount
        //adds it to the existing amount
        //returns the new amount in the account
    }
    remove( amount ){
        var withdrawn = null;

        if (this.money > amount){

            this.money = this.money - amount;
            withdrawn = amount;
        }
        else if (this.money < amount){
            withdrawn = this.money;
            this.money = this.money - this.money;
        }
        return withdrawn;
        //removes funds from an account
        //check if the amount to withdraw is more than the account
        //if more, only withdraw the amount in the account, not more
        //if less, withdraw the amount specified
        //return the amount actually withdrawn
    }
    getAmount(){
        return this.money;
        //returns the amount in the account
    }
}