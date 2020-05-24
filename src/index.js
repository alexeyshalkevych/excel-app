import Excel from './components/Excel/Excel';
import Header from './components/Header/Header';
import Toolbar from './components/Toolbar/Toolbar';
import Formula from './components/Formula/Formula';
import Table from './components/Table/Table';
import createStore from './core/createStore';
import rootReducer from './redux/reducers/rootReducer';
import { storage, debounce } from './utils/utils';
import { initialState } from './redux/initialState';
import './scss/index.scss';

const store = createStore(rootReducer, initialState);

const stateListener = debounce(state => {
  storage('excel-state', state);
}, 300);

store.subscribe(stateListener);

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table],
  store,
});

excel.render();
