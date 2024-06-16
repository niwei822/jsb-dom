/** jsb-dom/src/problems.js
 *
 * Write your solutions to the problems here.
 */

/**
 * Prompt #1
 *
 * Write a function that toggles the button betwen "Log In" and "Log Out".
 */
export function prompt1() {
  // FIXME
  // Select the element with the id #login-button.
  // If the button's text is "Log In", change it to "Log Out".
  // If the button's text is "Log Out", change it to "Log In".
  // Start by selecting the element with the id #login-button.
  if (document.querySelector('#login-button').innerHTML === 'Log In') {
    document.querySelector('#login-button').innerHTML = 'Log Out'; 
  } else {
    document.querySelector('#login-button').innerHTML = 'Log In';
  }
}

/**
 * Prompt #2
 *
 * Send an alert to the user containing the value of the input field.
 * If the user hasn't entered any text, send an alert with the message,
 * "Please enter a message".
 */
export function prompt2() {
  // FIXME
  // Start by selecting the element with the id #alert-text-input.
  const input = document.querySelector('#alert-text-input');
  if (input.value === '') {
    alert('Please enter a message');
  } else {
    alert(input.value);
  }
}

/**
 * Prompt #3
 *
 * The divs in this prompt contain names of CSS colors. Use these names
 * to dyanmically set the background color of the divs.
 */
export function prompt3() {
  // FIXME
  document.querySelectorAll('#color-boxes div').forEach((box) => {
    box.style.backgroundColor = box.innerHTML;
  });
}

/**
 * Prompt #4
 *
 * Use the tasks array to dynamically create a list of tasks.
 * Completed tasks should have green text. Add the tasks to
 * the #task-list element.
 */
export function prompt4() {
  const tasks = [
    { name: 'Drink water', complete: true },
    { name: 'Take a walk', complete: false },
    { name: 'Do the dishes', complete: false },
    { name: 'Make dinner', complete: false },
    { name: 'Read a book', complete: true },
  ];

  // FIXME
  const list = document.querySelector('#task-list');
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.innerHTML = task.name;
    if (task.complete) {
      li.style.color = 'green';
    }
    list.appendChild(li);
  });
}

/**
 * Prompt #5
 *
 * The factorial of a number is the product of an integer and all the
 * integers below it. For example, the factorial of 4 is equal to
 * 4 * 3 * 2 * 1 = 24. The factorial of 6 is 6 * 5 * 4 * 3 * 2 * 1 = 720.
 *
 * Take the value of the #num input and calculate the factorial of that number.
 * Display the result of the calculation in the #factorial-result span.
 */
export function prompt5() {
  // FIXME
  function factorial(num) {
    if (num === 0) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }
  const input = document.querySelector('#num');
  document.querySelector('#factorial-result').innerHTML = factorial(input.value);
}

/**
 * Prompt #6
 *
 * This is a version of the classic FizzBuzz problem.
 *
 * Write a function that generates <span> elements for the numbers 1 to 100.
 * - For multiples of 3, color the number blue.
 * - For multiples of 5, color the number red.
 * - For multiples of 3 and 5, color the number purple.
 */
export function prompt6() {
  // FIXME
}
