// 2. Implementación de Persistencia (storage.js)
// Este módulo manejará la lectura y escritura de datos en un archivo JSON.

const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname, 'tasks.json');

/**
 * Carga las tareas desde un archivo JSON.
 * 
 * @returns {object[]} Lista de tareas.
 */
function loadTasks() {
    if (fs.existsSync(FILE_PATH)) {
        const data = fs.readFileSync(FILE_PATH, 'utf8');
        return JSON.parse(data);
    }
    return [];
}

/**
 * Guarda las tareas en un archivo JSON.
 * 
 * @param {object[]} tasks - Lista de tareas a guardar.
 */
function saveTasks(tasks) {
    fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2), 'utf8');
}

module.exports = { loadTasks, saveTasks };
