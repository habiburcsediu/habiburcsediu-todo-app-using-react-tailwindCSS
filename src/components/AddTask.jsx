import React, { useContext, useState } from "react";
import { FaEdit } from "react-icons/fa";
import TaskList from "./TaskList";
import {
  useTasksContext,
  useTasksDispatchContext,
} from "../contexts/tasksContext";


const AddTask = () => {
  const [text, setText] = useState("");
  const tasks = useTasksContext();
  const dispatch = useTasksDispatchContext();

  return (
    <>
      <div className="mt-5 flex justify-center items-center gap-3">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="appearance-none w-[25%] px-2 py-1 text-md rounded text-black border dark:border-none outline-none"
          type="text"
          placeholder="Add task"
          autoComplete="of"
        />
        <button
          onClick={() => {
            setText("");
            dispatch({
              type: "added",
              id: tasks.length,
              text: text,
              checked: false,
            });
          }}
          className="bg-blue-500 hover:bg-blue-700 duration-300 p-2 text-md rounded"
          type="button"
        >
          <FaEdit color="#fff" />
        </button>
      </div>
      <TaskList />
    </>
  );
};

export default AddTask;
