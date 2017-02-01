(
    function some() {
        // named function expression
        var foo = function foo() {
            console.log('foo');
        }

        // function expression
        var bar = function () {
            console.log('bar');
        }

        function too() {
            console.log('too');
        }

        too();
        bar();
        foo();
    }
)();