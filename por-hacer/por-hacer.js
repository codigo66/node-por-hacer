const fs = require('fs');

let listadoPorHacer = [];
const crear = (tarea) => {
    cargarDB();
    let porHacer = {
        tarea,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
};

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (e) {
        listadoPorHacer = [];
    }
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, (e) => {
        if (e) throw new Error('Imposible grabar', e);
    });
};

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (tarea, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(t => t.tarea === tarea);
    if (index >= 0) {
        listadoPorHacer[index].completado = JSON.parse(completado);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (tarea) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(t => t.tarea === tarea);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};