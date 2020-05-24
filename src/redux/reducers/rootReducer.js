import {
  TABLE_RESIZE,
  CHANGE_TEXT,
  CHANGE_STYLES,
  APPLY_STYLE,
  CHANGE_TITLE,
  UPDATE_DATE,
} from '../../constants/actionTypes';

const rootReducer = (state, { type, payload }) => {
  let field;
  let val;

  switch (type) {
    case TABLE_RESIZE:
      field = payload.type === 'col' ? 'colState' : 'rowState';
      return { ...state, [field]: value(state, field, payload) };

    case CHANGE_TEXT:
      field = 'dataState';
      return {
        ...state,
        currentText: payload.value,
        [field]: value(state, field, payload),
      };

    case CHANGE_STYLES:
      return { ...state, currentStyles: payload };

    case APPLY_STYLE:
      field = 'stylesState';
      val = state[field] || {};
      payload.ids.forEach(id => {
        val[id] = { ...val[id], ...payload.value };
      });
      return {
        ...state,
        [field]: val,
        currentStyles: { ...state.currentStyles, ...payload.value },
      };

    case CHANGE_TITLE:
      return { ...state, title: payload };

    case UPDATE_DATE: {
      return { ...state, openedDate: new Date().toJSON() };
    }
    default:
      return state;
  }
};

export default rootReducer;

function value(state, field, payload) {
  const value = state[field] || {};
  value[payload.id] = payload.value;

  return value;
}
