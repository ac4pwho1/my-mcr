import express from "express";
import userRoutes from "./routes/userRoutes";

const app = express();
const port = process.env.PORT || 8888;

app.use(express.json());
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
