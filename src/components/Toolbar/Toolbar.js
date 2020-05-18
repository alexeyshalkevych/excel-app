import ExcelComponent from '../../core/ExcelComponent';

class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar';
  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
    });
  }

  toHTML() {
    return `
      <div class="excel__toolbar-button">
        <i class="material-icons">format_align_left</i>
      </div>
      <div class="excel__toolbar-button">
        <i class="material-icons">format_align_center</i>
      </div>
      <div class="excel__toolbar-button">
        <i class="material-icons">format_align_right</i>
      </div>
      <div class="excel__toolbar-button">
        <i class="material-icons">format_bold</i>
      </div>
      <div class="excel__toolbar-button">
        <i class="material-icons">format_italic</i>
      </div>
      <div class="excel__toolbar-button">
        <i class="material-icons">format_underlined</i>
      </div>
    `;
  }

  onClick(event) {
    console.log(event.target);
  }
}

export default Toolbar;
