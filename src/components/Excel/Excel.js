import { $ } from '../../core/dom';
import Emitter from '../../core/Emitter';
import StoreSubscriber from '../../core/storeSubscriber';
import { updateDate } from '../../redux/actions/actions';
import { preventDefault } from '../../utils/utils';

class Excel {
  constructor(options) {
    this.components = options.components || [];
    this.store = options.store;
    this.emitter = new Emitter();
    this.subscriber = new StoreSubscriber(this.store);
  }

  getRoot() {
    const $root = $.create('div', 'excel');

    const componentOptions = {
      emitter: this.emitter,
      store: this.store,
    };

    this.components = this.components.map(Component => {
      const $element = $.create('div', Component.className);
      const component = new Component($element, componentOptions);

      $element.html(component.toHTML());
      $root.append($element);

      return component;
    });

    return $root;
  }

  init() {
    if (process.env.NODE_ENV === 'production') {
      document.addEventListener('contextmenu', preventDefault);
    }
    this.store.dispatch(updateDate());
    this.subscriber.subscribeComponents(this.components);
    this.components.forEach(component => component.init());
  }

  destroy() {
    this.subscriber.unsubscribeFromStore();
    this.components.forEach(component => component.destroy());
    document.removeEventListener('contextmenu', preventDefault);
  }
}

export default Excel;
