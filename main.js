var tableElement = document.querySelector("tbody");
var newGradeTable = new GradeTable(tableElement);

var headerElement = document.querySelector("h3");
var newPageHeader = new PageHeader(headerElement);

var newApp = new App(newGradeTable);

newApp.start();
