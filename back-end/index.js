const express = require("express");
const cors = require("cors");

require("dotenv").config();

const usersRoute = require("./routes/admin");
const votersRoute = require("./routes/voter");
const electionsRoute = require("./routes/election");

const app = express();

app.use(cors());
app.use(express.json());
require("./middlewares/passport");

//ROUTES
app.use("/api/admins", usersRoute);
app.use("/api/voters", votersRoute);
app.use("/api/elections", electionsRoute);

console.log("DB URL",process.env.DATABASE_URL);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (error) => {
  if (error) console.log("Unable to start the server");
  else console.log(`Server listening on port ${PORT}`);
});
