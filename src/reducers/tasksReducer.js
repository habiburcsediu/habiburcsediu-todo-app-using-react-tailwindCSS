const initialTasks = [
  {
    id: 0,
    text: "Visit Kolatoli",
    checked: false,
  },
  {
    id: 1,
    text: "Eat traditional seafood",
    checked: false,
  },
  {
    id: 2,
    text: "Tracking Himchori hill",
    checked: false,
  },
];

const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case "added":
      return [
        ...tasks,
        { id: action.id, text: action.text, checked: action.checked },
      ];
    case "deleted":
      return tasks.filter((task) => {
        return action.id != task.id;
      });
    case "checked":
      return tasks.map((task) => {
        if (task.id === action.id) {
          task.checked = action.checked;
        }
        return task;
      });
    case "updated":
      return tasks.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        }
        return task;
      });
    default:
      return tasks;
  }
};

export { initialTasks, tasksReducer };
