import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { fileReducer, IFiles } from './files/files.reducer';
import { DatabaseService } from '../services/db.service';

const db = new DatabaseService();

// all new reducers should be define here
export interface IAppState {
  files: IFiles;
}

// all new reducers should be define here
export const reducers: ActionReducerMap<IAppState> = {
  files: fileReducer
};

// console.log all actions
export function logger(reducer: ActionReducer<IAppState>): ActionReducer<any, any> {
  return function (state: IAppState, action: any): IAppState {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

/**
 * Persist store on file system
 *
 * @param {ActionReducer<IAppState>} reducer
 * @returns {ActionReducer<any, any>}
 */
export function persist(reducer: ActionReducer<IAppState>): ActionReducer<any, any> {
  return function (state: IAppState, action: { type: string }): IAppState {

    if (state) {
      db.setState(state);
    }

    console.log(action.type, state);
    /*
    if (action.type === '@ngrx/store/init') {
      // console.log('first action');
      // console.log(db.getState());
      state = {
        files: {
          directories: [
            'test 1', 'test 2'
          ]
        }
      };
    } else {
      // rest data
      console.log('rest actions');
    }
    */

    return reducer(state, action);
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */

export const metaReducers: MetaReducer<IAppState>[] = (ENV !== 'production')
  ? [storeFreeze, persist]
  : [persist];
