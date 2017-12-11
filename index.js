// Code your solution in this file!

function distanceFromHqInBlocks(block){
  return Math.abs(block-42)

}

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block) * 264
}
function distanceTravelledInFeet(start, destination){
  return Math.abs((destination - start) * 264)

}

function calculatesFarePrice(start, destination){
  let distanceInFeet = distanceTravelledInFeet(start, destination);

  if (distanceInFeet <= 400){
    return 0;
  }
  else if (400 < distanceInFeet && distanceInFeet < 2000) {
    return 0.02 * distanceInFeet;
  }
  else if (2000 < distanceInFeet && distanceInFeet < 2500) {
    return 25;
  }
  else{
    return 'cannot travel that far';
  }

}
