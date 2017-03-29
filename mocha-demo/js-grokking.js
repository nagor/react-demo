// This function resolves expression in () and returns it
const temp = name => ({ name });
// This one resolves argument passed and retuns undefined. 
// Curly braces are treated as function body
const temp2 = name => { name };
console.log(temp('some name'));
console.log(temp2('some name'));
