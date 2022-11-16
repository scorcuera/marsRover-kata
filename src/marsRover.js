const INITIAL_COORDINATES = [100,100];


const moveNorth = (orders) => {
    let ordersToNorth = orders.filter(order => order == 'N');
    return ordersToNorth.length;
}
const moveSouth = (orders) => {
    let ordersToNorth = orders.filter(order => order == 'S');
    return ordersToNorth.length;
}
const moveEast = (orders) => {
    let ordersToNorth = orders.filter(order => order == 'E');
    return ordersToNorth.length;
}
const moveWest = (orders) => {
    let ordersToNorth = orders.filter(order => order == 'W');
    return ordersToNorth.length;
}

export const moveRover = (orders) => {
    let coordinatesLatitude = moveNorth(orders) - moveSouth(orders);
    let coordinatesLongitude = moveEast(orders) - moveWest(orders);
    if(coordinatesLatitude || coordinatesLongitude) {
        return [100 + coordinatesLatitude, 100 + coordinatesLongitude]
    }
    return INITIAL_COORDINATES;
}
