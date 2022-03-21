pragma solidity >=0.7.0 < 0.9.0;
//condition statements  are fundamental control statements 
//that allows us when we are in a situation to choose 1 path from many paths

contract DecisionMaking{
    uint oranges=4;
    function validateoranges() public view returns(bool){
        if(oranges==5){
            return true;
        }
        //else{
          //  return false;
        //}
        
    }
}