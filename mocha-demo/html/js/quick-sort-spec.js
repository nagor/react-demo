describe('Quick sort test', () => {
    const { quickSort } = require('./quick-sort');
    require('should');
    it('sort', () => {
        quickSort([13, 17, 9, 10, 25, 16, 3], 0, 6)
            .should.containDeep([3, 9, 10, 13, 16, 17, 25]);
        quickSort([]).should.containDeep([]);
    });
});
