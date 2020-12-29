import React, { useEffect, useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    window.addEventListener("@teste/react-route/todo/add-task", (event) => {
      setTasks(oldTask => [...oldTask, event.detail]);
    });
  }, []);

  return (
    <div>
      <h1>Parcel</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.describe}</li>
        ))}
      </ul>
    </div>
  );
}
