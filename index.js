const returnFirstTwoDrivers = function (drivers){
    
    let newDrivers
  return drivers.slice(0,2);
}
const returnLastTwoDrivers = function (drivers) {

    let newDrivers
    return drivers.slice(2, 4);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(cb){
    return function (){
       return cb * cb
    }
}
const fareDoubler = function(fares){
 return fares * 2
}
const fareTripler = function (fares) {
    return fares * 3
}
function selectDifferentDrivers(drivers, different){
    if (different === returnFirstTwoDrivers){
        return drivers.slice(0,2)
    }else if (different === returnLastTwoDrivers){
        return drivers.slice(2, 4)
    }
}