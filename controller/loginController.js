const userModel = require('../models/userModel');
const data = require('../data/data');

const loginController = async (request, response) => {
    // Seed database if empty
    const employee = await userModel.find();
    if (employee.length === 0) {
        await userModel.insertMany(data);
        console.log('Data seeded successfully!');
    }

    // Search for user by email
    const user_email = request.body.email;
    const user_details = await userModel.findOne({ EmailId: user_email });

    if (user_details) {
        return response.status(200).json({ role: user_details.Role });
    } else {
        return response.status(404).json({ message: "User not found" });
    }
};

module.exports = { loginController };

