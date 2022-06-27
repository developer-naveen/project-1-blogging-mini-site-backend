# data-validator-js


Javascript validations and utility library

Install
----
     npm install --save-dev data-validator-js
Usage
----

## Table of Contents

* [Installation and setup](#installation)
    - [Using npm](#installation)
    - [Setup in TS](#setup)
* [Usage](#usage)
    * [String Utilities](#stringutilities)
        + [IsNullOrEmpty(value: string | null | undefined)](#isnullorempty)
        + [IsValidEmail(value: string | null | undefined)](#isvalidemail)
        + [IsValidString(value: string | null | undefined)](#isvalidstring)
        + [IsValidPhoneNumber(value: string)](#isvalidphonenumber)
        + [IsValidNumber(value: string)](#isvalidnumber)
        + [IsValidAlphaNumeric(value: string)](#isvalidalphanumeric)
        + [IsValidAlphaNumericWithSpecialChars(value: string)](#isvalidalphanumericwithspecialchars)
    * [Script Utilities](#scriptutils)
        + [IsNullOrUndefined(obj: object| null| undefined)](#isnullorundefined)
        + [IsMacMachine](#ismacmachine)
        + [getNumericValue(value: string, radix : number = 10)](#getnumericvalue)
    * [Converter Utilities](#converterutils)
        + [ConvertToCapitals(value: string)](#converttocapitals)
        + [ConvertToLowerCase(value: string)](#converttolowercase)
        + [ConvertToCamelCase(value: string)](#converttocamelcase)
        + [ConvertToString(value: number | string | object | null | undefined)](#converttostring)
        + [ConvertToNumber(value: string)](#converttonumber)
        + [ConvertToTitleCase(value: string)](#converttotitlecase)
        + [ConvertToLowerCamelCase(value: string)](#converttolowercamelcase)
        + [ConvertToSnakeCase(value: string)](#converttosnakecase)
        + [ConvertToRandomCase(value: string)](#converttorandomcase)
        + [ConvertToToggleCase(value: string)](#converttotogglecase)
        + [ConvertToSentenceCase(value: string)](#converttosentencecase)


## Installation

```
npm install --save-dev data-validator-js
```

## Setup

``` javascript

import { StringUtilities } from "data-validator-js";

```
"StringUtilities" has all the validation methods

## IsNullOrEmpty

### IsNullOrEmpty(value: string | null | undefined): boolean

```javascript

import { StringUtilities } from "data-validator-js";

let isValidString = StringUtilities.IsNullOrEmpty('test string') // false
isValidString = StringUtilities.IsNullOrEmpty('123') // false
isValidString = StringUtilities.IsNullOrEmpty('') // true
isValidString = StringUtilities.IsNullOrEmpty(' ') // true
isValidString = StringUtilities.IsNullOrEmpty(null) // true

```

## IsValidEmail

### IsValidEmail(value: string | null | undefined): boolean 

```javascript

import { StringUtilities } from "data-validator-js";
// isValidEmail Validates the given value is valid email format or not 
let isValidEmail = StringUtilities.IsValidEmail('test string') // false
isValidEmail = StringUtilities.IsValidEmail('123') // false
isValidEmail = StringUtilities.IsValidEmail('') // false
isValidEmail = StringUtilities.IsValidEmail('xyz123@gmail.com') // true
isValidEmail = StringUtilities.IsValidEmail('xyz@xyx.abc') // true

```

## IsValidString

### IsValidString(value: string | null | undefined): boolean

```javascript

import { StringUtilities } from "data-validator-js";
// isValidEmail Validates the given value is valid email format or not 
let isValid = StringUtilities.IsValidString('test string') // true
isValid = StringUtilities.IsValidString('123') // false
isValid = StringUtilities.IsValidString('') // false
isValid = StringUtilities.IsValidString('xyz123@gmail.com') // false
isValid = StringUtilities.IsValidString('xyz@xyx.abc') // false

```

## IsValidPhoneNumber

### IsValidPhoneNumber(value: string): boolean

```javascript

import { StringUtilities } from "data-validator-js";
// isValidEmail Validates the given value is valid email format or not 
let isValidPhoneNumber = StringUtilities.IsValidPhoneNumber('test') // false
isValidPhoneNumber = StringUtilities.IsValidPhoneNumber('123') // false
isValidPhoneNumber = StringUtilities.IsValidPhoneNumber('1234567890') // true
isValidPhoneNumber = StringUtilities.IsValidPhoneNumber('') // false
isValidPhoneNumber = StringUtilities.IsValidPhoneNumber(null) // false

```

## IsValidNumber

### IsValidNumber(value: string): boolean

```javascript

import { StringUtilities } from "data-validator-js";
// isValidEmail Validates the given value is valid email format or not 
let isValid = StringUtilities.IsValidNumber('test') // false
isValid = StringUtilities.IsValidNumber('123') // true
isValid = StringUtilities.IsValidNumber(1235) // true
isValid = StringUtilities.IsValidNumber('ee1234567890') // false
isValid = StringUtilities.IsValidNumber('') // false
isValid = StringUtilities.IsValidNumber(null) // false

```

#IsValidAlphaNumeric

### IsValidAlphaNumeric(value : string): boolean

```javascript

import { StringUtilities } from "data-validator-js";
// isValidEmail Validates the given value is valid email format or not 
let isValid = StringUtilities.IsValidAlphaNumeric('test') // false
isValid = StringUtilities.IsValidAlphaNumeric('12rf3') // true
isValid = StringUtilities.IsValidAlphaNumeric('4545kk') // true
isValid = StringUtilities.IsValidAlphaNumeric('ee1234567890') // true
isValid = StringUtilities.IsValidAlphaNumeric('') // false
isValid = StringUtilities.IsValidAlphaNumeric(null) // false

```
## IsValidAlphaNumericWithSpecialChars

### IsValidAlphaNumericWithSpecialChars(value: string): boolean

```javascript

import { StringUtilities } from "data-validator-js";
// isValidEmail Validates the given value is valid email format or not 
let isValid = StringUtilities.IsValidAlphaNumericWithSpecialChars('test') // false
isValid = StringUtilities.IsValidAlphaNumericWithSpecialChars('12rf3') // false
isValid = StringUtilities.IsValidAlphaNumericWithSpecialChars('4545kk*&') // true
isValid = StringUtilities.IsValidAlphaNumericWithSpecialChars('ee12345$%^6789*0') // true
isValid = StringUtilities.IsValidAlphaNumericWithSpecialChars('3454546') // false
isValid = StringUtilities.IsValidAlphaNumericWithSpecialChars(null) // false

```

## IsNullOrUndefined

### IsNullOrUndefined(obj: object| null| undefined): boolean

```javascript
import { ScriptUtilities } from "data-validator-js";
//IsNullOrUndefined checks the obj is null or undefined 
let IsValid = ScriptUtilities.IsNullOrUndefined(null) //true
IsValid = ScriptUtilities.IsNullOrUndefined(undefined) //true
IsValid = ScriptUtilities.IsNullOrUndefined({}) //false
IsValid = ScriptUtilities.IsNullOrUndefined({sdsgf:[]}) //false

```

## IsMacMachine

### IsMacMachine(): boolean

```javascript

import { ScriptUtilities } from "data-validator-js";
//IsMacMachine checks the machine, returns true if its a mac machine
let IsValid = ScriptUtilities.IsMacMachine() // if its a mac machine returns true.

```

## getNumericValue
### getNumericValue(value: string, radix : number = 10): number| null

```javascript

import { ScriptUtilities } from "data-validator-js";
//getNumericValue checks and returns a numeric value
let IsValid = ScriptUtilities.getNumericValue('vish') //NaN
IsValid = ScriptUtilities.getNumericValue('123') //123

```

## ConvertToCapitals

### ConvertToCapitals(value: string): string

```javascript

import { ConverterUtils } from "data-validator-js";
// ConvertToCapitals Converts the given value to UpperCase letters
let Converter = ConverterUtils.ConvertToCapitals('test') // TEST

```
## ConvertToLowerCase

### ConvertToLowerCase(value: string): string

```javascript

import { ConverterUtils } from "data-validator-js";
// ConvertToLowerCase Converts the given value to LowerCase letters
let Converter = ConverterUtils.ConvertToLowerCase('TEST')// test

```

## ConvertToCamelCase

### ConvertToCamelCase(value: string): string

```javascript

import { ConverterUtils } from "data-validator-js";
// ConvertToCamelCase Converts the given value to CamelCase
let Converter = ConverterUtils.ConvertToCamelCase('test case') // TestCase

```

## ConvertToString

### ConvertToString(value: number | string | object | null | undefined): string

```javascript

import { ConverterUtils } from "data-validator-js";
// ConvertToString Converts the given value to String
let Converter = ConverterUtils.ConvertToString(123) //123
Converter = ConverterUtils.ConvertToString('test') //test
Converter = ConverterUtils.ConvertToString(null) //null
Converter = ConverterUtils.ConvertToString(undefined) //undefined

```
## ConvertToNumber

### ConvertToNumber(value: string): string

```javascript

import { ConverterUtils } from "data-validator-js";
// ConvertToNumber checks the given value is a number or not
let Converter = Converter.ConvertToNumber("123") //123
Converter = Converter.ConvertToNumber("hello") //NaN

```

## ConvertToTitleCase

### ConvertToTitleCase(value: string): string

```javascript

import { ConverterUtils } from "data-validator-js";
//ConvertToTitleCase Converts the given value into TitleCase
let Converter = Converter.ConvertToTitleCase('hai hELlo') //Hai Hello

```

## ConvertToLowerCamelCase

### ConvertToLowerCamelCase(value: string): string

```javascript

import { ConverterUtils } from "data-validator-js";
// ConvertToLowerCamelCase Converts the given value into LowerCamelCase
let Converter = Converter.ConvertToLowerCamelCase('Hai HeLlo')// haihello

```

## ConvertToSnakeCase

### ConvertToSnakeCase(value: string): string

```javascript

import { ConverterUtils } from "data-validator-js";
//ConvertToSnakeCase Converts the given value into SnakeCase
let Converter = Converter.ConvertToSnakeCase('hello how are you')//hello_how_are_you

```

## ConvertToRandomCase

### ConvertToRandomCase(value: string): string

```javascript

import { ConverterUtils } from "data-validator-js";
//ConvertToRandomCase Converts the given value into a random value
let Converter = Converter.ConvertToRandomCase('hello')// changes randomly

```
## ConvertToToggleCase

### ConvertToToggleCase(value: string): string

```javascript

import { ConverterUtils } from "data-validator-js";
//ConvertToToggleCase Converts the given value to ToggleCase
let Converter = Converter.ConvertToToggleCase('tEsT')// TeSt

```
## ConvertToSentenceCase

### ConvertToSentenceCase(value: string): string

```javascript

import { ConverterUtils } from "data-validator-js";
//ConvertToSentenceCase converts the given value to SentenceCase
let Converter = Converter.ConvertToSentenceCase('hello Test How are you')//Hello test how are you

```