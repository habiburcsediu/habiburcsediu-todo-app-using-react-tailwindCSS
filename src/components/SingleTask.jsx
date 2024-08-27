import { useState } from "react";
import { useTasksDispatchContext } from "../contexts/tasksContext";
import { IoMdClose } from "react-icons/io";

import { useTasksContext } from "../contexts/tasksContext";

const SingleTask = ({ task }) => {
  const dispatch = useTasksDispatchContext();
  const [isChecked, setIsChecked] = useState(false);
  const [isEdited, setIsEdited] = useState(false);

  const tasks = useTasksContext();

  let updatedContent;
  if (isEdited) {
    updatedContent = (
      <>
        <input
          className="text-black focus:outline-none rounded-sm border dark:border px-2"
          type="text"
          value={task.text}
          onChange={(e) =>
            dispatch({
              type: "updated",
              task: {
                ...task,
                text: e.target.value,
              },
            })
          }
        />
        <button
          className="border hover:border-transparent bg-green-500 hover:bg-green-700 px-5 rounded-sm"
          onClick={() => setIsEdited(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    updatedContent = (
      <>
        <span
          className={`${
            isChecked ? "line-through" : "no-underline"
          } text-black dark:text-white`}
        >
          {task.text}
        </span>
        <button
          className="border hover:border-transparent px-5 hover:bg-blue-500 rounded text-black hover:text-white dark:text-white"
          onClick={() => setIsEdited(!isChecked)}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <label className="flex justify-start items-center gap-4">
      <input
        disabled={isEdited}
        className="size-5"
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
          dispatch({
            type: "checked",
            id: task.id,
            checked: !isChecked,
          });
        }}
        type="checkbox"
      />

      {updatedContent}

      <button
        className="bg-red-500 hover:bg-red-700 text-2xl rounded-sm"
        onClick={() => {
          dispatch({
            type: "deleted",
            id: task.id,
          });
        }}
      >
        <IoMdClose color="white" />
      </button>
    </label>
  );
};

export default SingleTask;
