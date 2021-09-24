# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mynpm1/lotide`

**Require it:**

`const _ = require('@mynpm1/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head([1, 2, 3]): returns 1 for [1, 2, 3]`
* `tail(['a','b','c']): returns b,c for ['a','b','c']`
* `middle([1, 2,3,4,5,6]): returns 3,4 for [1, 2,3,4,5,6]`
* `countLetters`
* `countOnly`
* `findKeyByValue`
* `findKey`
* `flatten`
* `letterPositions`
* `map`
* `takeUntil`
* `without`
