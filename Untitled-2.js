// Inicialización de variables con literales
let booleanVariable = true;
let numberVariable = 42;
let stringVariable = "Hola mundo";
let undefinedVariable = undefined;

// Inicialización de variables con funciones constructoras
let booleanVariable2 = new Boolean(false);
let numberVariable2 = new Number(3.14159);
let stringVariable2 = new String("Hola");
let undefinedVariable2 = undefined;

// BigInt solo se puede inicializar utilizando una función constructora
let bigIntVariable = BigInt(123456789);

//usando un solo console log interpolando el tipo de dato
console.log(
    `${booleanVariable} [${typeof booleanVariable}], ` +
    `${numberVariable} [${typeof numberVariable}], ` +
    `${stringVariable} [${typeof stringVariable}], ` +
    `${undefinedVariable} [${typeof undefinedVariable}], ` +
    `${booleanVariable2} [${typeof booleanVariable2}], ` +
    `${numberVariable2} [${typeof numberVariable2}], ` +
    `${stringVariable2} [${typeof stringVariable2}], ` +
    `${undefinedVariable2} [${typeof undefinedVariable2}], ` +
    `${bigIntVariable} [${typeof bigIntVariable}]`
  );

  const stringValue = "1234";

const numberValue = Number(stringValue);

const bigIntValue = BigInt(numberValue);

const booleanValue = Boolean(bigIntValue);

console.log(booleanValue);  
console.log(typeof booleanValue);  



// Suma de dos valores booleanos
const sumBoolean = true + true;
console.log(sumBoolean);  
console.log(typeof sumBoolean);  

// Suma de dos valores numéricos
const sumNumber = 42 + 17;
console.log(sumNumber);  
console.log(typeof sumNumber);

// Suma de dos valores de cadena de texto
const sumString = "Hola" + " mundo";
console.log(sumString);  
console.log(typeof sumString);  

// Suma de dos valores undefined
const sumUndefined = undefined + undefined;
console.log(sumUndefined);  
console.log(typeof sumUndefined);  

// Suma de dos valores BigInt
const sumBigInt = BigInt("123456789") + BigInt("987654321");
console.log(sumBigInt); 
console.log(typeof sumBigInt);  


const sumBooleanNumber = true + 42;
console.log(sumBooleanNumber);  
console.log(typeof sumBooleanNumber);  

const str1 = 42 + -(-"1");
console.log(str1);  



