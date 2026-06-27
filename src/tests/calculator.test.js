const { add, subtract, multiply, divide, modulo, power, sqrt } = require("../calculator");

// ─── Addition ────────────────────────────────────────────────────────────────
describe("add()", () => {
  // From image: 2 + 3 = 5
  test("2 + 3 = 5", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds two positive numbers", () => {
    expect(add(10, 20)).toBe(30);
  });

  test("adds a positive and a negative number", () => {
    expect(add(10, -4)).toBe(6);
  });

  test("adds two negative numbers", () => {
    expect(add(-5, -7)).toBe(-12);
  });

  test("adding zero returns the same number", () => {
    expect(add(42, 0)).toBe(42);
  });

  test("adds floating-point numbers", () => {
    expect(add(1.5, 2.5)).toBeCloseTo(4.0);
  });
});

// ─── Subtraction ─────────────────────────────────────────────────────────────
describe("subtract()", () => {
  // From image: 10 - 4 = 6
  test("10 - 4 = 6", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("subtracts two positive numbers", () => {
    expect(subtract(20, 5)).toBe(15);
  });

  test("result is negative when second operand is larger", () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test("subtracts a negative number (effectively adds)", () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test("subtracting zero returns the same number", () => {
    expect(subtract(99, 0)).toBe(99);
  });

  test("subtracts floating-point numbers", () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

// ─── Multiplication ──────────────────────────────────────────────────────────
describe("multiply()", () => {
  // From image: 45 * 2 = 90
  test("45 * 2 = 90", () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test("multiplies two positive numbers", () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test("multiplies a positive and a negative number", () => {
    expect(multiply(4, -3)).toBe(-12);
  });

  test("multiplies two negative numbers gives positive result", () => {
    expect(multiply(-4, -3)).toBe(12);
  });

  test("multiplying by zero returns zero", () => {
    expect(multiply(100, 0)).toBe(0);
  });

  test("multiplying by one returns the same number", () => {
    expect(multiply(55, 1)).toBe(55);
  });

  test("multiplies floating-point numbers", () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10.0);
  });
});

// ─── Division ────────────────────────────────────────────────────────────────
describe("divide()", () => {
  // From image: 20 / 5 = 4
  test("20 / 5 = 4", () => {
    expect(divide(20, 5)).toBe(4);
  });

  test("divides two positive numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("divides resulting in a decimal", () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  test("divides a negative number by a positive", () => {
    expect(divide(-12, 4)).toBe(-3);
  });

  test("divides two negative numbers gives positive result", () => {
    expect(divide(-9, -3)).toBe(3);
  });

  test("dividing zero by a number returns zero", () => {
    expect(divide(0, 5)).toBe(0);
  });

  // Edge case: division by zero
  test("throws an error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed");
  });

  test("throws an error when dividing zero by zero", () => {
    expect(() => divide(0, 0)).toThrow("Division by zero is not allowed");
  });
});

// ─── Modulo ──────────────────────────────────────────────────────────────────
describe("modulo()", () => {
  // From image: 5 % 2 = 1
  test("5 % 2 = 1", () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test("returns zero when evenly divisible", () => {
    expect(modulo(10, 5)).toBe(0);
  });

  test("modulo with larger divisor returns the dividend", () => {
    expect(modulo(3, 7)).toBe(3);
  });

  test("modulo with negative dividend", () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test("modulo with negative divisor", () => {
    expect(modulo(7, -3)).toBe(1);
  });

  test("modulo with floating-point numbers", () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });

  // Edge case: modulo by zero
  test("throws an error when modulo by zero", () => {
    expect(() => modulo(10, 0)).toThrow("Modulo by zero is not allowed");
  });
});

// ─── Power ───────────────────────────────────────────────────────────────────
describe("power()", () => {
  // From image: 2 ^ 3 = 8
  test("2 ^ 3 = 8", () => {
    expect(power(2, 3)).toBe(8);
  });

  test("any number to the power of 0 is 1", () => {
    expect(power(99, 0)).toBe(1);
  });

  test("any number to the power of 1 is itself", () => {
    expect(power(7, 1)).toBe(7);
  });

  test("negative base with even exponent gives positive result", () => {
    expect(power(-2, 4)).toBe(16);
  });

  test("negative base with odd exponent gives negative result", () => {
    expect(power(-2, 3)).toBe(-8);
  });

  test("negative exponent returns a fraction", () => {
    expect(power(2, -3)).toBeCloseTo(0.125);
  });

  test("fractional exponent (square root via power)", () => {
    expect(power(9, 0.5)).toBeCloseTo(3);
  });
});

// ─── Square Root ─────────────────────────────────────────────────────────────
describe("sqrt()", () => {
  // From image: √16 = 4
  test("√16 = 4", () => {
    expect(sqrt(16)).toBe(4);
  });

  test("square root of 9 is 3", () => {
    expect(sqrt(9)).toBe(3);
  });

  test("square root of 2 is approximately 1.414", () => {
    expect(sqrt(2)).toBeCloseTo(1.4142, 4);
  });

  test("square root of 0 is 0", () => {
    expect(sqrt(0)).toBe(0);
  });

  test("square root of 1 is 1", () => {
    expect(sqrt(1)).toBe(1);
  });

  test("square root of a large number", () => {
    expect(sqrt(10000)).toBe(100);
  });

  // Edge case: square root of a negative number
  test("throws an error for square root of a negative number", () => {
    expect(() => sqrt(-1)).toThrow("Square root of a negative number is not allowed");
  });

  test("throws an error for square root of -100", () => {
    expect(() => sqrt(-100)).toThrow("Square root of a negative number is not allowed");
  });
});
