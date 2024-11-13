const candidateModel = require("../models/onBoardModel");

const getCandidates = async (request, response) => {
  try {
    const response1 = await candidateModel.find();
    response.status(200).send(response1);
  } catch (err) {
    console.log(err);
    response.status(500).send({ message: "Failed to insert data" });
  }
};

const addCandidate = async (request, response) => {
  try {
    // console.log("Received request body:", request.body); // Log the request body to inspect structure

    const {
      Emp_id,
      Name,
      Email_id_official,
      Designation,
      Reporting_Manager,
      Email_id_personal,
      DOB,
      Mobile_no,
      Department,
      Location,
    } = request.body.formData; // Destructure directly from request.body

    const candidate_data = {
      Emp_id,
      Name,
      Email_id_official,
      Designation,
      Reporting_Manager,
      Email_id_personal,
      DOB,
      Mobile_no,
      Department,
      Location,
    };

    await candidateModel.create(candidate_data);
    response.status(200).send({ message: "Data Inserted Successfully" });
  } catch (err) {
    console.log("Error inserting data:", err);
    response.status(500).send({ message: "Failed to insert data" });
  }
};

const editCandidate = async (request, response) => {
  try {
    const {
      Emp_id,
      Name,
      Email_id_official,
      Designation,
      Reporting_Manager,
      Email_id_personal,
      DOB,
      Mobile_no,
      Department,
      Location,
    } = request.body.formData;
    const candidate_update = {
      Emp_id,
      Name,
      Email_id_official,
      Designation,
      Reporting_Manager,
      Email_id_personal,
      DOB,
      Mobile_no,
      Department,
      Location,
    };
    console.log(candidate_update);
    await candidateModel.updateOne(
      { Emp_id: candidate_update.Emp_id },
      candidate_update
    );
    response.status(200).send({ message: "Data Updated Successfully" });
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
};

const searhCandidates = async (request, response) => {
  try {
    const data = request.params.searchData;
    const filteredCandidates = await candidateModel.find({
      Name: { $regex: new RegExp(data, "i") },
    });
    return response.status(200).json(filteredCandidates);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCandidates,
  addCandidate,
  editCandidate,
  searhCandidates,
};
