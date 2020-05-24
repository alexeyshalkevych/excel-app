import { storage } from '../utils/utils';
import { defaultStyles, defaultTitle } from '../constants/defaultStyles';

const defaultState = {
  title: defaultTitle,
  colState: {},
  rowState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyles,
};

const normalize = state => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: '',
});

export const initialState = storage('excel-state')
  ? normalize(storage('excel-state'))
  : defaultState;
