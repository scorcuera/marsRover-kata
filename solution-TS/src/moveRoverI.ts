let INITIAL_COORDINATES = [100, 100];

let moveNorth = (orders: string[]) : number => {
    let filteredOrders = orders.filter(order => order === "N");
    console.log(filteredOrders)
    return filteredOrders.length;
}

let moveSouth = (orders: string[]) : number => {
    let filteredOrders = orders.filter(order => order === "S");
    console.log(filteredOrders)
    return filteredOrders.length;
}

let moveEast = (orders: string[]) : number => {
    let filteredOrders = orders.filter(order => order === "E");
    console.log(filteredOrders)
    return filteredOrders.length;
}

let moveWest= (orders: string[]) : number => {
    let filteredOrders = orders.filter(order => order === "W");
    console.log(filteredOrders)
    return filteredOrders.length;
}

export const moveRoverI = (orders: string[]) => {
    let coordinatesLatitude = moveEast(orders) - moveWest(orders);
    let coordinatesLongitude = moveNorth(orders) - moveSouth(orders);

    if (coordinatesLatitude !== 0 || coordinatesLongitude !==0) {
        return [INITIAL_COORDINATES[0] + coordinatesLongitude, INITIAL_COORDINATES[1] + coordinatesLatitude]
    }

    return INITIAL_COORDINATES;
}
