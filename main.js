var formElement = document.querySelector("form")
var gradeForm = new GradeForm(formElement)

var headerElement = document.querySelector("header")
var pageHeader = new PageHeader(headerElement)

var tableElement = document.querySelector("tbody")
var pElement = document.querySelector("p")
var gradeTable = new GradeTable(tableElement, pElement);

var newApp = new App(gradeTable, pageHeader, gradeForm);

newApp.start();
