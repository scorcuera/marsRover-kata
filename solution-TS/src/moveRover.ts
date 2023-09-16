export const moveRover = (orders: string[]) : [number, number] => {
    let coordinatesLatitude = 100;
    let coordinatesLongitude = 100;

    orders.forEach(order => {
        if (order === "N") {
            coordinatesLongitude++;
        }
        if (order === "S") {
            coordinatesLongitude--;
        }
        if (order === "E") {
            coordinatesLatitude++;
        }
        if (order === "W") {
            coordinatesLatitude--;
        }
    })
    
    return [coordinatesLongitude, coordinatesLatitude]
}