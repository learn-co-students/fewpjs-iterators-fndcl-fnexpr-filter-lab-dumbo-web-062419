// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
    let matchingDrivers = drivers.filter(n => {
        return n.toLowerCase() === name.toLowerCase()
        // if (n.toLowerCase() === name.toLowerCase()){
            // matchingDrivers.push(n)
        // }
    })
    return matchingDrivers
}

// console.log(findMatching(drivers, 'Bobby'))

function fuzzyMatch(drivers, firstLetters){
    let matchingDrivers = drivers.filter(n => {
        return n.startsWith(firstLetters)
    })
    return matchingDrivers
}

// console.log(fuzzyMatch(drivers, 'Sa'))

const driversArray = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(driversArray, name) {
    let matchingDrivers = driversArray.filter(driver => {
        console.log(driver.name)
        return driver.name === name
    })
    return matchingDrivers
}

// console.log(matchName(driversArray, 'Bobby'))