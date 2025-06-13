import { useState } from "react";
import "./style.css";

export default function AddEditPet() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("http://localhost:3001/api/pets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, type, breed, age: Number(age) }),
    });
    setName("");
    setType("");
    setBreed("");
    setAge("");
  };

  return (
    <div className="container">
      <div className="card">
        <h3>Add or Edit Pet</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label><br />
          <input id="name" value={name} onChange={e => setName(e.target.value)} /><br /><br />

          <label htmlFor="type">Type:</label><br />
          <input id="type" value={type} onChange={e => setType(e.target.value)} /><br /><br />

          <label htmlFor="breed">Breed:</label><br />
          <input id="breed" value={breed} onChange={e => setBreed(e.target.value)} /><br /><br />

          <label htmlFor="age">Age:</label><br />
          <input id="age" type="number" value={age} onChange={e => setAge(e.target.value)} /><br /><br />

          <button type="submit">Save Pet</button>
        </form>
      </div>
    </div>
  );
}
