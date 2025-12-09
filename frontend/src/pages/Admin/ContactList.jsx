import { useEffect, useState } from "react";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/contacts")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Contact Submissions</h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Mobile</th>
            <th className="p-2 border">City</th>
            <th className="p-2 border">Date</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((c) => (
            <tr key={c.id}>
              <td className="border p-2">{c.full_name}</td>
              <td className="border p-2">{c.email}</td>
              <td className="border p-2">{c.mobile}</td>
              <td className="border p-2">{c.city}</td>
              <td className="border p-2">{c.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
