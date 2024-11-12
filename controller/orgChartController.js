const data = require('../data/data'); // Assuming the data is stored in a separate 'data.js' file

const orgChartController = async (request, response) => {
    try {
        const employees = data; // Use the static data instead of querying the database

        console.log('Fetched employees:', employees); // Log employees

        if (employees.length === 0) {
            return response.status(404).json({ message: "No employees found" });
        }

        // Function to build the org chart
        const buildOrgChart = (employees) => {
            const employeeMap = {};

            // Create a map of employees by EmployeeId, with an empty 'subordinates' array
            employees.forEach((employee) => {
                employeeMap[employee.EmployeeId] = { 
                    ...employee, // We assume data is already in the required format
                    subordinates: [] 
                };
            });

            const orgChart = [];

            // Build the org chart by grouping subordinates under their managers
            employees.forEach((employee) => {
                if (employee.ReportingManager) {
                    const manager = employeeMap[employee.ReportingManager];
                    if (manager) {
                        manager.subordinates.push(employeeMap[employee.EmployeeId]);
                    }
                } else {
                    // If no ReportingManager, this employee is at the top level
                    orgChart.push(employeeMap[employee.EmployeeId]);
                }
            });

            return orgChart;
        };

        // Build and log the org chart
        const orgChart = buildOrgChart(employees);
        console.log('Org Chart:', JSON.stringify(orgChart, null, 2)); // Log formatted org chart for debugging

        // Send the org chart as the response
        return response.status(200).json(orgChart);

    } catch (error) {
        console.error("Error fetching organization chart:", error.message);
        return response.status(500).json({ error: "Server error while fetching organization chart" });
    }
};

module.exports = { orgChartController };
