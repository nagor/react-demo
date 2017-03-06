// https://hackernoon.com/rethinking-javascript-eliminate-the-switch-statement-for-better-code-5c81c044716d

const executeIfFunction = f =>
    f instanceof Function ? f() : f;

const switchcase = cases => defaultCase => key =>
    key in cases ? cases[key] : defaultCase;

const switchcaseF = cases => defaultCase => key =>
    executeIfFunction(switchcase(cases)(defaultCase)(key));

const counter = (state = 0, action) =>
    switchcaseF({
        'RESET': 0,
        'INCREMENT': () => state + 1,
        'DECREMENT': () => state - 1
    })(state)(action.type);

const getDay = switchcase({
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
})('Unknown');
const getDayString = (dayNumber) => getDay(dayNumber);

require('should');
describe('Functional switch', function () {
    describe('Counter', function () {
        var increment = { type: 'INCREMENT' };
        var decrement = { type: 'DECREMENT' };
        var wrong = { type: 'WRONG' };
        var reset = { type: 'RESET' };
        it('should return +1 when ICREMENT passed', function () {
            counter(2, increment).should.be.exactly(3).and.be.a.Number();
        });

        it('should return -1 when DECREMENT passed', function () {
            counter(2, decrement).should.be.exactly(1).and.be.a.Number();
        });

        it('should return the same value when WRONG passed', function () {
            counter(2, wrong).should.be.exactly(2).and.be.a.Number();
        });

        it('should return 0 when RESET passed', function () {
            counter(34, reset).should.be.exactly(0).and.be.a.Number();
        });
    });

    describe('Get day', function () {
        it('should return Thursday for 02/02/2017', function () {
            getDayString((new Date(2017, 2, 2)).getDay()).should.be.exactly('Thursday').and.be.a.String();
        });
        it('should return Unknown for -3', function () {
            getDayString(-3).should.be.exactly('Unknown').and.be.a.String();
        });
    });
});
