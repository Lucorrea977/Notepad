export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task,
  });
  
  export const removeTask = (index) => ({
    type: 'REMOVE_TASK',
    payload: index,
  });
  
  export const toggleTask = (index) => ({
    type: 'TOGGLE_TASK',
    payload: index,
  });
  