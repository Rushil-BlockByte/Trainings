pragma solidity >=0.7.0 < 0.9.0;
contract DivisionByZeroAssignment{
    function div(uint a,uint b) public pure returns(uint){
        return a%b; 
    }
}

/*/*
Here in this case we get the below error

call to DivisionByZeroAssignment.div
call to DivisionByZeroAssignment.div errored: VM error: revert.

revert
	The transaction has been reverted to the initial state.
Note: The called function should be payable if you send value and the value you send should be less than your current balance.
Debug the transaction to get more information.
*/
contract divisionByZero{
    function div(uint a,uint b) public pure returns(uint){
        require(b>0,'Divison by zero is not possible'); //here we can define the user defined reason
        return a%b;
    }
}

/*
call to divisionByZero.div
call to divisionByZero.div errored: VM error: revert.

revert
	The transaction has been reverted to the initial state.
Reason provided by the contract: "Divison by zero is not possible".
Debug the transaction to get more information.
*/