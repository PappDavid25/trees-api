import trees from "./trees.js";

export const getAllTrees = (req, res) => {
  res.status(200).json(trees);
};

export const getTreeById = (req, res) => {
  const id = req.params.id;
  if (id < 0 || id >= trees.length) {
    return res.status(404).json({ message: "Tree not found" });
  }
  res.status(200).json(trees[id]);
};

export const updateTree = (req, res) => {
  const id = req.params.id;
  if (id < 0 || id >= trees.length) {
    return res.status(404).json({ message: "Tree not found" });
  }
  const { name, category, price, isEvengreen } = req.body;
  if (!name || !category || !price || !isEvengreen) {
    return res.status(400).json({ message: "Missing data" });
  }
  trees[id] = { name, category, price, isEvergreen };
  res.status(200).json(trees[id]);
};

export const deleteTree = (req, res) => {
  const id = req.params.id;
  if (id < 0 || id >= trees.length) {
    return res.status(404).json({ message: "Tree not found" });
  }
  trees.splice(id, 1);
  res.status(200).json({ message: "The tree has been deleted successfully!" });
};

export const createTree = (req, res) => {
  const { name, category, price, isEvengreen } = req.body;
  if (!name || !category || !price || !isEvengreen) {
    return res.status(400).json({ message: "Missing data" });
  }
  const newTree = { name, category, price, isEvengreen };
  trees.push(newTree);
  res.status(201).json(newTree);
};
