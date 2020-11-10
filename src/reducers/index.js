const initialState = {
    todos: [
        {id: 0, title: "JavaScript"},
        {id: 1, title: "React"},
        {id: 2, title: "TypeScript"},
    ]
};

const todoReducer = (state = initialState, actioon) => {
    switch(actioon.type) {
        default:
            return state;
    }
}

export default todoReducer;