/**
 * @param {string | Array} [base] `base` (optional):
 * 
 * The `base` string or array to be used in the operations.
 * - Can be any string that do not contain the same character 2 or more times.
 * - Can be any array that do not contain the same value 2 or more times.
 * @returns Object:
 * 
 * - base: Non wiritable value containing the `base` used to create this instance.
 * 
 * - function encode(Integer) => Returns a String or Array: the Integer translated to the `base`.
 * 
 * - function decode(String) => Returns a Integer: the String or Array decode from the `base`.
 */
const useBase = (base = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') => {
    if(typeof base != "string" && !Array.isArray(base))  throw "Param 'base' must be of type String or Array";

    let returnObject = ({    
        /**
         * @param {number} integer `integer`: the Integer to be encoded.
         * - Can be any non decimal positive number lesser than 1e+308.
         * @param {Array} [auxArray] `auxArray`: the auxiliar array of the function.
         * - Insert values to it only if you understand what you are doing.
         * @returns {string | Array} string or array: 
         * 
         * Integer translated to the `base`.
         * - raw: __proto__ property containing the `integer` param.
         * - base: __proto__ property containing the `base` used to create this instance.
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
                
                Object.defineProperty(auxArray.__proto__, "base", {
                    value: base,
                    writable: false,
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(auxArray.__proto__, "raw", {
                    value: integer,
                    writable: false,
                    enumerable: true,
                    configurable: true
                });

                return auxArray;


            } else {
                // if base is string
                
                let returnValue;
                if (integer < base.length) {
                    returnValue = base[integer];

                } else {
                    returnValue = (
                        useBase(base).encode( Math.floor(integer / base.length) )
                        +
                        useBase(base).encode( integer % base.length )
                    );
                }

                Object.defineProperty(returnValue.__proto__, "base", {
                    value: base,
                    writable: false,
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(returnValue.__proto__, "raw", {
                    value: integer,
                    writable: false,
                    enumerable: true,
                    configurable: true
                });

                return returnValue;
            }
        },

        /**
         * @param {string | Array} value `value`: the string or array to be translated to number.
         * - Can be any string wich all characters are included in the `base` string.
         * - Can be any array wich all values are included in the `base` array.
         * @returns {number} number:
         * 
         * String or Array translated to number.
         * - base: __proto__ property containing the `base` used to create this instance.
         */
        decode(value) {
            if(typeof value != "string" && !Array.isArray(value)) throw "Param 'value' must be of type String or Array";

            let valueArray = Array.isArray(base)? value: value.split("");

            let returnValue = valueArray
            .reverse() 
            .map((c, i) => (base.indexOf(c) * Math.pow(base.length, i))) 
            .reduce((a, b) => a + b);

            Object.defineProperty(returnValue.__proto__, "base", {
                value: base,
                writable: false,
                enumerable: true,
                configurable: true
            });

            return returnValue;
        }
    });

    Object.defineProperty(returnObject, "base", {
        value: base,
        writable: false,
        enumerable: true,
        configurable: true
    });

    return returnObject;
}

const setProto = (names, value) => {
    names = Array.isArray(names)? names: [names];

    names.forEach(name => {
        Object.defineProperty(useBase, name, {
            value: useBase(value),
            writable: false,
            enumerable: true,
            configurable: true
        });
    });
}

setProto(["base2", "binary"], "01");
setProto(["base5", "quinary"], "01234");
setProto(["base8", "octal"], "01234567");
setProto(["base12", "duodecimal"], "0123456789AB");
setProto(["base16", "hexadecimal"], "0123456789ABCDEF");
setProto("base32", "ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567");
setProto("base36", "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789");
setProto("base62", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");
setProto("base64", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");

export default useBase;