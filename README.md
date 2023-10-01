<div align="center">


<a href="https://github.com/NaN-NaN-sempai/useBase">
  <img title="UseBase Logo" alt="UseBase Logo" width="300px" src="https://raw.githubusercontent.com/NaN-NaN-sempai/useBase/main/logo.png" />
  
  # UseBase:<br>Encode and Decode Numbers
</a>

<br>
<br>

[![npm v9.6.7](https://img.shields.io/badge/npm-v9.6.7-00FF00?style=for-the-badge&logo=npm&color=CB3837)](https://www.npmjs.com/package/usebase)
![Unpacked Size: 17 kB](https://img.shields.io/badge/Unpacked_Size-17_kB-00FF00?style=for-the-badge&color=5599FF)
<br>
[![Github](https://img.shields.io/badge/github-00FF00?style=for-the-badge&logo=github&color=181717)](https://github.com/NaN-NaN-sempai/useBase)
[![Talk with me](https://img.shields.io/badge/talk_with_me-FFFF00?style=for-the-badge&logoColor=white&logo=whatsapp&color=25D366)](https://wa.me/5574981395580?text=I%20came%20from%20npm!)

</div>

## Table of Content
- [UseBase: Encode and Decode Numbers](#usebaseencode-and-decode-numbers)
- [Table of content](#table-of-content)
- [Features](#features)
- [Support](#support)
- [About](#about)
- [Installing](#installing)
  - [CDN](#cdn)
- [Example](#example)
  - [Using the Proto Properties](#using-the-proto-properties)
  - [Custom Bases](#custom-bases)
  - [Multiple Instances](#multiple-instances)
  - [Base as Array](#base-as-array)
  - [Special Characters](#special-characters)
- [Errors](#errors)
- [Credits](#credits)

## Features
- Encode Integers using a base.
- Suport to encode and decode.
- Flexible support for both strings and arrays as bases.
- Support for various bases, including binary, octal, hexadecimal, and custom character sets.

## Support
<div align="center">

[![ES6 Module](https://img.shields.io/badge/ES6-Module-F7DF1E?style=for-the-badge&logo=javascript&logoColor=F7DF1E&color=F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
![Node.js](https://img.shields.io/badge/node.js-FFFF00?style=for-the-badge&logoColor=white&logo=node.js&color=339933)

</div>

## About
[UseBase](https://github.com/NaN-NaN-sempai/useBase) is a versatile JavaScript library designed to simplify the process of encoding and decoding numbers using various numeral bases. Whether you need to represent integers in binary, hexadecimal, custom character sets, or even emojis.

About it's usage, `useBase` is a function that recieve a param `base` (optional), a string or array containing the base to be used, the default value is: `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`.

`useBase` returns a object with two functions `encode` and `decode`, and a read-only value `base`, containing the `base` used to create this instance.

 - `encode` recieve two params, `integer` the number to be encoded and `auxArray` (optional) the array that the function uses as auxiliary array to store the values when the `base` is a array (don't pass any value if you dont know what you are doing). It returns a string or array of the `integer` encoded, the returned value have two proto properties:
   - `raw` property containing the `integer` param used to encode this value.
   - `base` property containing the `base` used to create this `useBase` instance.

 - `decode` recieve one param, `value` a encoded string or array. It returns a decode number, the returned value have a proto value:
   - `base` property containing the `base` used to create this `useBase` instance.


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
There is a simple example of usage:

```javascript
useBase().encode(42); // returns "Q"

useBase().decode("Q"); // returns 42
```

### Using the Proto Properties
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

Using the `raw` proto property from the `enconde` returned value, you can easily translate the value from a base to another:

```javascript
let valueInBinary = useBase.binary.encode(42); // "101010"

let valueInOctal = useBase.octal.encode(valueInBinary.raw); // "52"
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
import useBase from "usebase";
const { base2, base8, base12, base16, base32, base34, base62, base64 } = useBase;

// or with custom bases

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
- ![Warn](https://img.shields.io/badge/warn-00FF00?style=for-the-badge&color=ffff00) - If any value is assigned to any of the proto properties: The proto properties are read-only.

## Credits
Thanks to [this stack overflow question](https://stackoverflow.com/questions/1337419/how-do-you-convert-numbers-between-different-bases-in-javascript/77164426#77164426) i got the inspiration to create useBase.

I got the `splitPlus` function from [rootEnginear in this stack overflow answer](https://stackoverflow.com/a/71619350/8639520).

To make this `README` i used as reference [Axio's `README`](https://www.npmjs.com/package/axios).





[Go back to top ↑](#usebaseencode-and-decode-numbers)
