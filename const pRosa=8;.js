 const pRosa=8;
let CantRosa=20;
let tRosa=pRosa*CantRosa;

const pLirio=10;
let CantLirio=30;
let tLirio=pLirio*CantLirio;

const pTulipan=2;
let CantTulipan=120;
let tTulipan=pTulipan*CantTulipan;

console.log("Rosa:","precio unitario :",pRosa,"cantidad :",CantRosa, "valor :",tRosa);
console.log("Lirio:","precio unitario :",pLirio,"cantidad :",CantLirio, "valor :",tLirio);
console.log("Tulipan:","precio unitario :",pTulipan,"cantidad :",CantTulipan, "valor :",tTulipan);
console.log("Total: ",tLirio+tRosa+tTulipan)

let nombre;
let telefono;
let correo;
nombre=`Maxwell Wright`;
telefono =` (0191) 7196495`;
correo= `Curabitur.egestas.nunc@nonummyac.co.uk`;
console.log("Nombre", "           Telefono    ","         Correo    ");
console.log(nombre,"  ",telefono,"     ",correo);
nombre=`Raja Villarreal`;
telefono=`0866 398 2895`;
correo=`posuere.vulputate@sed.com`;
console.log(nombre,"  ",telefono,"      ",correo);
nombre=`Helen Richards`;
telefono=`0800 1111`;
correo=`libero@convallis.edu`;
console.log(nombre,"    ",telefono,"        ",correo);


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

// Imprimir los valores de las variables
console.log(booleanVariable);       // true
console.log(numberVariable);        // 42
console.log(stringVariable);        // "Hola mundo"
console.log(undefinedVariable);     // undefined

console.log(booleanVariable2);      // [Boolean: false]
console.log(numberVariable2);       // [Number: 3.14159]
console.log(stringVariable2);       // [String: 'Hola']
console.log(undefinedVariable2);    // undefined
console.log(bigIntVariable);        // 123456789n

