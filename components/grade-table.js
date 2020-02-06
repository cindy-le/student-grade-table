class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    for (var i = 0; i < grades.length; i++) {
      var row = document.createElement("tr");
      var name = document.createElement("td");
      name.textContent = grades[i].name;
      var course = document.createElement("td");
      course.textContent = grades[i].course;
      var grade = document.createElement("td");
      grade.textContent = grades[i].grade;
      row.append(name, course, grade);
      document.querySelector("tbody").appendChild(row)
    }
  }
}
