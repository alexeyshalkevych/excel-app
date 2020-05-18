const CODES = {
  A: 65,
  Z: 90,
};

const toChar = (_, index) => String.fromCharCode(CODES.A + index);

const toCell = content => `
  <div class="cell" contenteditable>${content}</div>  
`;

const toColumn = content => `
  <div class="column">${content}</div>
`;

const createRowMarkup = (index, content) => `
  <div class="row">
    <div class="row__info">${index ? index : ''}</div>
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
