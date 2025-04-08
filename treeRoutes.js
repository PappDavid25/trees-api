import express from "express";
import * as treeControllers from "./treeController.js";

const router = express.Router();

router.get("/trees", treeControllers.getAllTrees);
router.get("/trees:id", treeControllers.getTreeById);
router.put("/trees:id", treeControllers.updateTree);
router.post("/trees", treeControllers.createTree);
router.delete("/trees:id", treeControllers.deleteTree);

export default router;
