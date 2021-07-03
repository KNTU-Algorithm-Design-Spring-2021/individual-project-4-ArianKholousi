function allocateResources(items, trucksCount) {
    let trucksArr = new Array(trucksCount).fill(0)
    items.forEach(item => {
        let lightestTruckIndex = getLightestTruck(trucksArr)
        trucksArr[lightestTruckIndex] += item
    })
    return trucksArr
}

function getLightestTruck(trucks){
    return trucks.indexOf(Math.min(...trucks))
}


let items = [10, 40, 20, 30, 20, 30, 10];
let trucks = 3
let treshold = 40;

let allocatedArray = allocateResources(items, trucks, treshold);
console.log("truck weights:" , allocatedArray);
