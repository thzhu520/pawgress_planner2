import { useEffect, useState } from "react";
import "./style.css";

export default function TaskHistory() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/tasks")
      .then(res => res.json())
      .then(setTasks)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h3>Task History</h3>
        {loading ? (
          <p>Loading tasks...</p>
        ) : (
          tasks.map((task: any) => (
            <p key={task._id}>✔️ {task.name} for <strong>{task.petName || "Unknown"}</strong> — Repeat: {task.repeat}</p>
          ))
        )}
      </div>
    </div>
  );
}
