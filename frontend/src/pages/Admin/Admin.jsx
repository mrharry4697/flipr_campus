import AdminLayout from "./AdminLayout";
import Dashboard from "./Dashboard";
import AddProject from "./AddProject";
import AddClient from "./AddClient";
import ContactList from "./ContactList";
import SubscriberList from "./SubscriberList";

function Admin() {
  return (
    <AdminLayout>
      {(active) => {
        switch (active) {
          case "dashboard":
            return <Dashboard />;
          case "addProject":
            return <AddProject />;
          case "addClient":
            return <AddClient />;
          case "contactList":
            return <ContactList />;
          case "subscribers":
            return <SubscriberList />;
          default:
            return <Dashboard />;
        }
      }}
    </AdminLayout>
  );
}

export default Admin;
