// Code your solution in this file!
function distanceFromHqInBlocks(numberOfBlocks){
    if (numberOfBlocks < 42){
    return 42 - numberOfBlocks}
    return numberOfBlocks - 42;

}
let numberOfBlocks = 1;

function distanceFromHqInFeet(numberOfBlocks){
  return  distanceFromHqInBlocks(numberOfBlocks) * 264
}

function distanceTravelledInFeet(firstBlock, lastBlock){
    if (firstBlock > lastBlock) {
        return (firstBlock - lastBlock) * 264;
    }
    return (lastBlock - firstBlock) * 264;
}


function distanceTravelledInFeet(start, end) {
    return Math.abs((start - end) * 264);
  }
  
  function calculatesFarePrice(start, end) {
    const distanceTravelled = distanceTravelledInFeet(start, end); 
    if (distanceTravelled < 400) {
      return 0;
    } else if (distanceTravelled >= 400 && distanceTravelled <= 2000) {
      return ((distanceTravelled -400) * .02);
    }
    else if ((distanceTravelled >= 2000) && (distanceTravelled <= 2500)) {
      return 25;
    }
    else {
      return 'cannot travel that far';
    }
  }