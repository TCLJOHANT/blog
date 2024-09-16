/**
 * Biblioteca para gestionar una lista de tareas.
 */
class TodoList {
    constructor() {
        this.tasks = [];
    }

    /**
     * Agrega una nueva tarea a la lista.
     * 
     * @param {string} description - Descripción de la tarea.
     * @throws {Error} Si la descripción está vacía.
     */
    addTask(description) {
        if (typeof description !== 'string' || description.trim() === '') {
            throw new Error('La descripción de la tarea no puede estar vacía.');
        }

        const task = {
            id: this.tasks.length + 1,
            description: description.trim(),
            completed: false
        };

        this.tasks.push(task);
        return task;
    }

    /**
     * Marca una tarea como completada.
     * 
     * @param {number} id - ID de la tarea.
     * @throws {Error} Si la tarea con el ID no existe.
     */
    completeTask(id) {
        const task = this.tasks.find(task => task.id === id);
        if (!task) {
            throw new Error('La tarea con el ID especificado no existe.');
        }
        task.completed = true;
        return task;
    }

    /**
     * Elimina una tarea de la lista.
     * 
     * @param {number} id - ID de la tarea.
     * @throws {Error} Si la tarea con el ID no existe.
     */
    removeTask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index === -1) {
            throw new Error('La tarea con el ID especificado no existe.');
        }
        return this.tasks.splice(index, 1)[0];
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
