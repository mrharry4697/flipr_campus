const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const projectRoutes = require("./routes/projects");
const clientRoutes = require("./routes/clients");
const contactRoutes = require("./routes/contacts");
const subscriberRoutes = require("./routes/subscribers"); // ← added

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/subscribe", subscriberRoutes); // ← added

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
