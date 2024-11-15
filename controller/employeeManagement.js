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
    const updates = req.body;
    console.log(updates);
    try {
        const updatedEmployee = await User.findOneAndReplace(
            { EmployeeId: updates.EmployeeId },
            updates,
        );

        if (updatedEmployee) {
            return res.status(200).json(updatedEmployee); // Successfully updated
        } else {
            return res.status(404).json("Employee not found"); // No employee found
        }
    } catch (error) {
        res.status(500).json({ message: error.message }); // Internal server error
    }
};

// Search for employees by name
const searchEmployees = async (req, res) => {
    try {
        const searchData = req.params.searchData.trim(); // The search query from URL parameters
        // Use regex to perform a case-insensitive search on the EmployeeName field
        const filteredEmployees = await User.find({
            EmployeeName: { $regex: new RegExp(searchData, 'i') },
        });

        if (filteredEmployees.length > 0) {
            return res.status(200).json(filteredEmployees); // Return matching employees
        } else {
            return res.status(404).json({ message: "No employees found matching the search term" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message }); // Return server error message
    }
};

// Export all functions
module.exports = { getEmployees, updateEmployee, searchEmployees };
