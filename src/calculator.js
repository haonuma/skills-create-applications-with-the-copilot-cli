#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   - Addition       (+): adds two numbers
 *   - Subtraction    (-): subtracts the second number from the first
 *   - Multiplication (*): multiplies two numbers
 *   - Division       (/):  divides the first number by the second (returns error on division by zero)
 *   - Modulo         (%):  returns the remainder of a divided by b (throws on modulo by zero)
 *   - Power          (**): raises base to the given exponent (e.g., 2 ^ 3 = 8)
 *   - Square Root  (sqrt): returns the square root of a number (throws for negative input)
 *
 * Usage:
 *   node calculator.js <number1> <operator> <number2>
 *   node calculator.js sqrt <number>
 *
 * Examples:
 *   node calculator.js 5 + 3     => 8
 *   node calculator.js 9 - 4     => 5
 *   node calculator.js 6 * 7     => 42
 *   node calculator.js 10 / 2    => 5
 *   node calculator.js 5 % 2     => 1
 *   node calculator.js 2 ** 3    => 8
 *   node calculator.js sqrt 16   => 4
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a minus b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a divided by b; throws on division by zero
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

// Modulo: returns the remainder of a divided by b; throws on modulo by zero
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Modulo by zero is not allowed");
  }
  return a % b;
}

// Power: returns base raised to the given exponent (e.g., 2 ** 3 = 8)
function power(base, exponent) {
  return base ** exponent;
}

// Square Root: returns the square root of n; throws for negative input
function sqrt(n) {
  if (n < 0) {
    throw new Error("Square root of a negative number is not allowed");
  }
  return Math.sqrt(n);
}

// CLI entry point
function main() {
  const args = process.argv.slice(2);

  if (args.length === 2 && args[0] === "sqrt") {
    const n = parseFloat(args[1]);
    if (isNaN(n)) {
      console.error("Error: Operand must be a valid number.");
      process.exit(1);
    }
    try {
      console.log(`sqrt(${n}) = ${sqrt(n)}`);
    } catch (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
    return;
  }

  if (args.length !== 3) {
    console.error("Usage: node calculator.js <number1> <operator> <number2>");
    console.error("       node calculator.js sqrt <number>");
    console.error("Operators: + - * / % **");
    process.exit(1);
  }

  const a = parseFloat(args[0]);
  const operator = args[1];
  const b = parseFloat(args[2]);

  if (isNaN(a) || isNaN(b)) {
    console.error("Error: Both operands must be valid numbers.");
    process.exit(1);
  }

  let result;
  try {
    switch (operator) {
      case "+":
        result = add(a, b);
        break;
      case "-":
        result = subtract(a, b);
        break;
      case "*":
        result = multiply(a, b);
        break;
      case "/":
        result = divide(a, b);
        break;
      case "%":
        result = modulo(a, b);
        break;
      case "**":
        result = power(a, b);
        break;
      default:
        console.error(`Error: Unknown operator "${operator}". Use +, -, *, /, %, or **`);
        process.exit(1);
    }
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }

  console.log(`${a} ${operator} ${b} = ${result}`);
}

if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide, modulo, power, sqrt };
