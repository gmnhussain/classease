# ClassEase

`ClassEase` is a JavaScript utility for conditionally joining class names together. It provides a convenient way to generate class names based on various input types such as strings, objects, and arrays.

## Installation

Install `ClassEase` using [npm](https://www.npmjs.com/)

```bash
npm install classease
```

## API

`classEase(...input): String`

Returns a string of joined class names.

...input (Mixed): Accepts various input types, including strings, objects, arrays, etc.

## Usage

```python
import classEase from ('classease');
// or
import { classEase } from ('classease');

# Basic Examples
classEase('a'); // => 'a'
classEase('a', 'b'); // => 'a b'
classEase('a', true && 'b', 'c'); // => 'a b c'
classEase('a', true ? 'b' : 'c'); // => 'a b'

# Objects
classEase({ a: true, b: true }); // => 'a b'
classEase({ a: true }, { b: true }); // => 'a b'
classEase({ a: true, b: false, c: isTrue() }); // => 'a c'

# Arrays
classEase(['a', 'b', 'c']); // => "a b c"
classEase(['a', 0, false, 'b', true]); // => 'a b'
classEase(['a'], ['', 0, false, 'b'], [['c', [['d'], 'e']]]); // => 'a b c d e'

# Combinations
classEase('a', [1 && 'b', { c: false, d: null }, ['e', ['f']]], 'g'); // => 'a b e f g'
classEase('a', ['b', { c: true, d: false }]); // => 'a b c'
classEase('a', { b: true, c: false }, 'd', { e: true }); // => 'a b d e'

# More Examples
classEase({ 'a-b': true }); // => 'a-b'
classEase({ 'a-b': false }); // => ''
classEase('a', { b: false, c: true }); // => 'a c'
classEase(null, false, 'a', undefined, 0, 1, { b: null }, ''); // => 'a'
classEase(true, false, '', null, undefined, 0, NaN); // => ''
classEase(true, false, '', null, undefined, 0, NaN, 'a'); // => 'a'
classEase({ a: true }, { b: false }, null, { '--c': 'str' }); // => 'a --c'

# Dynamic class names
let x = 'b';
classEase({ [`a-${x}`]: true }); // => 'a-b'
```

## Features

- Supports strings, objects, arrays, and various input types.
- Handles dynamic class names with template literals.
- Supports both named and default imports for enhanced flexibility.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request.

## LICENSE [MIT](https://github.com/gmnhussain/classease/blob/HEAD/LICENSE)

This project is licensed under the MIT License - see the LICENSE file for details.
