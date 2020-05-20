import ExcelComponent from '../../core/ExcelComponent';
import createTable from './table.template';
import handleResize from './table.resize';
import shouldResize from './table.functions';

class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown'],
    });
  }

  toHTML() {
    return createTable(20);
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      handleResize(this.$root, event);
    }
  }
}

export default Table;
