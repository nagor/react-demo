var Tool = function Tool() {
    function init() {
        return {
            foo: '',
            bar: '',
            bark: function bark() {
                return 'bark';
            }
        };
    }

    return {
        init
    };
};

module.exports = Tool;
