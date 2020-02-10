class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    var tbody = document.querySelector("tbody");
    tbody.textContent = "";
    for (var i = 0; i < grades.length; i++) {
      this.renderGradeRow(grades[i], this.deleteGrade);
      // var row = document.createElement("tr");
      // var name = document.createElement("td");
      // name.textContent = grades[i].name;
      // var course = document.createElement("td");
      // course.textContent = grades[i].course;
      // var grade = document.createElement("td");
      // grade.textContent = grades[i].grade;
      // row.append(name, course, grade);
      // tbody.appendChild(row)
    }
  }
  onDeleteClick(deleteGrade) {
    this.onDeleteClick = deleteGrade;
  }
  renderGradeRow(data, deleteGrade) {
    var tbodyEl = document.querySelector("tbody");
    var row = document.createElement("tr");
    var name = document.createElement("td");
    name.textContent = data.name;
    var course = document.createElement("td");
    course.textContent = data.course;
    var grade = document.createElement("td");
    grade.textContent = data.grade;
    var buttonTd = document.createElement("td");
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-danger");
    button.textContent = "DELETE";
    button.addEventListener("click", function (){
      deleteGrade(data.id)
    });
    buttonTd.appendChild(button);
    row.append(name, course, grade, buttonTd);
    tbodyEl.appendChild(row);
    return row;


    // var tbody = document.querySelector("tbody")
    // var tableRow = document.createElement("tr");
    // var tableData = document.createElement("td");
    // var button = document.createElement("button");
    // button.textContent = "DELETE";
    // button.setAttribute(class, "btn btn-danger");
    // tableData.textContent = button;
    // tableRow.appendChild(tableData);
    // tbody.append(tableRow);
    // button.addEventListener("click", deleteGrade(data.id));
    // return tableRow;
  }
}
