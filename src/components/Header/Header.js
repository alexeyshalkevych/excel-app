import ExcelComponent from '../../core/ExcelComponent';

class Header extends ExcelComponent {
  static className = 'excel__header';

  toHTML() {
    return `
      <input
        type="text"
        class="excel__header-input"
        value="Новая таблица"
      />
      <div>
        <div class="excel__header-button">
          <i class="material-icons">delete</i>
        </div>
        <div class="excel__header-button">
          <i class="material-icons">exit_to_app</i>
        </div>
      </div>
    `;
  }
}

export default Header;
