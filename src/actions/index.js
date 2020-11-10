let nextTodoId = 0;
export const addTodo = (value) => {
    return {
        type: "ADD_TODO",
        id: nextTodoId++,
        title: value,
        done: false,
    }
}

export const removeTodo = (id) => {
    return {
        type: "REMOVE_TODO",
        id,
    }
}

export const toggleTodo = (id) => {
    return {
        type: "TOGGLE_TODO",
        id,
    }
}