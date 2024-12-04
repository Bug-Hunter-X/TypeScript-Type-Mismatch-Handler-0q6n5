function greeter(person: string) {
  return "Hello, " + person;
}

function greeterArray(persons: string[]) {
  return persons.map(person => "Hello, " + person);
}

let user = ["Jane", "Doe"];

console.log(greeterArray(user)); // Correct: Returns an array of greetings