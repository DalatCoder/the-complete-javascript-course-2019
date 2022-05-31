# The Complete Javascript Course 2022 - From Zero to Expert!

Jonas Udemy - Update 2022

## 1. Javascript Fundamentals - Part 1

Learning the very basic of the `js` language

- Variables
- Data types
- Operators
- If/else statement
- ...

### 1.1. `Hello World!`

```js
console.log('Hello World');
```

### 1.2. A brief introduction to JavaScript

What is JavaScript?

> Javascript is a high-level object-oriented, multi-paradigm programming language

- Programming language: instruct computer to do things
- High-level: we don't have to worry about complex stuff like memory management
- Object-oriented: based on objects, for storing most kinds of data
- Multi-paradigm: we can use different styles of programming, such as `imperative` and `declarative`

![Image](md_assets/role.png)

There is nothing you can't do with JS (well almost ...)

- Dynamic effects and web applications in the browser: `react`, `angular`, `vue`,... (`front-end apps`)
- Web applications on web server: `nodejs` (`back-end apps`)
- Native mobile applications: `react native`, `ionic`
- Native desktop applications: `electron`

### 1.3. Values and Variables

A `value` is basically a `piece of data`

```js
console.log('jonas');
console.log(22);
console.log(true);
```

A `value` can be stored in a `variable`

```js
let firstName = 'jonas';

console.log(firstName);
console.log('Hello ' + firstName);
```

Some `conventions` and `rules` for naming `variable`

- camelCase
- can not start with a `number`
- reserved keyword in `js`
- uppercase variable for `constant`
- variable name must be descriptive

### 1.4. Data types

![Image](md_assets/object.png)

The 7 primitive data types

![Image](md_assets/primitive.png)

### 1.5. Declare variables

Using `let` for declaring a variable that can be changed later. In the below
example, we `reassign` value to the existing `variable`, or we `mutate` the
`variable`

```js
let age = 30;
age = 31;

console.log(age);
```

Using `const` for declaring variable that are not supposed to change at any
point in the future. Or we declare an `immutable` `variable`

```js
const PI = 3.14;
console.log(PI);
```

Always recommend to use `const` by default and `let` only when you are
really sure that the `variable` needs to change at some point
in the future

`var` is the old way of defining variables, prior to `ES6`

### 1.6. Basic Operators

> An operator basically allows us to transform values or combine multiple values,
> and really do all kinds of work with values

- Mathematical operators: `+`, `-`, `*`, `/`, `**`
- Comparision operators: `>`, `<`, `==`, `===`, `>=`, `<=`
- Logical operators
- Assignment operators: `=`, `+=`, `-=`, `*=`, `/=`, `++`, `--`
- ...

Operator precedence

### 1.7. Strings and template literals

With template literals, we can write string in a more normal way,
and then basically insert the variables directly into the string and then
they will simply be replaced

So basically a template literal can assemble multiple pieces into one final
string

```js
const firstName = 'hieu';
console.log(`Hello ${firstName}`);
```

Useful in building multiple line string

```js
const s1 =
  'String with \n\
multiple \n\
lines';

const s2 = `String with
multiple
lines`;
```
