// import React, { useReducer, useState } from "react";

// // Initial state for our tasks
// const initialState = {
//   tasks: [],
// };

// // Reducer function to handle CRUD operations
// const taskReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TASK":
//       return {
//         ...state,
//         tasks: [...state.tasks, action.payload],
//       };
//     case "UPDATE_TASK":
//       return {
//         ...state,
//         tasks: state.tasks.map((task) =>
//           task.id === action.payload.id ? action.payload : task
//         ),
//       };
//     case "DELETE_TASK":
//       return {
//         ...state,
//         tasks: state.tasks.filter((task) => task.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

// function CrudReducer() {
//   const [state, dispatch] = useReducer(taskReducer, initialState);
//   const [newTask, setNewTask] = useState("");

//   const handleAddTask = () => {
//     if (newTask.trim() !== "") {
//       const task = {
//         id: Date.now(), // You can use a more robust ID generation method
//         text: newTask,
//       };
//       dispatch({ type: "ADD_TASK", payload: task });
//       setNewTask("");
//     }
//   };

//   const handleUpdateTask = (task) => {
//     // In a real application, you would provide an interface to edit the task
//     // Here, we'll just set it to a new value for simplicity
//     const updatedTask = {
//       ...task,
//       text: task.text + " (Updated)",
//     };
//     dispatch({ type: "UPDATE_TASK", payload: updatedTask });
//   };

//   const handleDeleteTask = (taskId) => {
//     dispatch({ type: "DELETE_TASK", payload: taskId });
//   };

//   return (
//     <div>
//       <h1>Task List</h1>
//       <input
//         type="text"
//         placeholder="New Task"
//         value={newTask}
//         onChange={(e) => setNewTask(e.target.value)}
//       />
//       <button onClick={handleAddTask}>Add Task</button>
//       <ul>
//         {state.tasks.map((task) => (
//           <li key={task.id}>
//             {task.text}
//             <button onClick={() => handleUpdateTask(task)}>Update</button>
//             <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default CrudReducer;


import React, { useReducer, useState } from "react";

// Initial state for our tasks
const initialState = {
  tasks: [],
};

// Reducer function to handle CRUD operations
const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

function CrudReducer() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const task = {
        id: Date.now(), // You can use a more robust ID generation method
        text: newTask,
      };
      dispatch({ type: "ADD_TASK", payload: task });
      setNewTask("");
    }
  };

  const handleUpdateTask = (task) => {
    // In a real application, you would provide an interface to edit the task
    // Here, we'll just set it to a new value for simplicity
    const updatedTask = {
      ...task,
      text: task.text + " (Updated)",
    };
    dispatch({ type: "UPDATE_TASK", payload: updatedTask });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({ type: "DELETE_TASK", payload: taskId });
  };

  return (
    <div>
      <h1>Task List</h1>
      <input
        type="text"
        placeholder="New Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      
      <button onClick={handleAddTask}>Add Task</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.tasks.map((task,index) => (
            <tr key={task.id}>
              <td>{index + 1}</td>
              <td>{task.text}</td>
              <td>
                <button onClick={() => handleUpdateTask(task)}>Update</button>
                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CrudReducer;
