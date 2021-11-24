const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const addBatteries = (prevVal, currVal) => prevVal + currVal;


var totalBatteries = batteryBatches.reduce(addBatteries, 0)