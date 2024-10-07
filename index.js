// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

// Function to append a cat destructively
function destructivelyAppendCat(name) {
    cats.push(name); // Adds the new cat to the end of the array
}

// Example usage:
console.log(cats); // Output: ["Milo", "Otis", "Garfield"]

destructivelyAppendCat("Tom");
console.log(cats); // Output: ["Milo", "Otis", "Garfield", "Tom"]



// Destructive Functions

// 1. Prepend a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// 2. Remove the last cat from the cats array
function destructivelyRemoveLastCat() {
    cats.pop();
}

// 3. Remove the first cat from the cats array
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Non-Destructive Functions

// 4. Append a cat to the cats array and return a new array, leaving the cats array unchanged
function appendCat(name) {
    return [...cats, name];  // Spread syntax creates a new array
}

// 5. Prepend a cat to the cats array and return a new array, leaving the cats array unchanged
function prependCat(name) {
    return [name, ...cats];  // Spread syntax creates a new array
}

// 6. Remove the last cat in the cats array and return a new array, leaving the cats array unchanged
function removeLastCat() {
    return cats.slice(0, cats.length - 1);  // Slicing creates a new array
}

// 7. Remove the first cat from the cats array and return a new array, leaving the cats array unchanged
function removeFirstCat() {
    return cats.slice(1);  // Slicing creates a new array
}

// Example usage:
console.log("Original array:", cats);

// Destructive functions
destructivelyPrependCat("Tom");
console.log("After destructive prepend:", cats);

destructivelyRemoveLastCat();
console.log("After destructive remove last:", cats);

destructivelyRemoveFirstCat();
console.log("After destructive remove first:", cats);

// Resetting the array
cats = ["Milo", "Otis", "Garfield"];

// Non-destructive functions
let newArray1 = appendCat("Tom");
console.log("New array after non-destructive append:", newArray1);
console.log("Original array after non-destructive append:", cats);

let newArray2 = prependCat("Tom");
console.log("New array after non-destructive prepend:", newArray2);
console.log("Original array after non-destructive prepend:", cats);

let newArray3 = removeLastCat();
console.log("New array after non-destructive remove last:", newArray3);
console.log("Original array after non-destructive remove last:", cats);

let newArray4 = removeFirstCat();
console.log("New array after non-destructive remove first:", newArray4);
console.log("Original array after non-destructive remove first:", cats);
