pragma solidity >=0.7.0 < 0.9.0;

//An Operator in a programming language is a symbol which tell the compiler or the Interpreter
//to perform specific mathematical,relational or logical operation and produce final results.

//Arithematic Operators: +, -, %, /, *.
//Increment Operators ; ++ , --;

contract operators{
    string fred = "weekend";
    string tom = "adventure";
    function calculator() public pure returns(uint){
        uint a = 5;
        uint b = 4;
        return a%b;
    }
}

/*
4
287
28
3