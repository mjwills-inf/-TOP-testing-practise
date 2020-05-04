import capitalise from './capitalise'
import reverseString from './reverseString'
import calculate from './calculate'
import arrayAnalysis from './arrayAnalysis'


// Capitalise
test('capitalise', () => {
  expect(capitalise('string')).toBe('String')
})

// Reverse String
test('reverse string', () => {
  expect(reverseString('string')).toBe('gnirts')
})

// Calculate
test('addition in calculate', () => {
  expect(calculate.add(1,3,9)).toBe(13)
})

test('subtraction in calculate', () => {
  expect(calculate.subtract(10,4)).toBe(6)
})

test('division in calculate', () => {
  expect(calculate.divide(70, 7, 2)).toBe(5)
})

test('multiplcation in calculate', () => {
  expect(calculate.multiply(70, 7, 2)).toBe(980)
})

// Caesar


// Array Analysis
test('array analysis', () => {
  expect(arrayAnalysis([1,4,10])).toEqual({
    average: 5,
    min: 1, 
    max: 10,
    length: 3
  })  
})