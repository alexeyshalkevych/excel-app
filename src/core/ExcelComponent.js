import DomListener from './DomListener';

class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
  }

  // return component template
  toHTML() {
    return '';
  }

  init() {
    this.initDomListeners();
  }

  destroy() {
    this.removeDomListeners();
  }
}

export default ExcelComponent;
