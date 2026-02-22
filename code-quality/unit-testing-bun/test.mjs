import { describe, it, expect } from 'bun:test';
import {add} from './calculator.mjs'


// disini saya tambahin sebuah function bawaan library dari node untuk membungkus unit testing berdasarkan kategori kasus yang berbeda, kasus saya saat ini kategorinya adalah unit testing kategori "Calculator"
describe('Calculator', () => {
it('should add correctly', () => {
  // Arrange
  const operandA = 1;
  const operandB = 1;

  // Action
  const actualValueFirst = add(operandA, operandB);

  // Assert
  expectedValueFirst = 2
  expect(actualValueFirst).toBe(expectedValueFirst)
});

it('should throw an error if string passed on numA parameter', () => {
  const potentialErrorToBeThrew = () => {
    // Arrange
    const operandA = '5';
    const operandB = 4;

    // Action
    add(operandA, operandB);
  };

  // Assert
  expect(potentialErrorToBeThrew).toThrow(Error);
});

it('should throw an error if string passed on numB parameter', () => {
  const potentialErrorToBeThrew = () => {
    // Arrange
    const operandA = 10;
    const operandB = '8';
 
    // Action
    add(operandA, operandB);
  };
 
  // Assert
  expect(potentialErrorToBeThrew).toThrow(Error);
});

});