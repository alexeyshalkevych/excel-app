import ExcelComponent from '../../core/ExcelComponent';
import { $ } from '../../core/dom';
import { changeTitle } from '../../redux/actions/actions';
import { defaultTitle } from '../../constants/defaultStyles';
import { debounce } from '../../utils/utils';
import ActiveRoute from '../../core/routes/ActiveRoute';

class Header extends ExcelComponent {
  static className = 'excel__header';

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input', 'click'],
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
        <div class="excel__header-button" data-button="remove">
          <i class="material-icons" data-button="remove">delete</i>
        </div>
        <div class="excel__header-button" data-button="exit">
          <i class="material-icons" data-button="exit">exit_to_app</i>
        </div>
      </div>
    `;
  }

  onInput(event) {
    const $target = $(event.target);
    this.$dispatch(changeTitle($target.text()));
  }

  onClick(event) {
    const $target = $(event.target);

    if ($target.data.button === 'remove') {
      const decision = confirm(
        'Вы действительно хотите удалить данную таблицу?',
      );

      if (decision) {
        localStorage.removeItem('excel:' + ActiveRoute.param);
        ActiveRoute.navigate('');
      }
    } else if ($target.data.button === 'exit') {
      ActiveRoute.navigate('');
    }
  }
}

export default Header;
