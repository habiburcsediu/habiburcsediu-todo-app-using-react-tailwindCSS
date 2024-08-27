import React from "react";
import SingleTask from "./SingleTask";

import {useTasksContext} from '../contexts/tasksContext'

const TaskList = () => {
  const tasks = useTasksContext();
  return (
    <div className="flex justify-center items-center">
      <ul className="space-y-3 mt-5">
        {
          tasks.map((task) => (
            <li key={task.id}>
              <SingleTask task={task} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default TaskList;
