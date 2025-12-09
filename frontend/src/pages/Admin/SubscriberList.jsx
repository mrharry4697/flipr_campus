import { useEffect, useState } from "react";

export default function SubscriberList() {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/subscribe")
      .then((res) => res.json())
      .then((data) => setSubs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Subscribed Emails</h2>

      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Email</th>
            <th className="border p-2">Subscribed On</th>
          </tr>
        </thead>

        <tbody>
          {subs.map((s) => (
            <tr key={s.id}>
              <td className="border p-2">{s.email}</td>
              <td className="border p-2">{s.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
