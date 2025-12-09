import { useState } from "react";

function AdminLayout({ children }) {
  const [active, setActive] = useState("dashboard");

  const menu = [
    { name: "Dashboard", key: "dashboard" },
    { name: "Add Project", key: "addProject" },
    { name: "Add Client", key: "addClient" },
    { name: "Contact List", key: "contactList" },
    { name: "Subscribers", key: "subscribers" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col gap-3">
          {menu.map((item) => (
            <button
              key={item.key}
              className={`text-left px-3 py-2 rounded-md w-full ${
                active === item.key ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActive(item.key)}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">{children(active)}</main>
    </div>
  );
}

export default AdminLayout;
