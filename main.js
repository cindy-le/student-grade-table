var formElement = document.querySelector("form")
var newGradeForm = new GradeForm(formElement)

var headerElement = document.querySelector("header")
var pageHeader = new PageHeader(headerElement)

var tableElement = document.querySelector("tbody")
var newGradeTable = new GradeTable(tableElement)

var newApp = new App(newGradeTable, pageHeader);

newApp.start();
