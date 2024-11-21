/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  // Adding new fields to make student info more robust in my form
  age: {
    type: Sequelize.INTEGER,  // Store age as an integer
    allowNull: false
  },

  yearInSchool: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,  
    allowNull: false,
    unique: true,  //i need to force user to enter unique email
    validate: {
      isEmail: true //i think this validates the field?
    }
  },

  address: {
    type: Sequelize.STRING, 
    allowNull: true
  },

  gpa: {
    type: Sequelize.DECIMAL(3, 2),  // GPA with two decimal places
    allowNull: false,
  },

  campusId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  
});

// Export the student model
module.exports = Student;