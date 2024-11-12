const data = [
  {
      "EmployeeId": "C001",
      "EmployeeName": "Emma Thompson",
      "ReportingManager": null, // Top-level, no manager above CEO
      "Designation": "CEO",
      "Role": "Admin",
      "DateOfBirth": "1970-01-15",
      "EmailId": "emma.thompson@cprime.com",
      "JoiningDate": "1995-06-01",
      "Department": "Executive",
      "Location": "Head Office"
  },
  {
      "EmployeeId": "C002",
      "EmployeeName": "Robert Andrews",
      "ReportingManager": "C001",
      "Designation": "CFO",
      "Role": "Admin",
      "DateOfBirth": "1972-04-22",
      "EmailId": "robert.andrews@cprime.com",
      "JoiningDate": "2000-08-12",
      "Department": "Finance",
      "Location": "Head Office"
  },
  {
      "EmployeeId": "C003",
      "EmployeeName": "Sophia Green",
      "ReportingManager": "C001",
      "Designation": "CTO",
      "Role": "Admin",
      "DateOfBirth": "1975-10-03",
      "EmailId": "sophia.green@cprime.com",
      "JoiningDate": "2005-04-20",
      "Department": "Technology",
      "Location": "Head Office"
  },
  {
      "EmployeeId": "C004",
      "EmployeeName": "Michael Scott",
      "ReportingManager": "C002",
      "Designation": "Finance Manager",
      "Role": "User",
      "DateOfBirth": "1980-12-15",
      "EmailId": "michael.scott@cprime.com",
      "JoiningDate": "2010-09-05",
      "Department": "Finance",
      "Location": "Chennai"
  },
  {
      "EmployeeId": "C005",
      "EmployeeName": "Linda Kim",
      "ReportingManager": "C003",
      "Designation": "Engineering Manager",
      "Role": "User",
      "DateOfBirth": "1985-05-30",
      "EmailId": "linda.kim@cprime.com",
      "JoiningDate": "2012-03-15",
      "Department": "Engineering",
      "Location": "Bangalore"
  },
  {
      "EmployeeId": "C006",
      "EmployeeName": "David Brown",
      "ReportingManager": "C005",
      "Designation": "Software Engineer",
      "Role": "User",
      "DateOfBirth": "1990-07-25",
      "EmailId": "david.brown@cprime.com",
      "JoiningDate": "2018-07-01",
      "Department": "Engineering",
      "Location": "Chennai"
  },
  {
      "EmployeeId": "C007",
      "EmployeeName": "Elena Garcia",
      "ReportingManager": "C005",
      "Designation": "Software Engineer",
      "Role": "User",
      "DateOfBirth": "1992-11-18",
      "EmailId": "elena.garcia@cprime.com",
      "JoiningDate": "2019-02-10",
      "Department": "Engineering",
      "Location": "Bangalore"
  },
  {
      "EmployeeId": "C008",
      "EmployeeName": "Mark Wilson",
      "ReportingManager": "C004",
      "Designation": "Accountant",
      "Role": "User",
      "DateOfBirth": "1988-09-09",
      "EmailId": "mark.wilson@cprime.com",
      "JoiningDate": "2015-10-15",
      "Department": "Finance",
      "Location": "Chennai"
  },
  {
      "EmployeeId": "C009",
      "EmployeeName": "Sara Li",
      "ReportingManager": "C003",
      "Designation": "IT Manager",
      "Role": "User",
      "DateOfBirth": "1982-06-21",
      "EmailId": "sara.li@cprime.com",
      "JoiningDate": "2009-12-18",
      "Department": "IT",
      "Location": "Head Office"
  },
  {
      "EmployeeId": "C010",
      "EmployeeName": "Tommy Lee",
      "ReportingManager": "C009",
      "Designation": "System Administrator",
      "Role": "User",
      "DateOfBirth": "1995-08-14",
      "EmailId": "tommy.lee@cprime.com",
      "JoiningDate": "2021-11-05",
      "Department": "IT",
      "Location": "Chennai"
  }
];
module.exports = data;