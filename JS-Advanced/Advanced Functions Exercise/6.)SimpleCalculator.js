//Task: Create a function calculator which returns an object that can modify the DOM. The returned object should support the following functionality:

// · init (selector1, selector2, resultSelector) - initializes the object to work with the elements corresponding to the supplied selectors.

// · add () - adds the numerical value of the element corresponding to selector1 to the numerical value of the element corresponding to selector2 and then writes the result in the element corresponding to resultSelector.

// · subtract () - subtracts the numerical value of the element corresponding to selector1 from the numerical value of the element corresponding to selector2 and then writes the result in the element corresponding to resultSelector.

// Input

// There will be no input your function must only provide an object.

// Output

// Your function should return an object that meets the specified requirements.

// Constraints

// · All commands will always be valid, there will be no nonexistent or incorrect input.

// · All selectors will point to single textbox elements.

// · Use the given skeleton to solve this problem.

//Solution:

function calculator() {
    let element1;
    let element2;
    let resultElement;

    function init(selector1, selector2, resultSelector) {
        element1 = document.querySelector(selector1);
        element2 = document.querySelector(selector2);
        resultElement = document.querySelector(resultSelector);
    }

    function add() {
        resultElement.value = Number(element1.value) + Number(element2.value);
    }

    function subtract() {
        resultElement.value = Number(element1.value) - Number(element2.value);
    }

    return {
        init, add, subtract
    };
}