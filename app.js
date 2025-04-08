import express from "express";
import treeRoutes from "./treeRoutes";

const app = express();

app.use(express.json());
app.use("/", treeRoutes);

app.listen(3010, () => {
  console.log("Server runs on port 3010");
});
