import { Medals } from './models/Medals.enum.js';
// import './style.css';
import { Sports } from './models/Sports.enum.js';
import { Countries } from './models/Countries.enum.js';
// TODO: required imports
const countrySelect = (document.getElementById('country-slt'));
const medalSelect = (document.getElementById('medal-slt'));
const sportSelect = (document.getElementById('sport-slt'));
const addButton = document.getElementById('add-btn');
//TODO: add an eventlistener to the button to trigger addMedal
const addBtn = (document.getElementById('add-btn'));
addBtn.addEventListener('click', addMedal);
let countries = [];
init();
// This function sets up some display elements
function init() {
    let count = 0;
    for (let c in countries) {
        if (isNaN(Number(c))) {
            let newOption = document.createElement('option');
            newOption.innerHTML = c;
            newOption.value = count.toString();
            count++;
            countrySelect.add(newOption);
        }
    }
    //TODO: populate the Sport select
    let sportSltHTML = '';
    for (let i in Sports) {
        sportSltHTML += `<option value="${Sports[i]}">${Sports[i]}</option>`;
        if (i === '32')
            break;
    }
    document.getElementById('sport-slt').innerHTML =
        sportSltHTML;
    //TODO: populate the Medal select
    let medalSltHTML = '';
    for (let i in Medals) {
        medalSltHTML += `<option value="${i}">${i}</option>`;
    }
    document.getElementById('medal-slt').innerHTML =
        medalSltHTML;
    //
    let countrySltHTML = '';
    for (let i in Countries) {
        countrySltHTML += `<option value="${Countries[i]}">${Countries[i]}</option>`;
        if (i === '248')
            break;
    }
    document.getElementById('country-slt').innerHTML =
        countrySltHTML;
}
const addMedalBtn = (document.getElementById('add-btn'));
addMedalBtn.addEventListener('click', addMedal);
// This function adds a medal to the country's tally
function addMedal() {
    //TODO: complete this function
    displayTable();
}
// This function refreshes the medal tally table
function displayTable() {
    const resultsBody = (document.getElementById('results-body'));
    let newBody = (document.createElement('tbody'));
    newBody.id = 'results-body';
    // TODO: create the rows required for the new table body element
    // replaces the old tbody with the new one created above
    resultsBody.parentNode.replaceChild(newBody, resultsBody);
}
