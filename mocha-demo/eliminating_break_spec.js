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

const get5KittensOldSchool = cats => {
    const newList = [];

    // old-school edge case kitty loop
    for (var i = 0; i < cats.length; i++) {
        if (isKitten(cats[i])) {
            newList.push(cats[i]);
      
            if (newList.length >= 5) {
                break;
            }
        }
    }

    return newList;
};

const takeFirstIntermediate = (limit, predicate, list, i = 0, result = []) => {
    for (; i < list.length; i++) {
        if (predicate(list[i])) {
            result.push(list[i]);

            if (result.length >= limit) {
                break;
            }
        }
    }

    return result;
};

const takeFirst = (limit, predicate, list, i = 0, result = []) => {
    const isDone = limit <= 0 || i >= list.length;
    const isMatch = isDone ? undefined : predicate(list[i]);

    return isDone
        ? result
        : isMatch
            ? takeFirst(limit - 1, predicate, list, i + 1, [...result, list[i]])
            : takeFirst(limit, predicate, list, i + 1, result);
};

const takeFirstCurrying = limit => predicate => list => (i = 0, result = []) => {
    const isDone = limit <= 0 || i >= list.length;
    const isMatch = isDone ? undefined : predicate(list[i]);

    return isDone
        ? result
        : isMatch
            ? takeFirst(limit - 1, predicate, list, i + 1, [...result, list[i]])
            : takeFirst(limit, predicate, list, i + 1, result);
};


describe('Eliminating break', () => {
    require('should');
    it('isKitten can check if kitten is younger than 7 months', () => {
        isKitten({ months: 7 }).should.be.exactly(false).and.be.a.Boolean();
        isKitten({ months: 6 }).should.be.exactly(true).and.be.a.Boolean();
        isKitten({ months: 8 }).should.be.exactly(false).and.be.a.Boolean();
    });

    it('firstKittenBreak can find kitten', () => { 
        firstKittenBreak(cats)
            .should.not.be.exactly(undefined)
            .and.have.property('name', 'Waffles');
    });

    it('get5Kittens can return up to 5 first kittens', () => {
        get5KittensOldSchool(cats).should.be.an.Array()
            .and.containDeep([{ name: 'Waffles' }, { name: 'Pickles' }])
            .and.have.lengthOf(2);
    });

    it('takeFirstIntermediate can return up to N first kittens', () => {
        takeFirstIntermediate(5, isKitten, cats).should.be.an.Array()
            .and.containDeep([{ name: 'Waffles' }, { name: 'Pickles' }])
            .and.have.lengthOf(2);
    });

    it('takeFirst can return up to N first kittens', () => {
        takeFirst(5, isKitten, cats).should.be.an.Array()
            .and.containDeep([{ name: 'Waffles' }, { name: 'Pickles' }])
            .and.have.lengthOf(2);
    });

    it('takeFirst can return empty array if passed limit is negative', () => {
        takeFirst(-2, isKitten, cats)
            .should.be.an.Array()
            .and.have.lengthOf(0);
    });

    it('takeFirst can return empty array if passed limit is 0', () => {
        takeFirst(0, isKitten, cats)
            .should.be.an.Array()
            .and.have.lengthOf(0);
    });

    it('takeFirstCurrying can return up to N first kittens', () => {
        takeFirstCurrying(5)(isKitten)(cats)()
            .should.be.an.Array()
            .and.containDeep([{ name: 'Waffles' }, { name: 'Pickles' }])
            .and.have.lengthOf(2);
    });

    it('takeFirstCurrying can be used to generate functions', () => {
        const fiveFirstTaker = takeFirstCurrying(5);
        const kittenTaker = fiveFirstTaker(isKitten);
        const fromCatsKittenTaker = kittenTaker(cats);

        fromCatsKittenTaker()
            .should.be.an.Array()
            .and.containDeep([{ name: 'Waffles' }, { name: 'Pickles' }])
            .and.have.lengthOf(2);
    });
});