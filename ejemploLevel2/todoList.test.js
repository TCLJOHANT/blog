const TodoList = require('./todoList');

test('agregar tarea', () => {
    const todoList = new TodoList();
    const task = todoList.addTask('Hacer la compra');
    expect(task).toEqual({
        id: 1,
        description: 'Hacer la compra',
        completed: false
    });
    expect(todoList.getTasks()).toHaveLength(1);
});

test('marcar tarea como completada', () => {
    const todoList = new TodoList();
    const task = todoList.addTask('Hacer la compra');
    todoList.completeTask(task.id);
    expect(todoList.getTasks()[0].completed).toBe(true);
});

test('eliminar tarea', () => {
    const todoList = new TodoList();
    const task = todoList.addTask('Hacer la compra');
    todoList.removeTask(task.id);
    expect(todoList.getTasks()).toHaveLength(0);
});

test('agregar tarea con descripción vacía', () => {
    const todoList = new TodoList();
    expect(() => todoList.addTask('')).toThrow('La descripción de la tarea no puede estar vacía.');
});

test('marcar tarea inexistente como completada', () => {
    const todoList = new TodoList();
    expect(() => todoList.completeTask(1)).toThrow('La tarea con el ID especificado no existe.');
});
