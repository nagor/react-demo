function sumLoop(value, number) {
    let result = 0;
    for (let i = 0; i < value; i++) {
        result += number;
    }
    return result;
}

function sum(value, number, result = 0, i = 0) {
    const shouldProceed = i < number;
    const proceed = () => sum(value, number, result + number, i + 1);
    return shouldProceed
        ? proceed()
        : result;
}

function sumCurried(value) {
    return function numberTimes(number) {
        return function startingFrom(result = 0) {
            return function withStep(i = 0) {
                {
                    const shouldProceed = i < number;
                    const proceed = () => startingFrom(result + value)(i + 1);
                    return shouldProceed
                        ? proceed()
                        : result;
                }
            }
        }
    }
}

function sumCurriedFined(value) {
    return function numberTimes(number) {
        function startingFrom(result = 0) {
            return function withStep(i = 0) {
                {
                    const shouldProceed = i < number;
                    const proceed = () => startingFrom(result + value)(i + 1);
                    return shouldProceed
                        ? proceed()
                        : result;
                }
            }
        }
        return startingFrom()();
    }
}

describe('Eliminating loop', () => {
    require('should');
    it('sumLoop version with loop works', () => {
        sumLoop(3, 3).should.be.exactly(9);
    });

    it('sum version w/o loop works', () => {
        sum(3, 3).should.be.exactly(9);
    });

    it('sum curried version w/o loop works', () => {
        sumCurried(3)(3)()().should.be.exactly(9);
    });

    it('sum curried expanded version w/o loop works', () => {
        const sumWhat = sumCurried(5);
        const sumHowManyTimes = sumWhat(3);
        const withInit = sumHowManyTimes(24);
        withInit().should.be.exactly(39);
    });

    it('sum curried fined expose more convinient API', () => {
        const sum6 = sumCurriedFined(6);
        const sum6threetimes = sum6(3);
        sum6threetimes.should.be.exactly(18);
    });
});