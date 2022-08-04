const express = require("express");
const usersRoute = require("./routes/admin");

const app = express();
app.use(express.json());

//ROUTES
app.use("/api/admins", usersRoute);

app.listen(3005, (error) => {
  if (error) console.log("Unable to start the server");
  else console.log("server listening on port 3005");
});
