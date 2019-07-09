
function Person(name) {
    this.name = name;
    this.showName = function () {
        console.log(this.name);
    }
}

// new的function对象没有原型，prototype
var one = new Person("JS");
one.showName();
console.log(one);

