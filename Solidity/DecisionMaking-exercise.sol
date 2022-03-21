pragma solidity >=0.7.0 < 0.9.0;
/*
Exercise in Defi :)

1) create a stokingwallet variable as an integer and set it to the value of 10
2) write a function called airdrop which has public visibility, is IDE viewable and returns an integer
3) create decision making logic so that if wallet has a value of 10 then add to the wallet 10 more
4) add an else statement so that if the wallet does not equal the value of 10 to add only 1 more
5) return the value of the wallet
6) compile and deploy the smart contract

*/

contract DecisionMaking{

    uint stockwallet = 101;
    function aipDrop() public view returns(uint){
        if(stockwallet>=10)
        {
           return stockwallet + 10;
        }
        else
        {
          return stockwallet + 1;
        }

    } 
}