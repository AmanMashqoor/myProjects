const secret = "SECRET CODE";

const person = {
    name:"John",
    job: "Manager"
};

const fruits = ['apple','orange'];

const sayHi = (name) =>{
    console.log(name + " = 1234");
}

module.exports.function = sayHi
module.exports.objects = {person,fruits}