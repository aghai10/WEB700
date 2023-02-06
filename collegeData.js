const fs = require("fs");

class Data {
  constructor(students, courses) {
    this.students = students;
    this.courses = courses;
  }
}

let dataCollection = null;

const initialize = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("C:\BTT sem2\WEB\A2\data\students.json", "utf8", (err, studentsDataFromFile) => {
      if (err) {
        reject("Unable to read students.json");
        return;
      }
      fs.readFile("C:\BTT sem2\WEB\A2\data\courses.json", "utf8", (err, coursesDataFromFile) => {
        if (err) {
          reject("Unable to read courses.json");
          return;
        }
        let students = JSON.parse(studentsDataFromFile);
        let courses = JSON.parse(coursesDataFromFile);
        dataCollection = new Data(students, courses);
        resolve();
      });
    });
  });
};

const getAllStudents = () => {
  return new Promise((resolve, reject) => {
    if (dataCollection.students.length === 0) {
      reject("No results returned");
      return;
    }
    resolve(dataCollection.students);
  });
};

const getTAs = () => {
  return new Promise((resolve, reject) => {
    let TAs = dataCollection.students.filter(student => student.TA === true);
    if (TAs.length === 0) {
      reject("No results returned");
      return;
    }
    resolve(TAs);
  });
};

const getCourses = () => {
  return new Promise((resolve, reject) => {
    if (dataCollection.courses.length === 0) {
      reject("No results returned");
      return;
    }
    resolve(dataCollection.courses);
  });
};

module.exports = {
  initialize,
  getAllStudents,
  getTAs,
  getCourses
};
