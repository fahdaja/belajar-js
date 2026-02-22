export function add(numA, numB) {
    if(typeof numA !== 'number' || typeof numB !== 'number'){
        throw new Error('Expected a Number')
    }

  return numA + numB;
}