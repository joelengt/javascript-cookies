
/* JavaScript cookies */
// https://github.com/js-cookie/js-cookie
console.log('Data info!')

// Get all the cookies
Cookies.get(); // => { name: 'value' }

// Get cookies
Cookies.get('name'); // => 'value'
Cookies.get('nothing'); // => undefined

// Set cookies
Cookies.set('name', 'value');
Cookies.set('name', 'value', { expires: 7 });
Cookies.set('name', 'value', { expires: 7, path: '' });

// Delete cookies
Cookies.remove('name');

/* If you want to delete a cookie with a path, yoy need to pass the path to be specific */
Cookies.set('name', 'value', { path: '' });
Cookies.remove('name'); // fail!
Cookies.remove('name', { path: '' }); // removed!


/* JSON */

// CREATE JSON
let objJSON = { name: 'joel', lastName: 'gonzales' } // set the obj json
let objJSONStringify = JSON.stringify(objJSON) // make the obj into a string
Cookies.set('human', objJSONStringify); // Set the cookie as a string

// READ JSON
Cookies.getJSON('human', objJSONStringify) // Read the cookie and get the JSON (JSON.parse)


/* Evaluate if a cookie exists */
if (Cookies.get('nothing') === undefined) {
	let data = 'info Here something special'
	Cookies.set('nothing', data);
}
