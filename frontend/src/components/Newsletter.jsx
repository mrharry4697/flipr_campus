import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) return;

    try {
      const res = await fetch("http://localhost:5000/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Subscribed successfully!");
        setEmail("");
      } else {
        alert(data.error || "Subscription failed");
      }
    } catch (err) {
      console.error(err);
      alert("Error subscribing");
    }
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded border border-gray-300 flex-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
