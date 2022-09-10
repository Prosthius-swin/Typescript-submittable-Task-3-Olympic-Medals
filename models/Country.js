export class Country {
    // TODO: Country requires a name attribute and a results attribute.
    // name is a string, results is an array of Result
    name;
    results;
    // TODO: receives a name and initialises the results array to an empty array
    constructor(_name) {
        this.name = _name;
        this.results = [];
    }
    // return the total number of medals
    totalMedals() {
        //TODO: complete
        return this.results.length;
    }
    // given a medal type, return the amount of that type of medal
    totalMedalType(medal) {
        // TODO:
        let numMedals;
        for (let i of this.results) {
            console.log('test');
            if (i.medal == 'G') {
                numMedals++;
            }
            else if (i.medal === 'S') {
                numMedals++;
            }
            else {
                numMedals++;
            }
        }
        return numMedals;
    }
}
