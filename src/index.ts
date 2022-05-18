
/**
 * Calculate the average of three numbers
 *
 * @param a - first number
 * @param b - second number
 * @param c - third number
 *
 * @public
 */
export function avg(a: number, b: number, c: number): number {
  return sum3(a, b, c) / 3;
}


/**
 * Calculate the sum of three numbers
 *
 * @param a - first number
 * @param b - second number
 * @param c - third number
 *
 * @public
 * 
 */
export function sum3(a: number, b: number, c: number): number {
  return sum2(a, sum2(b, c));
}

/**
 * Calculate the sum of two numbers
 * 
 * @param a - first number
 * @param b - second number
 * @returns - sum of the two numbers
 * 
 * @internal 
 */

export function sum2(a: number, b: number): number {

  const sum = a + b 
  return sum
}


export {subtract} from './subtract'
// console.log(sum2(4, 5))