import express from "express";
import config from "config";
import userModel from "../../models/Users/Users.js";

const router = express.Router();

// Get all users API
router.get("/getallusers", async (req, res) => {
  try {
    const users = await userModel.find();
    if (!users || users.length === 0) {
      return res.status(404).json({ msg: "No users found." });
    }
    res.status(200).json({
      msg: "Users retrieved successfully.",
      users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ msg: "An error occurred while fetching users." });
  }
});

// Get user by ID API
router.get("/getuser/:id", async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: "User not found." });
    }
    res.status(200).json({
      msg: "User retrieved successfully.",
      user,
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ msg: "An error occurred while fetching the user." });
  }
});

// Add a new user API
router.post("/adduser", async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).json({
      msg: "User added successfully.",
      user: newUser,
    });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ msg: "An error occurred while adding the user." });
  }
});

// Edit user by ID API
router.put("/edituser/:id", async (req, res) => {
  try {
    const updatedUser = await userModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ msg: "User not found." });
    }
    res.status(200).json({
      msg: "User updated successfully.",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ msg: "An error occurred while updating the user." });
  }
});

// Delete user by ID API
router.delete("/deleteuser/:id", async (req, res) => {
  try {
    const deletedUser = await userModel.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ msg: "User not found." });
    }
    res.status(200).json({
      msg: "User deleted successfully.",
      user: deletedUser,
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ msg: "An error occurred while deleting the user." });
  }
});

// Delete all users API
router.delete("/deleteallusers", async (req, res) => {
  try {
    await userModel.deleteMany();
    res.status(200).json({ msg: "All users deleted successfully." });
  } catch (error) {
    console.error("Error deleting all users:", error);
    res.status(500).json({ msg: "An error occurred while deleting all users." });
  }
});

export default router;