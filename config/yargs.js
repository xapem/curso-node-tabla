const argv = require('yargs')
    .option('b', {
        alias : 'base',
        type  : 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias : 'listar',
        type  : 'boolean',
        default : false,
        describe: 'Muestra la tabla si es true'
    })
    .option('h', {
        alias : 'hasta',
        type  : 'number',
        default : 10,
        demandOption : false,
        describe : 'Es el limite de la funcion multiplicar'
    })
    .check((argv, options) => {
        console.log('yargs', argv)
        if( isNaN(argv.b) ){
            throw 'La base tiene que ser un numero'
        }
        return true
    })
    .argv

module.exports = argv