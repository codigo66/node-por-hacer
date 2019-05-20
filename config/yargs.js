const tarea = {
    demand: true,
    alias: "t",
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    alias: "c",
    default: true,
    desc: 'Marca como completado o pendiente una tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', { tarea })
    .command('listar', 'Muestra una lista de las tareas', {})
    .command('actualizar', 'Actualiza el estado de una tarea', { tarea, completado })
    .command('borrar', 'Elimina una tarea por hacer', { tarea })
    .help()
    .argv;

module.exports = {
    argv
}