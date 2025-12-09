import { useEffect, useState } from "react";
import ClientCard from "./ClientCard";

function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/clients")
      .then((res) => res.json())
      .then((data) => setClients(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Happy Clients</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {clients.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
