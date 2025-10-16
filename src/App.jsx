import React, { useState } from 'react';

/**
 * Functional React component that displays a personalized welcome message.
 * @param {object} props - The component props.
 * @param {string} props.name - The name of the student to greet.
 */
const Welcome = ({ name }) => {
  return (
    <div className="p-5 bg-white rounded-xl shadow-lg mb-4 text-center border border-indigo-200 transition duration-300 hover:shadow-xl hover:scale-[1.01] hover:border-indigo-400">
      <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
        Welcome, <span className="text-indigo-600">{name}!</span>
      </h2>
      <p className="text-md text-gray-500 mt-1 italic">
        We're glad to see you on your student dashboard.
      </p>
    </div>
  );
};

// Main application component to handle state and user input
const App = () => {
  // 1. State for the list of students
  const [students, setStudents] = useState([
    "Deepak", 
    "Sarah Johnson", 
    "Alex Chen", 
    "Jamie Lee"
  ]);

  // 2. State for the name currently being typed into the input field
  const [newName, setNewName] = useState('');

  // 3. Event handler to add a new student
  const handleAddStudent = () => {
    // Check if the input is not empty (and not just spaces)
    const trimmedName = newName.trim();
    if (trimmedName) {
      // Add the new student to the existing list
      setStudents([...students, trimmedName]);
      // Clear the input field after adding the name
      setNewName('');
    }
  };
  
  // 4. Handle 'Enter' key press in the input field
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddStudent();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-12 font-sans">
      <div className="max-w-2xl mx-auto">
        
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 border-b-4 border-indigo-400 pb-3 inline-block">
            Student Dashboard
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Add a student to see their personalized greeting!
          </p>
        </header>

        {/* --- Input and Button Section --- */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 p-6 bg-white rounded-xl shadow-md border border-gray-100">
          <input
            type="text"
            placeholder="Enter new student name..."
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-grow p-3 border-2 border-indigo-200 rounded-lg focus:outline-none focus:border-indigo-500 transition duration-150 text-lg"
          />
          <button
            onClick={handleAddStudent}
            className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-200 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            Add Student
          </button>
        </div>
        
        {/* --- Personalized Greetings Section --- */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Total Greetings Displayed: <span className="text-indigo-600 font-extrabold">{students.length}</span>
          </h2>
          
          {/* Render the Welcome component dynamically from state. */}
          {students.map((name, index) => (
            <Welcome 
              key={name + index} // Use name and index for a more unique key
              name={name} 
            />
          ))}
          
          {/* Message if no students are present */}
          {students.length === 0 && (
            <p className="text-center text-gray-500 italic p-10 bg-white rounded-xl shadow-inner">
              No students added yet. Use the input above to get started!
            </p>
          )}

        </section>
      </div>
    </div>
  );
};

export default App;
