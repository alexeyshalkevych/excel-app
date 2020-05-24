import ExcelComponent from '../../core/ExcelComponent';
import { $ } from '../../core/dom';
import { changeTitle } from '../../redux/actions/actions';
import { defaultTitle } from '../../constants/defaultStyles';
import { debounce } from '../../utils/utils';

class Header extends ExcelComponent {
  static className = 'excel__header';

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input'],
      ...options,
    });
  }

  prepare() {
    this.onInput = debounce(this.onInput, 200);
  }

  toHTML() {
    const { title } = this.store.getState() || defaultTitle;

    return `
      <input
        type="text"
        class="excel__header-input"
        value="${title}"
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

  onInput(event) {
    const $target = $(event.target);
    this.$dispatch(changeTitle($target.text()));
  }
}

export default Header;
