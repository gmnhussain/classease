const clx = require('../index');

const classes = (...arg) => {
  console.log(clx(...arg));
};

const isTrue = () => true;
const condition = true;

// Basic Examples
classes('a'); // => 'a'
classes('a', 'b'); // => 'a b'
classes('a', true && 'b', 'c'); // => 'a b c'
classes('a', condition ? 'b' : 'c'); // => 'a b'

// Objects
classes({ a: true, b: true }); // => 'a b'
classes({ a: true }, { b: true }); // => 'a b'
classes({ a: true, b: false, c: isTrue() }); // => 'a c'

// Arrays
// classes(['a', 'b', 'c']); // => "a b c"
// classes(['a', 0, false, 'b', true]); // => 'a b'
// classes(['a'], ['', 0, false, 'b'], [['c', [['d'], 'e']]]); // => 'a b c d e'

// Combinations
// classes('a', [1 && 'b', { c: false, d: null }, ['e', ['f']]], 'g'); // => 'a b e f g'
// classes('a', ['b', { c: true, d: false }]); // => 'a b c'
// classes('a', { b: true, c: false }, 'd', { e: true }); // => 'a b d e'

// More Examples
// classes({ 'a-b': true }); // => 'a-b'
// classes({ 'a-b': false }); // => ''
// classes('a', { b: false, c: true }); // => 'a c'
// classes(null, false, 'a', undefined, 0, 1, { b: null }, ''); // => 'a'
// classes(true, false, '', null, undefined, 0, NaN); // => ''
// classes(true, false, '', null, undefined, 0, NaN, 'a'); // => 'a'
// classes({ a: true }, { b: false }, null, { '--c': 'str' }); // => 'a --c'

// Dynamic class names
// let x = 'b';
// let obj = { a: 'x', b: 'y' };
// classes({ [`a-${x}`]: true }); // => 'a-b'
// classes({ [obj.a]: true }, { [obj.b]: true }); // => 'x y'
