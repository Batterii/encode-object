# @batterii/encode-object
This module contains utility functions for encoding and decoding
JSON-serializable objects from [base64url][1], allowing them to be safely sent
as HTTP headers and URI components.

Note that while encoded objects are not typically human-readable, that does not
mean they are encrypted or signed in any way. Reading the data from them is as
simple as reversing the encoding process, and tampering with them is as simple
as repeating it with different data.

To produce signed tokens, which prevent tampering, use [@batterii/tokengrip][2]
instead.


## Usage
```js
import { decodeObject, encodeObject } from '@batterii/encode-object';

const str = encodeObject({ foo: 'bar' } );

console.log(str);
// eyJmb28iOiJiYXIifQ

const obj = decodeObject(str);

console.log(obj);
// { foo: 'bar' }
```

In addition to plain objects and arrays, top-level JSON primitives are also
supported:

```js
console.log(decodeObject(encodeObject('some string')));
// some string

console.log(decodeObject(encodeObject(true)));
// true

console.log(decodeObject(encodeObject(false)));
// false

console.log(decodeObject(encodeObject(null)));
// null
```


## Error Handling
This package uses [Nani][3] to define the following error classes:

- `EncodeObjectError`: This is the base class for all other errors in
  the package, for namespacing purposes.

- `InvalidJsonError`: Will be thrown if encoded text contaning invalid JSON is
  sent to `decodeObject`.


[1]: https://base64.guru/standards/base64url
[2]: https://www.npmjs.com/package/@batterii/tokengrip
[3]: https://www.npmjs.com/package/nani
