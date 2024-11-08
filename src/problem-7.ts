{
    //

    class Car {

        constructor(
                public make: string,
                public model: string,
                public year: number
                  ) {}
    
        public getCarAge(): number {
            const currentYear = new Date().getFullYear();
            return currentYear - this.year;
        }
    }
    
    const car = new Car("Honda", "Civic", 2012);
    
    // console.log(car.getCarAge());
    

    //
}