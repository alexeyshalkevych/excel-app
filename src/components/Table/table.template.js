import { toInlineStyles } from '../../utils/utils';
import { defaultStyles } from '../../constants/defaultStyles';
import parse from '../../core/parse';

const CODES = {
  A: 65,
  Z: 90,
};

const DEFAULT_WIDTH = 120;
const DEFAULT_HEIGHT = 24;

const toChar = (_, index) => String.fromCharCode(CODES.A + index);

const getWidth = (state, index) => (state[index] || DEFAULT_WIDTH) + 'px';

const getHeight = (state, index) => (state[index] || DEFAULT_HEIGHT) + 'px';

const withWidthFromState = state => (column, index) => ({
  column,
  index,
  width: getWidth(state.colState, index),
});

const toCell = (state, row) => (_, col) => {
  const id = `${row}:${col}`;
  const width = getWidth(state.colState, col);
  const data = state.dataState[id] || '';
  const styles = toInlineStyles({
    ...defaultStyles,
    ...state.stylesState[id],
  });

  return `
    <div 
      class="cell" 
      contenteditable 
      data-col="${col}" 
      data-type="cell"
      data-value="${data}"
      data-id="${id}"
      style="${styles}; width: ${width}"
    >${parse(data)}</div>   
  `;
};

const toColumn = ({ column, index, width }) => `
  <div 
    class="column"
    data-type="resizable" 
    data-col="${index}" 
    style="width: ${width}"
  >
    ${column}
    <div class="column__resize" data-resize="col"></div>
  </div>
`;

const createRowMarkup = (index, content, state) => {
  const resize = index
    ? '<div class="row__resize" data-resize="row"></div>'
    : '';
  const height = getHeight(state, index);

  return `
    <div 
      class="row" 
      data-type="resizable" 
      data-row="${index}" 
      style="height: ${height}"
      
    >
      <div class="row__info">
        ${index ? index : ''}
        ${resize}
      </div>
      <div class="row__data">${content}</div>
    </div>
  `;
};

const createTable = (rowsCount = 15, state = {}) => {
  const columnsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const columns = new Array(columnsCount)
    .fill('')
    .map(toChar)
    .map(withWidthFromState(state))
    .map(toColumn)
    .join('');

  rows.push(createRowMarkup(null, columns, {}));

  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(columnsCount)
      .fill('')
      .map(toCell(state, row))
      .join('');

    rows.push(createRowMarkup(row + 1, cells, state.rowState));
  }

  return rows.join('');
};

export default createTable;
