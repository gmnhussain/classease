const ce = require('../index');
// const { classEase: ce } = require('../index');

const classEase = (...arg) => {
  console.log(ce(...arg));
};

const isTrue = () => true;
const condition = true;

// Basic Examples
classEase('a'); // => 'a'
classEase('a', 'b'); // => 'a b'
classEase('a', true && 'b', 'c'); // => 'a b c'
classEase('a', condition ? 'b' : 'c'); // => 'a b'

// Objects
classEase({ a: true, b: true }); // => 'a b'
classEase({ a: true }, { b: true }); // => 'a b'
classEase({ a: true, b: false, c: isTrue() }); // => 'a c'

// Arrays
// classEase(['a', 'b', 'c']); // => "a b c"
// classEase(['a', 0, false, 'b', true]); // => 'a b'
// classEase(['a'], ['', 0, false, 'b'], [['c', [['d'], 'e']]]); // => 'a b c d e'

// Combinations
// classEase('a', [1 && 'b', { c: false, d: null }, ['e', ['f']]], 'g'); // => 'a b e f g'
// classEase('a', ['b', { c: true, d: false }]); // => 'a b c'
// classEase('a', { b: true, c: false }, 'd', { e: true }); // => 'a b d e'

// More Examples
// classEase({ 'a-b': true }); // => 'a-b'
// classEase({ 'a-b': false }); // => ''
// classEase('a', { b: false, c: true }); // => 'a c'
// classEase(null, false, 'a', undefined, 0, 1, { b: null }, ''); // => 'a'
// classEase(true, false, '', null, undefined, 0, NaN); // => ''
// classEase(true, false, '', null, undefined, 0, NaN, 'a'); // => 'a'
// classEase({ a: true }, { b: false }, null, { '--c': 'str' }); // => 'a --c'

// Dynamic class names
// let x = 'b';
// let obj = { a: 'x', b: 'y' };
// classEase({ [`a-${x}`]: true }); // => 'a-b'
// classEase({ [obj.a]: true }, { [obj.b]: true }); // => 'x y'
