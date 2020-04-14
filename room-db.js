/* Room Class USAGE EXAMPLE
-------------------------------------- */

/* Room Database
-------------------------------------- */
var _rooms = [
  new Room(1, 'road', 'this is a road'),
  new Room(2, 'house', 'this is a house')
]

/* Normalized Room Database
-------------------------------------- */
var rooms = normalize(_rooms);

/*
 * Normalize function
 *
 * Note: of course this function can be replaced with
 * other database normalizer js package from npm
 */
function normalize(aoo){
  let result = {}
  for (let index = 0; index < aoo.length; index++) {
    const x = aoo[index];
    result[x.id] = x
  }
  return result
}