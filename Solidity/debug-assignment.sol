pragma solidity >=0.7.0 < 0.9.0;

/* 

You just land your new blockchain job to build smart contracts for an awesome DAO catching fire!

Immediately, your boss throws at your a scrip of code tons of bugs in it. She says, 

'Hey you! Fix this code and get this smart contract running and help save our DApp from crashing!'

The clock is ticking and this is the perfect opportunity to prove your skills and show what you are made of.

Your assignment is to fix the code below full of syntax errors and get this contract successfully deployed on 
the Ethereum network. 

Good luck! 

*/

contract learnFunctions  {
    
   
   function remotecontrolOpen(bool closedDoor, bool openDoor) public returns(bool) {

   }
    
   uint a = 45;
   //a = uint 
    function addfValues() public view  returns(uint) {
      // uint 3 = b:
      uint b = 3;
       uint result = a + b;
       return result;
   }
   
   
   function addNewValues() public view returns (uint) {
       uint b = 5;
       uint result = a + b;
       return result;
   }
   
  //4 += uuint;
  uint b = 4 ;
   
    function multiplyCalculatorByFour(uint a) public view returns(uint) {
        uint result = a * b;
        return result;
     }
    
        function divideCalculatorByFour(uint a) public view  returns (uint) {
       // a / b = uint result
       uint result = a / b;
        return result;
    }
   
}