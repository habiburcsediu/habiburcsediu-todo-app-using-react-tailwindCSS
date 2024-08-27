import {createContext, useContext} from "react";

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

function useTasksContext() {
    return useContext(TasksContext);
}

function useTasksDispatchContext() {
    return useContext(TasksDispatchContext);
}

export {
    TasksContext,
    TasksDispatchContext,
    useTasksContext,
    useTasksDispatchContext
};