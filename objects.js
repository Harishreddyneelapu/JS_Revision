const personLiteral = {
    name: "Alice",
    age: 30,
    greet: function() {
      console.log("Hello, my name is " + this.name);
    }
  };
  
  console.log(personLiteral.name);
  personLiteral.greet();
  
  const personConstructor = new Object();
  personConstructor.name = "Bob";
  personConstructor.age = 25;
  personConstructor.greet = function() {
    console.log("Hello, my name is " + this.name);
  };
  
  console.log(personConstructor.name);
  personConstructor.greet();
  
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
      console.log("Hello, my name is " + this.name);
    };
  }
  
  const person1 = new Person("Charlie", 35);
  const person2 = new Person("Dave", 40);
  
  console.log(person1.name);
  person1.greet();
  
  console.log(person2.name);
  person2.greet();
  
  const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
  };
  
  console.log(car.make);
  console.log(car["model"]);
  
  car.year = 2021;
  car["make"] = "Honda";
  
  console.log(car.year);
  console.log(car["make"]);
  
  const calculator = {
    add: function(a, b) {
      return a + b;
    },
    subtract: function(a, b) {
      return a - b;
    }
  };
  
  console.log(calculator.add(5, 3));
  console.log(calculator.subtract(5, 3));
  
  const personWithThis = {
    name: "Eve",
    greet: function() {
      console.log("Hello, my name is " + this.name);
    }
  };
  
  personWithThis.greet();
  
  const personMethods = {
    name: "Alice",
    age: 30
  };
  
  console.log(Object.keys(personMethods));
  console.log(Object.values(personMethods));
  console.log(Object.entries(personMethods));
  
  function PersonProto(name, age) {
    this.name = name;
    this.age = age;
  }
  
  PersonProto.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
  };
  
  const personProto1 = new PersonProto("Alice", 30);
  const personProto2 = new PersonProto("Bob", 25);
  
  personProto1.greet();
  personProto2.greet();
  
  class PersonClass {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log("Hello, my name is " + this.name);
    }
  }
  
  const personClass1 = new PersonClass("Alice", 30);
  const personClass2 = new PersonClass("Bob", 25);
  
  personClass1.greet();
  personClass2.greet();
  