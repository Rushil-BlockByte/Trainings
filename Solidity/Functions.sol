pragma solidity >=0.7.0 < 0.9.0;

/*
Function :
A function is group of resuable code which can be called anywhere in our program.
Function eliminates the need of writing the same code again and again.
It helps programmer in writing modular codes. Funstions allow a programmer to divide 
a big problem into a number of smaller and manageble functions.

functions takes inputs of information and produce outputs
*/

contract LearnFunctions{
    //function name(parameter-list) scope returns(){
        //statements;
    //}

    //local variable will superceed the state variables

    uint a=45;//State Varible
    //if we have a constant value for a variable then use state variables.
    function remoteControlOpen(bool closeddoor) private returns(bool){
    }

    function addValues() public view returns(uint)
    {
       // uint a = 10;//local variable
        uint b = 30;
        //uint result = a + b;
        return a+b;
    }

    function addNewValues() public view returns(uint)
    {
       // uint a = 14;
        uint b = 70;
        //uint result = a + b;
        return a+b;
    }
}