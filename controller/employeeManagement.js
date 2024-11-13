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

const updateEmployee = async (req, res) => {
    const updates = req.body; 
console.log(updates)
    try {
        const updatedEmployee = await User.findOneAndReplace(
            { EmployeeId: updates.EmployeeId },
            updates, 
            { new: true }  // Return the updated document
        );

        if (updatedEmployee) {
            return res.status(200).json(updatedEmployee);  // Successfully updated
        } else {
            return res.status(404).json("Employee not found");  // No employee found
        }
    } catch (error) {
        res.status(500).json({ message: error.message });  // Internal server error
    }
};


module.exports = { getEmployees, updateEmployee };