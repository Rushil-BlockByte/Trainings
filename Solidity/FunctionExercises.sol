pragma solidity >=0.7.0 < 0.9.0;


/*

1) create a function learnFunctions contract called multiplyCalculator
2) Add two parameters to the function a & b and set them as integers.
3) Grant the functions public visibility as well as viewing.
4) return an integer for the function.
5) create a variable result that contains the logic to multiply a nd b
6) return result;
7) compile and deploy the first dApplication and test out the result
*/

contract FuctionExcercise{

    function multiplyCalculator(uint a,uint b) public view returns(uint){
        uint result = a*b;
        return result;
    }
}