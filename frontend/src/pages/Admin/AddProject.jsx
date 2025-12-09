import { useState, useEffect } from "react";

function AddProject() {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
  });

  // Fetch existing projects from backend on component load
  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Project added:", data);
        // Add the new project to local state to show instantly
        setProjects([...projects, data]);
        setFormData({ name: "", description: "", image: "" });
      })
      .catch((err) => console.error("Error adding project:", err));
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Add Project</h2>
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Project Name"
          className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Project Image URL"
          className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Project Description"
          className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Project
        </button>
      </form>

      {/* Display added projects */}
      {projects.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Projects List</h3>
          <ul className="space-y-2">
            {projects.map((p) => (
              <li key={p.id} className="border px-4 py-2 rounded-md">
                <strong>{p.name}</strong> - {p.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AddProject;
