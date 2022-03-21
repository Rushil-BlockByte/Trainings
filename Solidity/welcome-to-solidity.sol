pragma solidity >= 0.7.0 < 0.9.0;

contract welcome {
    constructor() public{}
    function getResult() public returns(uint)
    {
        uint a = 5;
        uint b = 10;
        uint result = a + b;
        return result;
    }
}