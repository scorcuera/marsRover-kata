type Coordinates = [number, number];
type Direction = "N" | "S" | "E" | "W";

const INITIAL_COORDINATES: Coordinates = [100, 100];

const countOrders = (orders: string[], direction: Direction) : number => {
    return orders.filter(order => order === direction).length;
}

export const moveMegaUltraRover = (orders: string[]): Coordinates => {

    const latitudeChange = countOrders(orders, "E") - countOrders(orders, "W");
    const longitudeChange = countOrders(orders, "N") - countOrders(orders, "S");

    if (latitudeChange !== 0 || longitudeChange !== 0) {
        return [INITIAL_COORDINATES[0] + longitudeChange, INITIAL_COORDINATES[1] + latitudeChange]
    }

    return INITIAL_COORDINATES;
}

