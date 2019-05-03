/**
 * Suppose that you're working in a small town administration, and you're in charge of two town elements:
 * 1. Parks
 * 2. Streets
 * 
 * It's a very small town, so right now there are only 3 parks and 4 streets have a name and a build year.
 * 
 * At an end-of-year meeting, your boss wantsa final report with the following:
 * 1. Tree density of each park in the twon (formula: number of trees/park area)
 * 2. Average age of each town's park (formula: sum of all ages/number of parks)
 * 3. The name of the park that has more than 1000 trees
 * 4. Total and average length of the town's streets
 * 5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
 * 
 * All the report data should be printed to the console.
 * 
 * HINT: Use some of the ES6 feature: classes, subclasses, template strings, default parameters,maps, arrow functions, destructuring, etc.
 */

class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, area, numTrees) {
    super(name, buildYear);
    this.area = area;
    this.numTrees = numTrees;
  }

  treeDensity() {
    const density = this.numTrees / this.area;
    console.log(`${this.name} has a tree density of ${density} trees per square km.`);
  }
}

class Street extends Element {
  constructor(name, buildYear, length, size) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classsifyStreet() {
    const classification = new Map();
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(5, 'huge');
    console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
  }
}


