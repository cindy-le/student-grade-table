class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
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
  createGrade(name, course, grade) {
    $.ajax({
      type:"POST",
      url: "http://sgt.lfzprototypes.com/api/grades",
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      headers: {
        "X-Access-Token": "loWVzshS"
      },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError,
    })
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
  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
  }
  deleteGrade(id){
    console.log(id)
  }
  handleDeleteGradeError(error){
    console.error(error);
  }
  handleDeleteGradeSuccess() {
    this.getGrades();
  }
}
