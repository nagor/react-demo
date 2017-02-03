const cats = [
    { name: 'Mojo', months: 84 },
    { name: 'Mao-Mao', months: 34 },
    { name: 'Waffles', months: 4 },
    { name: 'Pickles', months: 6 }
];
const isKitten = cat => cat.months < 7;

const firstKittenBreak = cats => {
    let firstKitten;
    for (var i = 0; i < cats.length; i++) {
        if (isKitten(cats[i])) {
            firstKitten = cats[i];
            break;
        }
    }
    return firstKitten;
};

describe('Eliminating break', () => {
    require('should');
    it('isKitten can check if kitten is younger than 7 months', () => {
        isKitten({ months: 7 }).should.be.exactly(false).and.be.a.Boolean();
        isKitten({ months: 6 }).should.be.exactly(true).and.be.a.Boolean();
        isKitten({ months: 8 }).should.be.exactly(false).and.be.a.Boolean();
    });

    it('firstKittenBreak can find kitten', () => { 
        firstKittenBreak(cats).should.not.be.exactly(undefined).and.have.property('name', 'Waffles');
    });
});