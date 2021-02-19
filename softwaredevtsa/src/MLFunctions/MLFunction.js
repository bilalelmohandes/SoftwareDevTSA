// This is going to export the function that returns the ML Function
const csv = require("csv-parser");
const fs = require("fs");
const { Matrix, pseudoInverse } = require("ml-matrix");

/*
The following are the feature mappings

Gender --> 0 = Male, 1 = Female
Address --> 0 = Rural, 1 = Urban
FamSize --> 0 = Greater than 3, 1 = Less than 3
Parent Status --> 0 = Divorced, 1 = Together
Mother's Job --> 0 = teacher, 1 = health, 2 = public service, 3 = stay at home, 4 = other
Father's Job --> 0 = teacher, 1 = health, 2 = public service, 3 = stay at home, 4 = other
Legal Guardian --> 0 = Mother, 1 = Father, 2 = Other
Travel time to school --> 1 = Less than 15 min, 2 = 15 to 30 min, 3 = 30 min to 1 hour, 4 = more than one hour
Study time per week --> 1 = Less than 2 hours, 2 = 2 to 5 hours, 3 = 5 to 10 hours, 4 = more than 10 hours






*/

// This function will read and parse the dataset
const readFile = async () => {
  const results = [];
  fs.createReadStream("src/Dataset.csv")
    .pipe(csv({ separator: ";" }))
    .on("data", (data) => results.push(data))
    .on("end", () => {
        regurlizeFeatures(results);
    });
};

// The following function is going to reguralize the features to make them all 0's and 1's and not letters
// to prepare them for transposition
const regurlizeFeatures = (results) => {
    results.forEach((eachStudent) => {
        delete eachStudent.school;
    })
}

const generateEquation = (results) => {
  const theYMatrix = [];
  results.forEach((student) => {
    theYMatrix.push([student.G3]);
  });

  results.forEach((eachStudent) => {
    delete eachStudent.G1;
    delete eachStudent.G2;
    delete eachStudent.G3;
  });

  const theXMatrix = [];
  results.forEach((student) => {
    const eachStudent = [];
    Object.keys(student).forEach((key) => {
      eachStudent.push(student[key]);
    });
    theXMatrix.push(eachStudent);
  });


  const X = new Matrix(theXMatrix);
  const Y = new Matrix(theYMatrix);

  const leftInterior = X.transpose().mmul(X);
  console.log(leftInterior)
  const leftSide = pseudoInverse(leftInterior);

  const rightSide = X.transpose(Y);

  const theta = leftSide.mmul(rightSide);

};

readFile();
