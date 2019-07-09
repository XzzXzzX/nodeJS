
function Hello() {
    var name;
    this.setName = function (tname) {
        name = tname;
    };

    this.sayHello = function () {
        console.log("Hello " + name);
    }
};

module.exports = Hello;