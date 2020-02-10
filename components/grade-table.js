class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
    // this.deleteGrade = null;
    // this.updateGrades = this.updateGrades.bind(this);
    // this.onDeleteClick = this.onDeleteClick.bind(this);
    // this.renderGradeRow = this.renderGradeRow.bind(this);
  }
  updateGrades(grades) {
    var tbody = document.querySelector("tbody");
    var pEl = document.querySelector("p");
    tbody.textContent = "";
    if (grades.length === 0) {
      pEl.classList.remove("d-none");
    } else {
      pEl.classList.add("d-none");
    }
    for (var i = 0; i < grades.length; i++) {
      this.renderGradeRow(grades[i], this.deleteGrade);
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
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
      deleteGrade(data.id);
    });
    buttonTd.appendChild(button);
    row.append(name, course, grade, buttonTd);
    tbodyEl.appendChild(row);
    return row;
  }
}
