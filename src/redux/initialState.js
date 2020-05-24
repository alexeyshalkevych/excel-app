import { defaultStyles, defaultTitle } from '../constants/defaultStyles';
import { clone } from '../utils/utils';

const defaultState = {
  title: defaultTitle,
  colState: {},
  rowState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyles,
  openedDate: new Date().toJSON(),
};

const normalize = state => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: '',
});

export const normalizeInitialState = state =>
  state ? normalize(state) : clone(defaultState);
