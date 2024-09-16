// 3. Implementación de CLI (cli.js)
// Este archivo proporcionará una interfaz de línea de comandos para interactuar con la aplicación.

const readline = require('readline');
const TodoList = require('./todoList');

const todoList = new TodoList();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log('1. Agregar tarea');
    console.log('2. Listar tareas');
    console.log('3. Completar tarea');
    console.log('4. Eliminar tarea');
    console.log('5. Salir');
    rl.question('Elige una opción: ', handleMenuSelection);
}

function handleMenuSelection(option) {
    switch (option) {
        case '1':
            rl.question('Descripción de la tarea: ', description => {
                try {
                    const task = todoList.addTask(description);
                    console.log('Tarea agregada:', task);
                } catch (error) {
                    console.error('Error:', error.message);
                }
                showMenu();
            });
            break;
        case '2':
            console.log('Lista de tareas:', todoList.getTasks());
            showMenu();
            break;
        case '3':
            rl.question('ID de la tarea a completar: ', id => {
                try {
                    const task = todoList.completeTask(Number(id));
                    console.log('Tarea completada:', task);
                } catch (error) {
                    console.error('Error:', error.message);
                }
                showMenu();
            });
            break;
        case '4':
            rl.question('ID de la tarea a eliminar: ', id => {
                try {
                    const task = todoList.removeTask(Number(id));
                    console.log('Tarea eliminada:', task);
                } catch (error) {
                    console.error('Error:', error.message);
                }
                showMenu();
            });
            break;
        case '5':
            rl.close();
            break;
        default:
            console.log('Opción no válida.');
            showMenu();
            break;
    }
}

showMenu();
