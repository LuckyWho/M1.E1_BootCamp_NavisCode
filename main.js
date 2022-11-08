// Ejercicio 1
console.log('Hola mundo! soy Lucky')

//Ejercicio 2
const nombre = 'Lucky'
let edad = 26
let mayorDeEdad = true
const direccion = {
calle: 'falsa',
numero: 22,
piso: 3,
puerta: 'b'
}
const coloresFavoritos = ['negro','blanco','rojo','azul']
const lenguajesFavoritos = ['html', 'css','javascript']
const mejorLenguaje = lenguajesFavoritos[0]
const peorLenguaje = lenguajesFavoritos[2]

console.log('Lenguaje favorito:'+ mejorLenguaje + ' lenguaje menos favorito:' + peorLenguaje)

//Ejercicio 3
const numero1 = 2
const numero2 = 5

let suma = numero1 + numero2

console.log('La suma de ' + numero1 + ' y ' + numero2 + ' es ' + suma) 

const num3 = 78
const num4 = 55

let resta = num3 - num4
let multiplicacion = num3*num4
let division = num3/num4


console.log('Operaciones con los siguientes números: ' + num3 +' y '+num4+'\nResta: '+resta+'\nMultiplicación: '+multiplicacion+'\nDivisión: '+division)

//Ejercicio 4
const saludo = 'Hola'

if (saludo == 'Hola') {
    console.log('Ha saludado')
}

//Ejercicio 5
const pokemones = ['Pikachu','Lugia','Giratina']
console.log(pokemones)
console.log(pokemones[0] + '\n' + pokemones[1] + '\n' + pokemones[2])

pokemones.forEach(element => {
    console.log(element)
});

//Ejercicio 6
const pokemones2 = [
    ['Charizard', 'fuego'],
    ['Blastoise','agua'],
    ['Venosaur','planta']
]
pokemones2.forEach(element =>{
    console.log(element[0] + 'es de tipo: ' + element[1])
})
if(pokemones2[1] = 'fuego'){
    console.log('Es de tipo fuego')
}