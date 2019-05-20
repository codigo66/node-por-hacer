const colors = require('colors');
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];
switch (comando) {
    case 'crear':
        porHacer.crear(argv.tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        console.log('======== Por hacer ========'.green);
        console.log('');
        for (let tarea of listado) {
            console.log('Tarea: ', tarea.tarea);
            if (tarea.completado === false) {
                console.log('Estado: ', 'PENDIENTE'.bgRed);
            } else {
                console.log('Estado: ', 'COMPLETADO'.bgGreen);
            }
            console.log('---------------------------'.green);
        }
        console.log('');
        console.log('============================'.green);
        break;
    case 'actualizar':
        porHacer.actualizar(argv.tarea, argv.completado);
        console.log('Actualizado');
        break;
    case 'borrar':
        porHacer.borrar(argv.tarea);
        console.log('Borrado');
        break;
    default:
        console.log('Comando no reconocido');
}