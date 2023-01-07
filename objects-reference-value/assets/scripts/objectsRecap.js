const movieList = document.getElementById('movie-list');

movieList.style.backgroundColor = 'red';
// // the same as above
// movieList.style['backgroundColor'] = 'red';
// // can access normal css
// movieList.style['background-color'] = 'red';
movieList.style.display = 'block';

// @dynamically set properties
const userChosenKeyName = 'level';

let person = {
  // tell js this is a key if you need space or what ever
  'first name': 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  // access user input
  [userChosenKeyName]: '',
  greet: function () {
    alert('Hi There!');
  },
  // keys can be numbers must be postive
  1.5: 'number key',
};

delete person.age;
person.isAdmin = true;

console.log(person.age);
// ^ to access first name
console.log(person['first name']);
// to access the number key use this
console.log(person[1.5]);

// null mean reset
// undefined means not initialized

// @neat trick
const keyName = 'first name';
console.log(person[keyName]);
