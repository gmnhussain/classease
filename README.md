# ClassEase

`ClassEase` is a JavaScript utility for conditionally joining class names together. It provides a convenient way to generate class names based on various input types such as strings, objects, and arrays.

## Installation

Install `ClassEase` using [npm](https://www.npmjs.com/)

```bash
npm install classease
```

## API

`classes(...input): String`

Returns a string of joined class names.

...input (Mixed): Accepts various input types, including strings, objects, arrays, etc.

## Usage

```python
import classes from ('classease');

# Basic Examples
classes('a'); // => 'a'
classes('a', 'b'); // => 'a b'
classes('a', true && 'b', 'c'); // => 'a b c'
classes('a', true ? 'b' : 'c'); // => 'a b'

# Objects
classes({ a: true, b: true }); // => 'a b'
classes({ a: true }, { b: true }); // => 'a b'
classes({ a: true, b: false, c: isTrue() }); // => 'a c'

# Arrays
classes(['a', 'b', 'c']); // => "a b c"
classes(['a', 0, false, 'b', true]); // => 'a b'
classes(['a'], ['', 0, false, 'b'], [['c', [['d'], 'e']]]); // => 'a b c d e'

# Combinations
classes('a', [1 && 'b', { c: false, d: null }, ['e', ['f']]], 'g'); // => 'a b e f g'
classes('a', ['b', { c: true, d: false }]); // => 'a b c'
classes('a', { b: true, c: false }, 'd', { e: true }); // => 'a b d e'

# More Examples
classes({ 'a-b': true }); // => 'a-b'
classes({ 'a-b': false }); // => ''
classes('a', { b: false, c: true }); // => 'a c'
classes(null, false, 'a', undefined, 0, 1, { b: null }, ''); // => 'a'
classes(true, false, '', null, undefined, 0, NaN); // => ''
classes(true, false, '', null, undefined, 0, NaN, 'a'); // => 'a'
classes({ a: true }, { b: false }, null, { '--c': 'str' }); // => 'a --c'

# Dynamic class names
let x = 'b';
classes({ [`a-${x}`]: true }); // => 'a-b'
```

## Features

- Supports strings, objects, arrays, and various input types.
- Handles dynamic class names with template literals.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request.

## LICENSE [MIT](https://github.com/gmnhussain/classease/blob/HEAD/LICENSE)

This project is licensed under the MIT License - see the LICENSE file for details.
