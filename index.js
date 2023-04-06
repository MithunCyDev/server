const express = require("express");
const bcrypt = require("bcrypt");
const { json } = require("express");
const app = express();

app.use(express.json());

app.post("/mithun", (req, res) => {
  // in the request body come data from the clint or fontEnd
  console.log(req.body);
  // Distructure the body element from req.body
  const { title, role, id, password } = req.body;
  // if there is no title, role, id then it will be response error message
  if (!title || !role || !id) {
    // I will pass or fail a response message backEnd to fontEnd with the status code
    res.status(400).json({ message: "It Fail" });
  } else {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const Password = hash

    res.status(200).json({ title, role, Password, id });
  }
});

app.listen(3000, () => {
  console.log("Server Running");
});
