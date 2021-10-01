/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  const cutArr = new Set();
  for (let i = 0; i < arr.length; i++) {
    cutArr.add(arr[i])
  }
  return cutArr
}
