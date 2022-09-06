import { IResult } from './IResult';
import { Medals } from './Medals.enum';

export class Country {
  // TODO: Country requires a name attribute and a results attribute.
  // name is a string, results is an array of Result
  name: string;
  results: IResult[];

  // TODO: receives a name and initialises the results array to an empty array
  constructor(_name: string, _results: IResult[]) {
    this.name = _name;
    this.results = _results;
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
      if (i === 'G') {
        numMedals++;
      } else if (i === 'S') {
        numMedals++;
      } else {
        numMedals++;
      }
    }
    return numMedals;
  }
}
