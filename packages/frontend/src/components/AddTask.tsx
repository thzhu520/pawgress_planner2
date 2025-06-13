import { useState, useEffect } from "react";
import "./style.css";

export default function AddTask() {
  const [taskName, setTaskName] = useState("");
  const [petName, setPetName] = useState("");
  const [repeat, setRepeat] = useState("Once");
  const [pets, setPets] = useState([]);
  const [loadingPets, setLoadingPets] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/pets")
      .then(res => res.json())
      .then(data => setPets(data))
      .catch(console.error)
      .finally(() => setLoadingPets(false));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("http://localhost:3000/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: taskName, petName, repeat }),
    });
    setTaskName("");
  };

  return (
    <div className="container">
      <div className="card">
        <h3>Create Task</h3>

        {loadingPets ? <p>Loading pets...</p> : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="taskname">Task Name:</label><br />
            <input
              id="taskname"
              value={taskName}
              onChange={e => setTaskName(e.target.value)}
            /><br /><br />

            <label htmlFor="petSelect">Assign to Pet:</label><br />
            <select
              id="petSelect"
              value={petName}
              onChange={e => setPetName(e.target.value)}
            >
              {pets.map((p: any) => (
                <option key={p._id}>{p.name}</option>
              ))}
            </select><br /><br />

            <label htmlFor="repeatSelect">Repeat:</label><br />
            <select
              id="repeatSelect"
              value={repeat}
              onChange={e => setRepeat(e.target.value)}
            >
              <option>Once</option>
              <option>Daily</option>
              <option>Weekly</option>
            </select><br /><br />

            <button type="submit">Create Task</button>
          </form>
        )}
      </div>
    </div>
  );
}
