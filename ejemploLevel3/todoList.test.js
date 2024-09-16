// 4. Archivo de Pruebas (todoList.test.js)
// Asegúrate de que Jest esté configurado correctamente. Las pruebas deben incluir la funcionalidad de persistencia.

const fs = require('fs');
const path = require('path');
const TodoList = require('./todoList');
const { loadTasks, saveTasks } = require('./storage');

jest.mock('./storage');

const FILE_PATH = path.join(__dirname, 'tasks.json');

beforeEach(() => {
    fs.writeFileSync(FILE_PATH, JSON.stringify([]), 'utf8'); // Limpia el archivo antes de cada prueba.
    loadTasks.mockReturnValue([]);
});

test('agregar tarea', () => {
    const todoList = new TodoList();
    const task = todoList.addTask('Hacer la compra');
    expect(task).toEqual({
        id: expect.any(Number),
        description: 'Hacer la compra',
        completed: false
    });
    expect(todoList.getTasks()).toHaveLength(1);
});

test('marcar tarea como completada', () => {
    loadTasks.mockReturnValue([{ id: 1, description: 'Hacer la compra', completed: false }]);
    const todoList = new TodoList();
    todoList.completeTask(1);
    expect(todoList.getTasks()[0].completed).toBe(true);
});

test('eliminar tarea', () => {
    loadTasks.mockReturnValue([{ id: 1, description: 'Hacer la compra', completed: false }]);
    const todoList = new TodoList();
    todoList.removeTask(1);
    expect(todoList.getTasks()).toHaveLength(0);
});

test('agregar tarea con descripción vacía', () => {
    const todoList = new TodoList();
    expect(() => todoList.addTask('')).toThrow('La descripción de la tarea no puede estar vacía.');
});

test('marcar tarea inexistente como completada', () => {
    loadTasks.mockReturnValue([]);
    const todoList = new TodoList();
    expect(() => todoList.completeTask(1)).toThrow('La tarea con el ID especificado no existe.');
});
