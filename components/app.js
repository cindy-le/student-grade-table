class App{
  constructor(){
    this.handleGetGradesError = this.handleGetGradesError.bind(this)
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
  }
  handleGetGradesError(error) {
    console.error(error);
  }
  handleGetGradesSuccess(grades) {
    console.log(grades)
  }
  getGrades() {
    $.ajax({
      type: "GET",
      url: "http://sgt.lfzprototypes.com/api/grades",
      headers: {
        "X-Access-Token": "loWVzshS"
      }
      sucess: handleGetGradesSuccess();
      error: handleGetGradesError();
    })
  }
  start() {
    this.getGrades();
  }
}
