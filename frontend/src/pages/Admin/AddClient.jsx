import { useState } from "react";

function AddClient() {
  const [clients, setClients] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      setClients((prev) => [...prev, data]);

      setFormData({
        name: "",
        designation: "",
        description: "",
        image: "",
      });
    } catch (err) {
      console.error("Error adding client:", err);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Add Client</h2>

      <form className="grid gap-4 max-w-xl" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Client Name"
          className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />

        <input
          type="text"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          placeholder="Designation"
          className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />

        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Client Image URL"
          className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Client Description"
          className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Client
        </button>
      </form>

      {clients.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Clients List</h3>
          <ul className="space-y-2">
            {clients.map((c) => (
              <li key={c.id} className="border px-4 py-2 rounded-md">
                <strong>{c.name}</strong> ({c.designation}) — {c.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AddClient;
