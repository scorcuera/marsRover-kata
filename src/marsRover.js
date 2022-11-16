const INITIAL_COORDINATES = [100,100];

// creamos una función propia para cada 
// punto cardinal (single responsibility)

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

    // evaluamos la diferencia entre puntos cardinales
    // opuestos: latitud (norte - sur)
    // y longitud (este - oeste)
    let coordinatesLatitude = moveNorth(orders) - moveSouth(orders);
    let coordinatesLongitude = moveEast(orders) - moveWest(orders);

    // si se ha detectado un movimiento respecto
    // a la posición inicial, que se devuelva 
    // la nueva posición
    if(coordinatesLatitude || coordinatesLongitude) {
        return [100 + coordinatesLatitude, 100 + coordinatesLongitude]
    }

    // si no ha habido diferencia respecto
    // a la posición inicial [100, 100]
    // devuélveme esta
    return INITIAL_COORDINATES;
}
