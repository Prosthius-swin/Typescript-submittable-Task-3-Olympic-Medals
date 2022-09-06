import { IResult } from './models/IResult';
import { Medals } from './models/Medals.enum';
import { Country } from './models/Country';
import './style.css';
import { Sports } from './models/Sports.enum';
// TODO: required imports

const countrySelect: HTMLSelectElement = <HTMLSelectElement>(
  document.getElementById('country-slt')
);
const medalSelect: HTMLSelectElement = <HTMLSelectElement>(
  document.getElementById('medal-slt')
);
const sportSelect: HTMLSelectElement = <HTMLSelectElement>(
  document.getElementById('sport-slt')
);

const addButton: HTMLElement = document.getElementById('add-btn');
//TODO: add an eventlistener to the button to trigger addMedal
const addBtn: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById('add-btn')
);
addBtn.addEventListener('click', addMedal);

let countries: Array<Country> = [];

init();

// This function sets up some display elements
function init() {
  let count = 0;
  for (let c in countries) {
    if (isNaN(Number(c))) {
      let newOption: HTMLOptionElement = document.createElement('option');
      newOption.innerHTML = c;
      newOption.value = count.toString();
      count++;
      countrySelect.add(newOption);
    }
  }

  //TODO: populate the Sport select
  let sportSltHTML: string = '';

  for (let i in Sports) {
    sportSltHTML += `<option value="${Sports[i]}">${Sports[i]}</option>`;
    if (i === '32') break;
  }
  (document.getElementById('sport-slt') as HTMLOptionElement).innerHTML =
    sportSltHTML;

  //TODO: populate the Medal select
  let medalSltHTML: string = '';

  for (let i in Medals) {
    medalSltHTML += `<option value="${i}">${i}</option>`;
  }
  (document.getElementById('medal-slt') as HTMLOptionElement).innerHTML =
    medalSltHTML;
}

// This function adds a medal to the countries tally
function addMedal() {
  //TODO: complete this function

  displayTable();
}

// This function refreshes the medal tally table
function displayTable() {
  const resultsBody: HTMLTableSectionElement = <HTMLTableSectionElement>(
    document.getElementById('results-body')
  );

  let newBody: HTMLTableSectionElement = <HTMLTableSectionElement>(
    document.createElement('tbody')
  );
  newBody.id = 'results-body';

  // TODO: create the rows required for the new table body element

  // replaces the old tbody with the new one created above
  resultsBody.parentNode.replaceChild(newBody, resultsBody);
}
