// Create an object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York",
};

// Object.keys: Get an array of all keys in the object
const keys = Object.keys(person);
console.log("Keys:", keys);

// Object.values: Get an array of all values in the object
const values = Object.values(person);
console.log("Values:", values);

// Object.entries: Get an array of key-value pairs as arrays
const entries = Object.entries(person);
console.log("Entries:", entries);

// Object.hasOwnProperty: Check if an object has a specific property
const hasFirstName = person.hasOwnProperty("firstName");
console.log("Has firstName:", hasFirstName);

// Object.assign: Create a new object by merging multiple objects
const additionInfo = {
  job: "Engineer",
  country: "USA",
};
const extendedPerson = Object.assign({}, person, additionInfo);
console.log("Extended Person:", extendedPerson);

// Object.getOwnPropertyDescriptor: Get property attributes, like configurable, enumerable, and value
const ageProperty = Object.getOwnPropertyDescriptor(person, "age");
console.log("Age Property Descriptor:", ageProperty);

// Object.getOwnPropertyNames: Get an array of all property names (including non-enumerable ones)
const allPropertyNames = Object.getOwnPropertyNames(person);
console.log("All Property Names:", allPropertyNames);

// Object.getOwnPropertyDescriptors: Get an object with property descriptors for all properties
const propertyDescriptors = Object.getOwnPropertyDescriptors(person);
console.log("Property Descriptors:", propertyDescriptors);

// Object.getPrototypeOf: Get the prototype of an object (for inheritance)
const prototype = Object.getPrototypeOf(person);
console.log("Prototype:", prototype);

// Object.setPrototypeOf: Set the prototype of an object (for inheritance)
const newPrototype = { nationality: "American" };
Object.setPrototypeOf(person, newPrototype);
console.log("Updated Prototype:", person);

// Object.keys with Object.getOwnPropertySymbols: Get all own enumerable property keys, including symbol keys
const symbolKey = Symbol("uniqueKey");
person[symbolKey] = "Symbol Value";
const allKeys = Object.keys(person);
console.log("All Keys (including Symbols):", allKeys);
