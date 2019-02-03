class Bus {
    constructor(direction, stations, seats, passengers, last_station) {
        this.direction = direction;
        this.stations = stations;
        this.seats = seats;
        this.passengers = passengers;
        this.last_station = last_station
    }

    current () {
        console.log(this.current);
    }

    next () {
        let nextStation = this.stations + 1;
    }
}