/**
 * @param {string | Array} [base] `base` (optional):
 * 
 * The `base` string or array to be used in the operations.
 * - Can be any string that do not contain the same character 2 or more times.
 * - Can be any array that do not contain the same value 2 or more times.
 * @returns Object:
 * 
 * - function encode(Integer) => Returns a String or Array: the Integer translated to the `base`.
 * 
 * - function decode(String) => Returns a Integer: the String or Array decode from the `base`.
 */
const useBase = (base = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') => {
    if(typeof base != "string" && !Array.isArray(base))  throw "Param 'base' must be of type String or Array";

    return ({    
        /**
         * @param {number} integer `integer`: the Integer to be encoded.
         * - Can be any non decimal positive number lesser than 1e+308.
         * @param {Array} [auxArray] `auxArray`: the auxiliar array of the function.
         * - Insert values to it only if you understand what you are doing.
         * @returns {string | Array} string or array: 
         * 
         * Integer translated to the `base`.
         */
        encode(integer, auxArray = []) {
            if(typeof integer != "number") throw "Param 'number' must be of type Int";
            if(!Array.isArray(auxArray)) throw "Param 'auxArray' must be an array";

            // if base is array
            if(Array.isArray(base)){
                if (integer < base.length)
                    auxArray.push(base[integer])

                else {
                    useBase(base).encode( Math.floor(integer / base.length), auxArray)[0];
                    useBase(base).encode( integer % base.length, auxArray)[0];
                }

                return auxArray;
            }

            // if base is string
            if (integer < base.length) return base[integer];

            else {
                return (
                    useBase(base).encode( Math.floor(integer / base.length) )
                    +
                    useBase(base).encode( integer % base.length )
                );
            }
        },

        /**
         * @param {string | Array} value `value`: the string or array to be translated to number.
         * - Can be any string wich all characters are included in the `base` string.
         * - Can be any array wich all values are included in the `base` array.
         * @returns {number} number:
         * 
         * String or Array translated to number.
         */
        decode(value) {
            if(typeof value != "string" && !Array.isArray(value)) throw "Param 'value' must be of type String or Array";

            let valueArray = Array.isArray(base)? value: value.split("");

            return valueArray
            .reverse() 
            .map((c, i) => (base.indexOf(c) * Math.pow(base.length, i))) 
            .reduce((a, b) => a + b);
        }
    });
}

export default useBase;