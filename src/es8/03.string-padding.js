/*
 *str.padStart(targetLength, padString)
 *
 * targetLength → Es la longitud de la cadena resultante una vez que haya sido rellenada. Si este parámetro es más pequeño que la longitud de la cadena actual, la cadena se mantendrá igual.
 *
 * padString → Valor opcional. La cadena para rellenar la cadena actual. Si esta cadena es muy larga, será recortada y la parte más a la izquierda será aplicada
 */

const nombre = 'Fabian';
console.log(nombre.padStart(7, '37'));
console.log(nombre.padEnd(nombre.length + 1, 'G'));
