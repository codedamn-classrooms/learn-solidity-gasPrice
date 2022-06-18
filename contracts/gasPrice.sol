// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract GasPrice {
    function gasPrice() public view returns (uint256) {
        return tx.gasprice;
    }
}
