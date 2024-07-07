# **Path Modifier**
---

*Path Modifier is a package utilizing and simplifying the functionalities of Node's built in path module.*

## Install the NPM Package:

---
    npm i mcrae-pm

## Require the Package into your Node.js file:

---
    const class = require ('mcrae-pm');

## Call class and add Path to be modified.

---
    const variable = new class ('Path');


1. ### The original path entered.

---
    variable.getPath ();


2. ### The root directory of the path.

---
    variable.getRoot ();

3. ### The name of the file in the path.

---
    variable.getName ();

4. ### The last part of the path.

---
    variable.getBase ();

5. ### The directory the path is in.

---
    variable.getDir ();

6. ### The extension for file in path.

---
    variable.getExt ();
