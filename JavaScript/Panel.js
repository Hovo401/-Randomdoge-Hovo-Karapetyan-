class Panel {
  static panelDoc = document.getElementById('modal');
  static panelDocCloseBut = this.panelDoc.getElementsByClassName('close');
  static panelDocContent = document.getElementById('modal-content');

  static Open(block) {
    this.panelDoc.style.display = 'block';
    this.panelDocContent.innerHTML = '';
    this.panelDocContent.appendChild(block.cloneNode(true));
  }
  static Close() {
    this.panelDoc.style.display = 'None';
  }
}

Panel.panelDoc.addEventListener('click', (e) => {
  if (e.srcElement.className.includes('PanelClose')) {
    Panel.Close()
  }
})