const User = require('../models/userModel'); // Assuming `userModel.js` handles user schema

// Get all employees
const getEmployees = async (req, res) => {
    try {
        const employees = await User.find(); // Fetches all users
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update employee details
const updateEmployee = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updatedEmployee = await User.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedEmployee) return res.status(404).json({ message: "Employee not found" });
        res.status(200).json(updatedEmployee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = { getEmployees, updateEmployee };