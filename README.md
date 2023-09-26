# [UseBase: Encode and Decode Numbers](https://github.com/NaN-NaN-sempai)

![Unpacked Size: 10.6 kB](https://img.shields.io/badge/Unpacked_Size-10.6_kB-00FF00?style=for-the-badge&color=5599FF)

## Table of Content
- [Table of content](#table-of-content)
- [Features](#features)
- [Support](#support)
- [Installing](#installing)
  - [CDN](#cdn)
- [Example](#example)
  - [Base Array and Special Characters](#base-array-and-special-characters)
- [Errors](#errors)
- [Credits](#credits)

## Features
- By default, encode Integers into the alphabet + alphabet in uppercase
- Can use different bases
- Suport to encode and decode
- Suport encoding of strings and arrays

## Support

<div align="center">
    
[![ES6 Module](https://img.shields.io/badge/ES6-Module-F7DF1E?style=for-the-badge&logo=javascript&logoColor=F7DF1E&color=F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

</div>

## Installing
Run the npm installation on terminal:
```terminal

npm install usebase

```

Once the package is installed, you can import the library using import:

```javascript
import useBase from "usebase";

useBase().encode(42); // returns "Q"
```

If you are using `CommomJS`, there are some ways to import the module, one of them is using the import async function:

```javascript
// in your async function
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

Using the useBase function without parsing any param, it will use the default `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ` base.

```javascript
useBase().encode(42); // returns "Q"

useBase().decode("Q") // returns 42
```

You can use custom bases

```javascript
// using base2 (binary)
useBase("01").encode(42); // returns "101010" 

// using base8 (octal)
useBase("01234567").decode("52"); // returns 42
```

You can also save multiple instances and use them as you want

```javascript
const base2 = useBase("01"); // binary

const base8 = useBase("01234567"); // octal

const base10 = useBase("0123456789"); // decimal

const base16 = useBase("0123456789ABCDEF"); // hexadecimal

const baseLetters = useBase("abcdefghijklmnopqrstuvwxyz"); // alphabet

// this is the default base, same as useBase("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
const baseLettersAndUpperCase = useBase(); // alphabet and UpperCase alphabet
```

### Base Array and Special Characters

UseBase is also usable with arrays

```javascript
let myArray = "The answer to life the universe and everything is 42".split(" ");
const base42 = useBase(myArray); // base of hitchhiker's guide to the galaxy

let myEncode = base42.encode(42); // returns array (2) ['the', 'to']

let myDecode = base42.decode(myEncode); // returns 42
```

Some special character use more than one space per character inside a string so you can't use it as string nor split to use as an array.
We need a split it using another method then pass this new array to useBase

```javascript
// function to split special characters
const splitPlus = (string) => [...new Intl.Segmenter().segment(string)].map(x => x.segment);

let myArray = splitPlus("😀😁😂🤣😃😄😅😆😉😊😋😎😍😘🥰😗");
const base16AsEmoji = useBase(myArray); // Hexademojinal 🤣

base16AsEmoji.encode(42); // returns array (2) ['😂', '😋']

let myOtherArray = splitPlus("«»©®℗™×='‘’‚‛¬–÷—“”„‟⁄");
const baseSpecialChars = useBase(myArray); // Special characteres

baseSpecialChars.encode(42); // returns (2) ['»', '‟']
```

## Errors


List of error throws:
- ![Thrown Error](https://img.shields.io/badge/Thrown-Error-00FF00?style=for-the-badge&color=FF0000) - If useBase `base` param is given but its not a string or array: "Param 'base' must be of type String or Array".
- ![Thrown Error](https://img.shields.io/badge/Thrown-Error-00FF00?style=for-the-badge&color=FF0000) - If encode `integer` param is not given as a number: "Param 'number' must be of type Int".
- ![Thrown Error](https://img.shields.io/badge/Thrown-Error-00FF00?style=for-the-badge&color=FF0000) - If decode `value` param is not given as a string or array: "Param 'value' must be of type String or Array".


List of possible errors and cautions you need to take:
- ![Warn](https://img.shields.io/badge/warn-00FF00?style=for-the-badge&color=ffff00) - If useBase `base` param includes the same value 2 or more times: The result of encoding and decoding may be incorrect.
- ![Warn](https://img.shields.io/badge/warn-00FF00?style=for-the-badge&color=ffff00) - If encode `integer` param is given as a negative number: It will return `undefined` as useBase does not support negative values.
- ![Warn](https://img.shields.io/badge/warn-00FF00?style=for-the-badge&color=ffff00) - If decode `value` param is given as a string or array wich characters or values are not included in the `base`: The return number will be a mess and incorrect.
- ![Warn](https://img.shields.io/badge/warn-00FF00?style=for-the-badge&color=ffff00) - If decode `value` param is given as a string somehow too long: The return number will be `Infinity`.
- ![Error](https://img.shields.io/badge/error-00FF00?style=for-the-badge&color=FF0000) - If encode `integer` param is given as a number bigger than 1e+308: RangeError: Maximum call stack size exceeded.
- ![Error](https://img.shields.io/badge/error-00FF00?style=for-the-badge&color=FF0000) - If `base` is a array and encode `auxArray` param is not given as a array: TypeError: auxArray.push is not a function.
- ![Warn](https://img.shields.io/badge/warn-00FF00?style=for-the-badge&color=ffff00) - If encode `auxArray` param is given a value: If you don't understand what you are doing, it will probably not work as expected.

## Credits

Thanks to [this stack overflow question](https://stackoverflow.com/questions/1337419/how-do-you-convert-numbers-between-different-bases-in-javascript/77164426#77164426) i got the inspiration to create useBase.

I got the `splitPlus` function from [this stack overflow answer](https://stackoverflow.com/a/71619350/8639520).

To make this `README` i used as reference [Axio's `README`](https://www.npmjs.com/package/axios).





[Go back to top ↑](#usebase-by-luís-henrique-de-almeida)