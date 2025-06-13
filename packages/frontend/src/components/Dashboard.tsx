import { useEffect, useState } from "react";
import "./style.css";

export default function Dashboard() {
  const [pets, setPets] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loadingPets, setLoadingPets] = useState(true);
  const [loadingTasks, setLoadingTasks] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/pets")
      .then(res => res.json())
      .then(setPets)
      .catch(console.error)
      .finally(() => setLoadingPets(false));

    fetch("http://localhost:3001/api/tasks")
      .then(res => res.json())
      .then(setTasks)
      .catch(console.error)
      .finally(() => setLoadingTasks(false));
  }, []);

  return (
    <div className="container dashboard-grid">
      <div className="card">
        <h3>Pets</h3>
        {loadingPets ? <p>Loading pets...</p> : (
          <ul>
            {pets.map((pet: any) => (
              <li key={pet._id}>
                {pet.name} — {pet.type}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="card">
        <h3>Tasks</h3>
        {loadingTasks ? <p>Loading tasks...</p> : (
          <ul>
            {tasks.map((task: any) => (
              <li key={task._id}>
                {task.name}{task.petName ? ` → ${task.petName}` : ""} ({task.repeat})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
