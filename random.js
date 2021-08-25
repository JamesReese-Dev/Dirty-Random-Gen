var _ = require('lodash');


let group1 = [];
let group2 = [];
let group3 = [];
let group4 = [];
let group5 = [];
let group6 = [];
let group7 = [];
let group8 = [];
let group9 = [];

function randomList() {

    let names = [
        'Aaron',
        'Andrew',
        'Ashley (Ash)',
        'Benjamin ',
        'Brandon',
        'Drew (Snazzy Chazzy)',
        'Christopher',
        'Dane',
        'Eric',
        'Gene (Eugenea)',
        'Halie',
        'Hilliary',
        'James',
        'Jesse',
        'John',
        'Joseph',
        'Joshua',
        'Kristen',
        'Michael',
        'Swapna',
        'Thao',
        'Taylor',
        'Tyler',
        'Victor',
        'Victor ',
        'Zane'];

    let testArray = _.shuffle(names);


    for (let i = 0; i < testArray.length; i++) {
        if (group1.length < 3) {
            group1.push(testArray[i]);
        }
        else if (group2.length < 3) {
            group2.push(testArray[i]);
        }
        else if (group3.length < 3) {
            group3.push(testArray[i]);
        }
        else if (group4.length < 3) {
            group4.push(testArray[i]);
        }
        else if (group5.length < 3) {
            group5.push(testArray[i]);
        }
        else if (group6.length < 3) {
            group6.push(testArray[i]);
        }
        else if (group7.length < 3) {
            group7.push(testArray[i]);
        }
        else if (group8.length < 3) {
            group8.push(testArray[i]);
        }
        else {
            group9.push(testArray[i]);
        }

    }

    console.log(`Group 1: ${group1}`);
    console.log(`Group 2: ${group2}`);
    console.log(`Group 3: ${group3}`);
    console.log(`Group 4: ${group4}`);
    console.log(`Group 5: ${group5}`);
    console.log(`Group 6: ${group6}`);
    console.log(`Group 7: ${group7}`);
    console.log(`Group 8: ${group8}`);
    console.log(`Group 9: ${group9}`);

}




randomList();
