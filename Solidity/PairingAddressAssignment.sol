pragma solidity >=0.7.0 < 0.9.0;

contract PairingAddressAssignment{
    mapping(address=>mapping(address=>uint)) internal allowance;

    function addAddress(uint index,address owner,address spender) public{
        allowance[owner][spender] = index;
    }

    function remove(address _addrOwner, address _addrSpender) public {
        delete allowance[_addrOwner][_addrSpender];
    }

    function getIndex(address _addrOwner, address _addrSpender) public view returns(uint){
        return allowance[_addrOwner][_addrSpender];
    }
}