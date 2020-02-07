class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement
  }
  updateAverage(newAverage){
    var spanEl = document.querySelector('.badge')
    spanEl.textContent = newAverage;
  }
}
