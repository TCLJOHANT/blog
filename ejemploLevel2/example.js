const TodoList = require('./todoList');

const myTodoList = new TodoList();

try {
    console.log('Agregando tareas...');
    const task1 = myTodoList.addTask('Comprar leche');
    const task2 = myTodoList.addTask('Leer un libro');
    console.log('Tareas:', myTodoList.getTasks());

    console.log('Marcando la tarea 1 como completada...');
    myTodoList.completeTask(task1.id);
    console.log('Tareas después de completar:', myTodoList.getTasks());

    console.log('Eliminando la tarea 2...');
    myTodoList.removeTask(task2.id);
    console.log('Tareas restantes:', myTodoList.getTasks());
} catch (error) {
    console.error('Error:', error.message);
}
