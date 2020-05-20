const CODES = {
  A: 65,
  Z: 90,
};

const toChar = (_, index) => String.fromCharCode(CODES.A + index);

const toCell = (_, col) => `
  <div class="cell" contenteditable data-col="${col}"></div>  
`;

const toColumn = (content, index) => `
  <div class="column" data-type="resizable" data-col="${index}">
    ${content}
    <div class="column__resize" data-resize="col"></div>
  </div>
`;

const createRowMarkup = (index, content) => `
  <div class="row" data-type="resizable">
    <div class="row__info">
      ${index ? index : ''}
      ${index ? '<div class="row__resize" data-resize="row"></div>' : ''}
    </div>
    <div class="row__data">${content}</div>
  </div>
`;

const createTable = (rowsCount = 15) => {
  const columnsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const columns = new Array(columnsCount)
    .fill('')
    .map(toChar)
    .map(toColumn)
    .join('');

  rows.push(createRowMarkup(null, columns));

  for (let index = 0; index < rowsCount; index++) {
    const cells = new Array(columnsCount).fill('').map(toCell).join('');

    rows.push(createRowMarkup(index + 1, cells));
  }

  return rows.join('');
};

export default createTable;
