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
const additionalInfo = {
  email: "john.doe@example.com",
  occupation: "Software Engineer",
};
Object.assign(person, additionalInfo);
console.log("Merged Person:", person);
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

