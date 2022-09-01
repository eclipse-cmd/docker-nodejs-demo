import express from "express";

const app = express();

app.get("/", (_, res) => res.json({ message: "Docker is very easy 🐳" }));

const port = process.env.PORT || 5050;

app.listen(port, () =>
  console.log(`🔥 App listening on http://localhost:${port}`)
);
