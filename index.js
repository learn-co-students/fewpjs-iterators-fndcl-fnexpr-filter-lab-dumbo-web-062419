// Code your solution here
function findMatching(drivers, string){
  let result = drivers.filter(driver => {
    return driver.toLowerCase() === string.toLowerCase();
  })
  return result;
}

function fuzzyMatch(drivers, string){
  let result = drivers.filter(driver => {
    return driver.slice(0, string.length) === string;
  })
  return result;
}

function matchName(drivers, string){
  let result = drivers.filter(driver => {
    return driver.name == string;
  })
  return result;
}
