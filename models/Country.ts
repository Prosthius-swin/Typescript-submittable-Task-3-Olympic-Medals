import { IResult } from './IResult.js';
import { Medals } from './Medals.enum.js';

export class Country {
  // TODO: Country requires a name attribute and a results attribute.
  // name is a string, results is an array of Result
  name: string;
  results: IResult[];

  // TODO: receives a name and initialises the results array to an empty array
  constructor(_name: string) {
    this.name = _name;
    this.results = [];
  }

  // return the total number of medals
  totalMedals(): number {
    //TODO: complete
    return this.results.length;
  }

  // given a medal type, return the amount of that type of medal
  totalMedalType(medal: Medals): number {
    // TODO:
    let numMedals: number;
    for (let i of this.results) {
      console.log('test');
      if (i.medal == 'G') {
        numMedals++;
      } else if (i.medal === 'S') {
        numMedals++;
      } else {
        numMedals++;
      }
    }
    return numMedals;
  }
}
