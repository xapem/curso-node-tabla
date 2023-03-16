const { crearArchivo } = require('./helpers/multiplicar') // Esto ya no funciona
const argv = require('./config/yargs')




console.clear()

// console.log(process.argv)

// const [,, arg3 = 'base=5'] = process.argv
// const [, base = 5] = arg3.split('=')
// console.log(arg3)
// console.log(base)

// const base = 5;


// console.log(process.argv)
console.log(argv)

// console.log('base: yargs', argv.base)
// console.log('base: yargs', argv.b)

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log(err))