class Car {
    color: string;
    private year: number;

    constructor(color: string, year: number) {
        this.color = color;
        this.year = year;
    }
    drive() {
        console.log('Brumm')
        console.log(this.year)
    }
}
const myCar = new Car('red', 2000)
myCar.color = 'blue'
myCar.drive()
