const express = require("express");
const cors = require("cors");
const usersRoute = require("./routes/admin");
const votersRoute = require("./routes/voter");
const app = express();
app.use(cors());
app.use(express.json());

//ROUTES
app.use("/api/admins", usersRoute);
app.use("/api/voters", votersRoute);

app.listen(3005, (error) => {
  if (error) console.log("Unable to start the server");
  else console.log("server listening on port 3005");
});
