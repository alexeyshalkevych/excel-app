class TableSelection {
  static className = 'selected';

  constructor() {
    this.group = [];
    this.current = null;
  }

  select($element) {
    this.clear();

    $element.focus().addClass(TableSelection.className);
    this.group.push($element);
    this.current = $element;
  }

  selectGroup($group = []) {
    this.clear();

    this.group = $group;
    this.group.forEach(element => element.addClass(TableSelection.className));
  }

  get selectedIds() {
    return this.group.map($element => $element.id());
  }

  clear() {
    this.group.forEach($element =>
      $element.removeClass(TableSelection.className),
    );
    this.group = [];
  }

  applyStyle(style) {
    this.group.forEach($element => $element.css(style));
  }
}

export default TableSelection;
