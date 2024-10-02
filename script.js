
//Javascript object notation
//Json is used to exchange data between a server and a web application
//JSON files {key:value} or array [value1,value2,value3]
// Json.stringify()= converts a JS object to a JSON string
//JSON.parse()= converts a JSON string to a jS object


// pulling our json in
// get fetches data from getJSON.php
//.then() handles the successful response, and you can log the received data.
// .catch() handles any errors that might occur during the request.

// const names = ["Meek","Mane","MeekMeek","Tameika"];


// const jsonString = JSON.stringify(names);

// console.log(names);
 


// const person = {
//     "name":"Meek",
//     "age":100,
//     "isEmployed": true,
//     "hobbies": ["singing","writing","playing the guitar","bike riding"]
// }
// const jsonString2 = JSON.stringify(person);
// console.log(jsonString2)

// const people = [{
//     "name":"Meek",
//     "age":100,
//     "isEmployed": true
    
// },
// {
//     "name":"Beyonce",
//     "age":43,
//     "isEmployed": true,
//     "hobbies": ["singing","writing","dancing","business"]
// },
// {
//     "name":"Oprah",
//     "age":60,
//     "isEmployed": true,
//     "hobbies": ["speaking","interviews","conversations","humanitarian"]
// },
// {
//     "name":"Nas",
//     "age":44,
//     "isEmployed": true,
//     "hobbies": ["rapping","writing","performing"]
// }
// ];

//  const jsonString3 = JSON.stringify(people);
//  console.log(jsonString3);

// const jsonNames = `["Meek","Mane","MeekMeek","Tameika"]`;

// const jsonPerson = `{"name":"Meek","age":100,"isEmployed": true,"hobbies": ["singing","writing","playing the guitar","bike riding"]}`;

// const jsonPeople = `[{  "name":"Meek","age":100, "isEmployed": true},
//                 {"name":"Beyonce","age":43, "isEmployed": true,"hobbies": ["singing","writing","dancing","business"]},
//                 {"name":"Oprah","age":60,"isEmployed": true, "hobbies": ["speaking","interviews","conversations","humanitarian"]},
//                 {"name":"Nas","age":44, "isEmployed": true, "hobbies": ["rapping","writing","performing"]}]`;

// parseData = JSON.parse(jsonNames);
// console.log(parseData);

fetch("names.json")
  .then(response => response.json())
  .then(values => values.forEach(value => console.log(value.name)))
  .catch(error => console.error('Error:', error));
