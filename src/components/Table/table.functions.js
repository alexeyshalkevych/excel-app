import { range } from '../../utils/utils';

export const shouldResize = event => event.target.dataset.resize;

export const isCell = event => event.target.dataset.type === 'cell';

export const matrix = ($target, $current) => {
  const target = $target.id(true);
  const current = $current.id(true);

  const columns = range(current.col, target.col);
  const rows = range(current.row, target.row);

  return columns.reduce((acc, column) => {
    rows.forEach(row => acc.push(`${row}:${column}`));

    return acc;
  }, []);
};

export const nextSelector = (key, { col, row }) => {
  const MIN_VALUE = 0;

  switch (key) {
    case 'Enter':
    case 'ArrowDown':
      row++;
      break;

    case 'Tab':
    case 'ArrowRight':
      col++;
      break;

    case 'ArrowLeft':
      col = col - 1 < MIN_VALUE ? MIN_VALUE : col - 1;
      break;

    case 'ArrowUp':
      row = row - 1 < MIN_VALUE ? MIN_VALUE : row - 1;
      break;

    default:
      break;
  }

  return `[data-id="${row}:${col}"]`;
};
