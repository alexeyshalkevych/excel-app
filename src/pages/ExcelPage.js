import Page from '../core/Page';
import Excel from '../components/Excel/Excel';
import Header from '../components/Header/Header';
import Toolbar from '../components/Toolbar/Toolbar';
import Formula from '../components/Formula/Formula';
import Table from '../components/Table/Table';
import createStore from '../core/createStore';
import rootReducer from '../redux/reducers/rootReducer';
import { storage, debounce, storageName } from '../utils/utils';
import { normalizeInitialState } from '../redux/initialState';

class ExcelPage extends Page {
  getRoot() {
    const params = this.params || Date.now().toString();

    const state = storage(storageName(params));
    const store = createStore(rootReducer, normalizeInitialState(state));
    const stateListener = debounce(state => {
      storage(storageName(params), state);
    }, 300);
    store.subscribe(stateListener);
    this.excel = new Excel({
      components: [Header, Toolbar, Formula, Table],
      store,
    });

    return this.excel.getRoot();
  }

  afterRender() {
    this.excel.init();
  }

  destroy() {
    this.excel.destroy();
  }
}

export default ExcelPage;
