import Page from '../core/Page';
import { $ } from '../core/dom';
import { createRecordsTable } from './dashboard.functions';

class DashboardPage extends Page {
  getRoot() {
    const id = Date.now().toString();
    return $.create('div', 'dashboard').html(`
    <div class="dashboard__header">
      <h1>Excel Панель управления</h1>
    </div>
    <div class="dashboard__new">
      <div class="dashboard__view">
        <a href="#excel/${id}" class="dashboard__create">
          Новая <br />
          Таблица
        </a>
      </div>
    </div>
    <div class="dashboard__table dashboard__view">
     ${createRecordsTable()}
    </div>
    `);
  }
}

export default DashboardPage;
