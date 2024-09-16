/**1. Implementación de la Biblioteca (todoList.js)
Actualizaremos la biblioteca para trabajar con el módulo de persistencia.*/
const { loadTasks, saveTasks } = require('./storage');

/**
 * Biblioteca para gestionar una lista de tareas con persistencia.
 */
class TodoList {
    constructor() {
        this.tasks = loadTasks();
    }

    /**
     * Agrega una nueva tarea a la lista.
     * 
     * @param {string} description - Descripción de la tarea.
     * @returns {object} La tarea agregada.
     * @throws {Error} Si la descripción está vacía.
     */
    addTask(description) {
        if (typeof description !== 'string' || description.trim() === '') {
            throw new Error('La descripción de la tarea no puede estar vacía.');
        }

        const task = {
            id: Date.now(), // Usamos el timestamp como ID único.
            description: description.trim(),
            completed: false
        };

        this.tasks.push(task);
        saveTasks(this.tasks);
        return task;
    }

    /**
     * Marca una tarea como completada.
     * 
     * @param {number} id - ID de la tarea.
     * @returns {object} La tarea actualizada.
     * @throws {Error} Si la tarea con el ID no existe.
     */
    completeTask(id) {
        const task = this.tasks.find(task => task.id === id);
        if (!task) {
            throw new Error('La tarea con el ID especificado no existe.');
        }
        task.completed = true;
        saveTasks(this.tasks);
        return task;
    }

    /**
     * Elimina una tarea de la lista.
     * 
     * @param {number} id - ID de la tarea.
     * @returns {object} La tarea eliminada.
     * @throws {Error} Si la tarea con el ID no existe.
     */
    removeTask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index === -1) {
            throw new Error('La tarea con el ID especificado no existe.');
        }
        const [removedTask] = this.tasks.splice(index, 1);
        saveTasks(this.tasks);
        return removedTask;
    }

    /**
     * Devuelve todas las tareas.
     * 
     * @returns {object[]} Lista de tareas.
     */
    getTasks() {
        return this.tasks;
    }
}

module.exports = TodoList;
