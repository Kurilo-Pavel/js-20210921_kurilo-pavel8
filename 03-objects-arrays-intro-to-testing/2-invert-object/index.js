/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  const rez = Object.fromEntries(new Array(Object.entries(obj).join().split(',').reverse()))
  return rez
}
