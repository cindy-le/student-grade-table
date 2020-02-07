class App{
  constructor(gradeTable){
    this.gradeTable = gradeTable,
    this.handleGetGradesError = this.handleGetGradesError.bind(this)
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);

    var sum = 0;
    for (var i= 0; i < grades.length;i++) {
      sum += grades[i].grade
      var average = (sum / grades.length)
    }
    console.log(sum)
    console.log(average)
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
}
