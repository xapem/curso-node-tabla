const fs = require('fs')
const colors = require('colors')


const crearArchivo = async ( base = 5, l, h) => {

    // return new Promise( (resolve, reject) => {
    //     let salida = ''
    //     for (let index = 1; index <= 10 ; index++) {
    //         salida += `${base} X ${index} = ${base * index}\n`
    //     }

    //     console.log(salida)

    //     fs.writeFileSync(`tabla-${ base }.txt`, salida)

    //     resolve(`tabla-${ base }.txt`)
    // });

    try{
        let salida = ''
        let consola = ''
        for (let index = 1; index <= h ; index++) {
            salida += `${colors.green(base)} ${colors.red('X')} ${colors.yellow(index)} = ${colors.blue( base * index )}\n`
            consola += `${base} X ${index} = ${ base * index }\n`
        }

        if(l) console.log(salida)

        fs.writeFileSync(`./salida/tabla-${ base }.txt`, consola)

        return(`tabla-${ base }.txt`.rainbow)
    } catch(err) {
        throw err
    }
}



module.exports =  {
    crearArchivo
}
