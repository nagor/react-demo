// https://medium.com/statuscode/functional-programming-for-the-dysfunctional-756531f5b9b4#.ihcm2of86

const R = require('ramda');

const people = [
    { name: 'Charlie Koster' },
    { name: 'John Doe' }
];

// capitalizeNames : Person -> String
function capitalizeNames(person) {
    return person.name.toUpperCase();
}

// splitAndReverseNames : String -> Array<String>
function splitAndReverseNames(name) {
    return R.reverse(name.split(' '));
}

function insertMrBefore(name) {
    return `Mr ${name}`;
};

// formatNames : Array<String> -> String
function formatNamesAsReverse(names) {
    const abbreviatedFirst = names[1].substr(0, 1);
    return `${names[0]}, ${abbreviatedFirst}.`;
};

function formatNamesAsReversePrependent(names) {
    const abbreviatedFirst = names[1].substr(0, 1);
    return `${names[2]} ${names[0]}, ${abbreviatedFirst}.`;
};

// personToFormattedName : Person -> String
const personToFormattedName = R.compose(
    formatNamesAsReverse,
    splitAndReverseNames,
    capitalizeNames
);

const personToFormattedNameWithPrependent = R.compose(
    formatNamesAsReversePrependent,
    splitAndReverseNames,
    insertMrBefore,
    capitalizeNames
);

describe('Ramda tests', () => { 
    require('should');
    it('compose works', () => { 
        people.map(personToFormattedName)
            .should.be.an.Array()
            .and.containDeep(['KOSTER, C.', 'DOE, J.'])
            .and.have.lengthOf(2);
    });

    it('compose works with additions', () => {
        people.map(personToFormattedNameWithPrependent)
            .should.be.an.Array()
            .and.containDeep(['Mr KOSTER, C.', 'Mr DOE, J.'])
            .and.have.lengthOf(2);
    });
});


// some OOP appoach

// A possible OOP variation
var Person = function (name) {
    this.name = name;
    this.formatName = () => {
        let upperNames = this.name.toUpperCase().split(' ');
        let abbreviatedFirst = upperNames[0].substr(0, 1);
        this.name = upperNames[1] + ', ' + abbreviatedFirst + '.';
    };
}
function formatPeopleNames(persons) {
    var formattedNames = [];
    for (var i = 0; i < persons.length; ++i) {
        persons[i].formatName();
        formattedNames.push(persons[i].name);
    }
    return formattedNames;
}
const person1 = new Person('Charlie Koster');
const person2 = new Person('John Doe');
var peopleObjs = [person1, person2];

describe('Some OOP aproach tests', () => {
    require('should');
    it('oop apporach works', () => {

        formatPeopleNames(peopleObjs)
            .should.be.an.Array()
            .and.containDeep(['KOSTER, C.', 'DOE, J.'])
            .and.have.lengthOf(2);
    });
});
