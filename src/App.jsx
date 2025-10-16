// src/App.jsx
import React from "react";
import Welcome from "./Welcome";

function App() {
  const students = ["Deepak", "Aisha", "Rahul", "Sneha"];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Student Dashboard</h1>
      {students.map((student, index) => (
        <Welcome key={index} name={student} />
      ))}
    </div>
  );
}

export default App;
