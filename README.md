# [UseBase: Encode and Decode Numbers](https://github.com/NaN-NaN-sempai/useBase)


<div align="center">

![Unpacked Size: 11 kB](https://img.shields.io/badge/Unpacked_Size-11_kB-00FF00?style=for-the-badge&color=5599FF)

</div>

## Table of Content
- [Table of content](#table-of-content)
- [Features](#features)
- [Support](#support)
- [Installing](#installing)
  - [CDN](#cdn)
- [Example](#example)
  - [Using the proto Properties](#using-the-proto-properties)
  - [Custom Bases](#custom-bases)
  - [Multiple Instances](#multiple-instances)
  - [Base as Array](#base-as-array)
  - [Special Characters](#special-characters)
- [Errors](#errors)
- [Credits](#credits)

## Features
- Encode Integers using a base.
- Suport to encode and decode.
- Can use different bases.
- Suport encoding and decoding of strings and arrays.

## Support

<div align="center">
    
[![ES6 Module](https://img.shields.io/badge/ES6-Module-F7DF1E?style=for-the-badge&logo=javascript&logoColor=F7DF1E&color=F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

</div>

## Installing
Install the package using npm:
```css
npm install usebase
```

Once the package is installed, you can import useBase to your project:

```javascript
import useBase from "usebase";

useBase().encode(42); // returns "Q"
```

If you are using `CommomJS`, there are some ways to import the module, one of them is using the import async function:

```javascript
import("usebase").then(({ default: useBase }) => {
    useBase().encode(42); // returns "Q"
});

// or in your async function
const { default: useBase } = await import("usebase");

useBase().encode(42); // returns "Q"
```

### CDN
Using jsDelivr CDN (browser module):
```html

<script src="https://cdn.jsdelivr.net/npm/usebase@latest/index.js"></script>

```

Using unpkg CDN:
```html

<script src="https://unpkg.com/usebase@latest/index.js"></script>

```


## Example

`useBase` is a function that recieve a param `data` (optional), a string or array containing the base to be used, the default value is: `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`.

`useBase` returns a object with two functions `encode`, `decode` and `base` a non wiritable value containing the `base` used to create this instance.

 - `encode` recieve two params, `integer` the number to be encoded and `auxArray` (optional) the array that the function uses as auxiliary array to store the values when the `base` is a array (don't pass any value if you dont know what you are doing). It returns a string or array of the `integer` encoded, the returned value have two proto values:
   - `raw` property containing the `integer` param.
   - `base` property containing the `base` used to create this instance.

 - `decode` recieve one param, `value` a encoded string or array. It returns a decode number, the returned value have a proto value:
   - `base` property containing the `base` used to create this instance.

There is a simple example of usage:

```javascript
useBase().encode(42); // returns "Q"

useBase().decode("Q") // returns 42
```


### Using the proto Properties

The `useBase` function have some proto properties containing some built-in bases: 

```javascript
useBase.base2; /* or */ useBase.binary;

useBase.base5; /* or */ useBase.quinary;

useBase.base8; /* or */ useBase.octal;

useBase.base12; /* or */ useBase.duodecimal;

useBase.base16; /* or */ useBase.hexadecimal;

useBase.base32;

useBase.base34;

useBase.base62;

useBase.base64;

// usage example:
useBase.binary.encode(42); // returns "101010"

useBase.octal.decode("52"); // returns 42
```

using the `raw` proto property from the `enconde` returned value, you can easily translate the value from a base to another:

```javascript
let valueInBinary = useBase.binary.encode(42); // "101010"

let valueInOctal = useBase.octal.encode(valueInBinary.raw); // 52
```

### Custom Bases

Using custom bases:

```javascript
// using a custom base2 (binary)
useBase("01").encode(42); // returns "101010" 

// using a custom base8 (octal)
useBase("01234567").decode("52"); // returns 42

// using a custom base
useBase("MYBASE").encode(42); // returns "YYM"
```

### Multiple Instances

You can also save multiple instances and use them as you want:

```javascript
const base2 = useBase("01"); // binary

const base8 = useBase("01234567"); // octal

const base10 = useBase("0123456789"); // decimal

const base16 = useBase("0123456789ABCDEF"); // hexadecimal

const baseLetters = useBase("abcdefghijklmnopqrstuvwxyz"); // alphabet

const baseLettersAndUpperCase = useBase(); // alphabet and UpperCase alphabet
```

### Base as Array

Using arrays:

```javascript
let myArray = "The answer to life, the universe and everything is 42".split(" ");
const base42 = useBase(myArray); // base of hitchhiker's guide to the galaxy

let myEncode = base42.encode(42); // returns array (2) ['the', 'to']

let myDecode = base42.decode(myEncode); // returns 42
```

### Special Characters

Some special character use more than one space per character inside a string so you can't use it as string nor split to use as an array.
We need to split it using another method and pass this new array to useBase

```javascript
// function to split special characters
const splitPlus = (string) => [...new Intl.Segmenter().segment(string)].map(x => x.segment);

let myArray = splitPlus("«»©®℗™×='‘’‚‛¬–÷—“”„‟⁄");
const baseSpecialChars = useBase(myArray); // Special characteres

baseSpecialChars.encode(42); // returns (2) ['»', '‟']

let myOtherArray = splitPlus("😀😁😂🤣😃😄😅😆😉😊😋😎😍😘🥰😗");
const base16AsEmoji = useBase(myOtherArray); // Hexademojinal 🤣

base16AsEmoji.encode(42); // returns array (2) ['😂', '😋']
```

## Errors


List of error throws:
- ![Thrown Error](https://img.shields.io/badge/Thrown-Error-00FF00?style=for-the-badge&color=FF0000) - If useBase `base` param is given but its not a string or array: "Param 'base' must be of type String or Array".
- ![Thrown Error](https://img.shields.io/badge/Thrown-Error-00FF00?style=for-the-badge&color=FF0000) - If encode `integer` param is not given as a number: "Param 'number' must be of type Int".
- ![Thrown Error](https://img.shields.io/badge/Thrown-Error-00FF00?style=for-the-badge&color=FF0000) - If encode `auxArray` param is given but it is not an array: "Param 'auxArray' must be an array".
- ![Thrown Error](https://img.shields.io/badge/Thrown-Error-00FF00?style=for-the-badge&color=FF0000) - If decode `value` param is not given as a string or array: "Param 'value' must be of type String or Array".


List of possible errors and cautions you need to take:
- ![Warn](https://img.shields.io/badge/warn-00FF00?style=for-the-badge&color=ffff00) - If useBase `base` param includes the same value 2 or more times: The result of encoding and decoding may be incorrect.
- ![Warn](https://img.shields.io/badge/warn-00FF00?style=for-the-badge&color=ffff00) - If encode `integer` param is given as a negative number: It will return `undefined` as useBase does not support negative values.
- ![Error](https://img.shields.io/badge/error-00FF00?style=for-the-badge&color=FF0000) - If encode `integer` param is given as a number bigger than 1e+308: RangeError: Maximum call stack size exceeded.
- ![Warn](https://img.shields.io/badge/warn-00FF00?style=for-the-badge&color=ffff00) - If decode `value` param is given as a string or array wich characters or values are not included in the `base`: The return number will be a mess and incorrect.
- ![Warn](https://img.shields.io/badge/warn-00FF00?style=for-the-badge&color=ffff00) - If decode `value` param is given as a string somehow is too complex or too long: The return number will be `Infinity`.
- ![Warn](https://img.shields.io/badge/warn-00FF00?style=for-the-badge&color=ffff00) - If encode `auxArray` param is given a value: If you don't understand what you are doing, it will probably not work as expected.

## Credits

Thanks to [this stack overflow question](https://stackoverflow.com/questions/1337419/how-do-you-convert-numbers-between-different-bases-in-javascript/77164426#77164426) i got the inspiration to create useBase.

I got the `splitPlus` function from [rootEnginear in this stack overflow answer](https://stackoverflow.com/a/71619350/8639520).

To make this `README` i used as reference [Axio's `README`](https://www.npmjs.com/package/axios).





[Go back to top ↑](#usebase-encode-and-decode-numbers)