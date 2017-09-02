import * as filesActions from './files.actions';

export interface IFiles {
  directories: string[];
  search?: string;
  loading?: boolean;
}

export const initialState = {
  directories: []
};

export function fileReducer(state: IFiles = initialState, action: filesActions.Actions): IFiles {

  switch (action.type) {

    case filesActions.GET_FILES:

      return Object.assign({}, initialState, {
        search: action.payload,
        loading: true
      });

    case filesActions.GET_FILES_SUCCESS:

      return Object.assign({}, state, {
        directories: action.payload,
        loading: false
      });

    case filesActions.GET_FILES_FAIL:

      return Object.assign({}, state, {
        loading: false
      });

    default:
      return state;
  }
}
