// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract TimeLockSavings is ReentrancyGuard {
    struct Deposit {
        uint256 amount;
        uint256 lockEndTime;
        string purpose;
    }

    mapping(address => Deposit[]) public deposits;
    
    event Deposited(address indexed user, uint256 amount, uint256 lockEndTime, string purpose);
    event Withdrawn(address indexed user, uint256 amount);

    function deposit(uint256 _lockTime, string calldata _purpose) external payable {
        require(msg.value > 0, "Must deposit a positive amount");
        
        uint256 lockEndTime = block.timestamp + _lockTime;
        
        deposits[msg.sender].push(Deposit({
            amount: msg.value,
            lockEndTime: lockEndTime,
            purpose: _purpose
        }));

        emit Deposited(msg.sender, msg.value, lockEndTime, _purpose);
    }

    function withdraw(uint256 index) external nonReentrant {
        require(index < deposits[msg.sender].length, "Invalid index");
        Deposit storage userDeposit = deposits[msg.sender][index];
        require(userDeposit.amount > 0, "No funds locked");
        require(block.timestamp >= userDeposit.lockEndTime, "Lock period has not expired");
        
        uint256 amount = userDeposit.amount;
        
        userDeposit.amount = 0; // Reset the deposit
        
        payable(msg.sender).transfer(amount);

        emit Withdrawn(msg.sender, amount);
    }

    function getRemainingLockTime(address user, uint256 index) external view returns (uint256) {
        require(index < deposits[user].length, "Invalid index");
        Deposit storage userDeposit = deposits[user][index];
        if (block.timestamp >= userDeposit.lockEndTime) {
            return 0;
        } else {
            return userDeposit.lockEndTime - block.timestamp;
        }
    }

    function getDepositDetails(address user, uint256 index) external view returns (uint256 amount, uint256 lockEndTime, string memory purpose) {
        require(index < deposits[user].length, "Invalid index");
        Deposit storage userDeposit = deposits[user][index];
        return (userDeposit.amount, userDeposit.lockEndTime, userDeposit.purpose);
    }

    function getUserDepositCount(address user) external view returns (uint256) {
        return deposits[user].length;
    }

    function getAllDeposits(address user) external view returns (Deposit[] memory) {
        return deposits[user];
    }
}


