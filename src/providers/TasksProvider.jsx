import React, { useReducer } from "react";
import { TasksContext, TasksDispatchContext } from "../contexts/tasksContext";
import { initialTasks, tasksReducer } from "../reducers/tasksReducer";

const TasksProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>{children}</TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
};

export default TasksProvider;
