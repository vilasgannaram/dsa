const person = {
	firstName: 'Bruce',
	lastName: 'Wayne',
};

// OBJECT
//  An object is a collection of key value pairs
console.log(person);

// There are two methods to retrive data from an object, they are String and Dot notations:
console.log(person['firstName']);
console.log(person.lastName);

// INSERT O(1)
console.log((person.heroName = 'batman'));
console.log(person);

// REMOVE O(1)
console.log(delete person.heroName);
console.log(person);

// SEARCH O(1)
console.log(person.hasOwnProperty('firstName'));
console.log('lastName' in person);
console.log(person.firstName !== undefined);

// ACCESS (1)
console.log(person.lastName);

//
// KEYS O(n)
console.log(Object.keys(person));

// VALUES O(n)
console.log(Object.values(person));

// ENTRIES O(n)
console.log(Object.entries(person));
