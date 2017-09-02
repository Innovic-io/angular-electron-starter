import { Action } from '@ngrx/store';

export const GET_FILES = '[Files] Get files';
export const GET_FILES_SUCCESS = '[Files] Get files success';
export const GET_FILES_FAIL = '[Files] Get files fail';

export class GetFilesAction implements Action {
  readonly type = GET_FILES;

  constructor(public payload: string) {}
}

export class GetFilesActionSuccess implements Action {
  readonly type = GET_FILES_SUCCESS;

  constructor(public payload: string[]) {}
}

export class GetFilesActionFail implements Action {
  readonly type = GET_FILES_FAIL;

  constructor(public payload: any) {}
}

export type Actions =
  | GetFilesAction
  | GetFilesActionSuccess
  | GetFilesActionFail;
