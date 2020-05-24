import {
  TABLE_RESIZE,
  CHANGE_TEXT,
  CHANGE_STYLES,
  APPLY_STYLE,
  CHANGE_TITLE,
  UPDATE_DATE,
} from '../../constants/actionTypes';

export const tableResize = data => ({
  type: TABLE_RESIZE,
  payload: data,
});

export const changeText = data => ({
  type: CHANGE_TEXT,
  payload: data,
});

export const changeStyles = data => ({
  type: CHANGE_STYLES,
  payload: data,
});

export const applyStyle = data => ({
  type: APPLY_STYLE,
  payload: data,
});

export const changeTitle = data => ({
  type: CHANGE_TITLE,
  payload: data,
});

export const updateDate = () => ({
  type: UPDATE_DATE,
});
