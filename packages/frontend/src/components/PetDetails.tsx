import { useEffect, useState } from "react";
import "./style.css";

export default function PetDetails() {
  const [pets, setPets] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:3001/api/pets").then(res => res.json()),
      fetch("http://localhost:3001/api/tasks").then(res => res.json())
    ])
      .then(([petData, taskData]) => {
        setPets(petData);
        setTasks(taskData);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      {loading ? (
        <p>Loading pet details...</p>
      ) : (
        <div className="dashboard-grid">
          {pets.map((pet: any) => (
            <div className="card" key={pet._id}>
              <h3>{pet.name}</h3>
              <p>Type: {pet.type}</p>
              <p>Breed: {pet.breed || "N/A"}</p>
              <p>Age: {pet.age || "N/A"}</p>
              <h4>Tasks:</h4>
              <ul>
                {tasks.filter((task: any) => task.petName === pet.name).length > 0 ? (
                  tasks
                    .filter((task: any) => task.petName === pet.name)
                    .map((task: any) => (
                      <li key={task._id}>{task.name} ({task.repeat})</li>
                    ))
                ) : (
                  <li>— No individual tasks linked yet</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
