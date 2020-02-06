var tableElement = document.querySelector("tbody")

var newGradeTable = new GradeTable(tableElement)
var newApp = new App(newGradeTable);

newApp.start();
