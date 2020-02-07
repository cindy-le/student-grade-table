class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);

    var sum = 0;
    for (var i= 0; i < grades.length; i++) {
      sum += grades[i].grade;
    }
    var newAverage = (sum / grades.length);
    this.pageHeader.updateAverage(newAverage);
  }
  getGrades() {
    $.ajax({
      type: "GET",
      url: "http://sgt.lfzprototypes.com/api/grades",
      headers: {
        "X-Access-Token":"loWVzshS"
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
  }
  start() {
    this.getGrades();
  }
  createGrade(name, course, grade) {
    console.log(name);
    console.log(course);
    console.log(grade);
  }
  handleCreateGradeError(error) {
    console.error(error);
  }
  handleCreateGradeSuccess() {
    this.getGrades();
  }
}
